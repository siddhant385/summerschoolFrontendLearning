import React, { createContext, useState, useContext, useEffect } from 'react';
import { getMyWorkshops } from '@/api/userworkshopapi';
import { getMyProfile, getMyProfileStatus } from '@/api/userapi';
import { getLeaderboard, getMyRank } from '@/api/leaderboardapi';
import { getMyAssignments } from '@/api/assignmentapi';
import { getMyReviews } from '@/api/reviewapi'; // top pe import

import { useAuth } from './auth';
import { setLocalItem, getLocalItem } from '@/utils/localUtils';

export const PrivateContext = createContext();

export const PrivateProvider = ({ children }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [myWorkshops, setMyWorkshops] = useState(getLocalItem("myWorkshops"));
  const [profile, setProfile] = useState(getLocalItem("profile"));
  const [profileStatus, setProfileStatus] = useState(getLocalItem("profileStatus"));
  const [leaderboard, setLeaderboard] = useState(getLocalItem("leaderboard"));
  const [myRank, setMyRank] = useState(getLocalItem("myRank"));
  const [myAssignments, setMyAssignments] = useState(getLocalItem("myAssignments"));
  const [myReviews, setMyReviews] = useState(getLocalItem("myReviews"));


  const fetchLeaderboardData = async () => {
      setLoading(true);
      try {
        // yaha tu params de sakta hai
        const data = await getLeaderboard(); 
        console.log(data)
        setLeaderboard(data.data); // backend ke hisaab se
        setLocalItem("leaderboard",data.data);

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

  const fetchmyReviews = async () => {
    setLoading(true);
    try {
      const data = await getMyReviews();
      setMyReviews(data.data);
      setLocalItem("myReviews",data.data);
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
  };

  const fetchMyWorkshops = async () => {
    setLoading(true);
    try {
      const data = await getMyWorkshops();
      setMyWorkshops(data);
      setLocalItem("myWorkshops",data);
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    let isActive = true;
    const fetchUserData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const [
          myWorkshopData,
          profileData,
          profileStatusData,
          leaderboardData,
          rankData,
          assignmentsData,
          reviewsData
        ] = await Promise.all([
          getMyWorkshops(),
          getMyProfile(),
          getMyProfileStatus(),
          getLeaderboard(),
          getMyRank(),
          getMyAssignments(),
          getMyReviews()
        ]);
        if (isActive) {
          setLocalItem("myWorkshops", myWorkshopData);
          setLocalItem("profile", profileData.data);
          setLocalItem("profileStatus", profileStatusData.data);
          setLocalItem("leaderboard", leaderboardData.data);
          setLocalItem("myRank", rankData.data);
          setLocalItem("myAssignments", assignmentsData.data);
          setLocalItem("myReviews", reviewsData.data);



          setMyWorkshops(myWorkshopData);
          setProfile(profileData.data);
          setProfileStatus(profileStatusData.data);
          setLeaderboard(leaderboardData.data);
          setMyRank(rankData.data);
          setMyAssignments(assignmentsData.data);
          setMyReviews(reviewsData.data);
        } else {
          console.log('Fetch result ignored — user logged out meanwhile.');
        }
      } catch (err) {
        console.error('Error fetching private data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    return () => {
      isActive = false;
    };
  }, [user]);

  const contextValue = {
    myWorkshops,
    myReviews,
    profile,
    profileStatus,
    leaderboard,
    fetchLeaderboardData,
    fetchmyReviews,
    fetchMyWorkshops,
    error,
    myRank,
    myAssignments,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <PrivateContext.Provider value={contextValue}>
      {children}
    </PrivateContext.Provider>
  );
};

export const usePrivate = () => {
  const context = useContext(PrivateContext);
  if (!context) throw new Error('usePrivate must be used within a PrivateProvider');
  return context;
};
