import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '@/context/auth'; // apna context path daal

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth(); // useAuth se user aur loading state le lo
  const location = useLocation();

  if (loading) {
    // Agar abhi auth check ho raha hai to loading dikhado (optional)
    return <div>Loading...</div>;
  }

  if (!user) {
    // Agar user logged out hai to login page bhejo, aur redirect ke liye current page ka path pass karo
    return <Navigate to={`/login?from=${location.pathname}`} replace />;
  }

  // User logged in hai to children component dikhao
  return children;
}
