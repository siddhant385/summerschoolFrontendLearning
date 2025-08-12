import React, { createContext, useState, useEffect } from "react";
import { supabase } from "@/api/supabaseClient";
import { useNavigate } from 'react-router-dom';
import apiClient from '@/api/apiClient';
import { getSessionItem, removeSessionItem, setSessionItem } from "@/utils/localUtils";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(() => getSessionItem("user") || null);
    const navigate = useNavigate();

    // Function to create user in backend (for new logins)
    const createUser = async () => {
        try {
            console.log("Creating user in backend...");
            const response = await apiClient.get('/auth/me');
            console.log("User created:", response.data);
            const userData = response.data.data;
            setUser(userData);
            setSessionItem("user", userData);
            return userData;
        } catch (error) {
            console.error("Error creating user:", error);
            setUser(null);
            removeSessionItem("user");
            return null;
        }
    };

    // Function to fetch existing user data
    const fetchUserData = async () => {
        try {
            console.log("Fetching user data...");
            const response = await apiClient.get('/users/me');
            console.log("User data fetched:", response.data);
            const userData = response.data.data;
            setUser(userData);
            setSessionItem("user", userData);
            return userData;
        } catch (error) {
            console.error("Error fetching user data:", error);
            setUser(null);
            removeSessionItem("user");
            return null;
        }
    };

    useEffect(() => {
        let mounted = true;

        const initializeAuth = async () => {
            try {
                setLoading(true);
                
                // Check if we have a current session
                const { data: { session }, error } = await supabase.auth.getSession();
                
                if (error) {
                    console.error("Session error:", error);
                    if (mounted) {
                        setUser(null);
                        removeSessionItem("user");
                    }
                    return;
                }

                // If session exists, check if we already have user data
                if (session?.access_token && mounted) {
                    // If we already have user data in state, no need to fetch
                    if (!user) {
                        await fetchUserData();
                    }
                } else if (mounted) {
                    // No session, clear any stored user data
                    setUser(null);
                    removeSessionItem("user");
                }
            } catch (error) {
                console.error("Auth initialization error:", error);
                if (mounted) {
                    setUser(null);
                    removeSessionItem("user");
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        };

        initializeAuth();

        // Set up auth state listener
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (!mounted) return;

                console.log("Auth event:", event);
                
                try {
                    switch (event) {
                        case 'SIGNED_IN':
                            setLoading(true);
                            if (session?.access_token) {
                                // Check if user was already logged in (stored in localStorage)
                                const storedUser = getSessionItem("user");
                                if (storedUser) {
                                    // User was already logged in, just set the user
                                    setUser(storedUser);
                                    navigate('/dashboard');
                                } else {
                                    // New login, create user in backend
                                    const userData = await createUser();
                                    if (userData) {
                                        navigate('/dashboard');
                                    }
                                }
                            }
                            setLoading(false);
                            break;
                        case 'TOKEN_REFRESHED':
                            // On token refresh, just fetch user data if we don't have it
                            if (session?.access_token && !user) {
                                await fetchUserData();
                            }
                            break;

                        case 'SIGNED_OUT':
                            setUser(null);
                            removeSessionItem("user");
                            navigate('/');
                            break;

                        case 'PASSWORD_RECOVERY':
                            console.log("Password recovery initiated");
                            break;

                        case 'USER_UPDATED':
                            console.log("User updated");
                            if (session?.access_token) {
                                await fetchUserData();
                            }
                            break;

                        default:
                            // Handle INITIAL_SESSION or other events
                            if (session?.access_token) {
                                await fetchUserData();
                            } else {
                                setUser(null);
                                removeSessionItem("user");
                            }
                            break;
                    }
                } catch (error) {
                    console.error("Auth state change error:", error);
                    setUser(null);
                    removeSessionItem("user");
                }
            }
        );

        // Cleanup function
        return () => {
            mounted = false;
            subscription?.unsubscribe();
        };
    }, [navigate]);

    const loginWithGoogle = async () => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/dashboard`
                }
            });
            
            if (error) {
                throw error;
            }
            
            // Don't set loading to false here - let the auth state change handle it
        } catch (error) {
            console.error("Login error:", error.message);
            setLoading(false);
            throw error; // Re-throw so calling component can handle
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signOut();
            
            if (error) {
                throw error;
            }
            
            // Auth state change listener will handle cleanup
        } catch (error) {
            console.error("Logout error:", error.message);
            setLoading(false);
            throw error;
        }
    };

    const contextValue = {
        user,
        loading,
        loginWithGoogle,
        logout,
        refetchUser: fetchUserData // Bonus: manual refresh function
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use auth context
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};