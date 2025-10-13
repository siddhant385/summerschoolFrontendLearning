import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './auth';
import { setLocalItem, getLocalItem } from '@/utils/localUtils';
import { getWorkshops,getWorkshopsStats,getUpcomingWorkshops } from '@/api/workshopapi';
import { getTopPerformers } from '@/api/leaderboardapi';


export const PublicContext = createContext();

export const PublicProvider = ({ children }) => {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // LocalStorage se initial value
  const [workshops, setWorkshops] = useState(getLocalItem("workshops") || []);
  const [workshopStats,setWorkshopStats] = useState(getLocalItem("workshopStats") || []);
  const [upcomingWorkshops,setUpComingWorkshops] = useState(getLocalItem("upcomingWorkshops") || []);
  const [topPerformer,setTopPerformer] = useState(getLocalItem("topPerformer") || []);

  // Generic fetch function (dynamic filters)
  const fetchWorkshops = async ({ search, technology, instructor, page = 1, page_size = 20 } = {}) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getWorkshops({ search, technology, instructor, page, page_size });
      setWorkshops(data.workshops);
      setLocalItem("workshops", data.workshops); // localStorage update
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Optional: fetch on mount if user exists
  useEffect(() => {
    let isActive = true;

    const fetchInitialData = async () => {

      setLoading(true);
      try {
        const data = await getWorkshops({ page: 1, page_size: 20 });
        const workshopStatsData = await getWorkshopsStats();
        const upcomingWorkshopsData = await getUpcomingWorkshops(5);
        const topPerformerData = await getTopPerformers();
        if (!isActive) return;

        setWorkshops(data.workshops);
        setWorkshopStats(workshopStatsData.data);
        setUpComingWorkshops(upcomingWorkshopsData.data);
        setTopPerformer(topPerformerData.data)
        // setWorkshopStats(workshopStatsData)
        setLocalItem("workshops", data.workshops);
        setLocalItem("workshopStats",workshopStatsData.data);
        setLocalItem("upcomingWorkshops",upcomingWorkshopsData.data);
        setLocalItem("topPerformer",topPerformerData.data);
      } catch (err) {
        if (isActive) setError(err);
      } finally {
        if (isActive) setLoading(false);
      }
    };

    fetchInitialData();

    return () => {
      isActive = false;
    };
  }, [user]);

  const contextValue = {
    workshops,
    workshopStats,
    topPerformer,
    upcomingWorkshops,
    loading,
    error,
    fetchWorkshops,
    isAuthenticated: !!user,
  };

  return (
    <PublicContext.Provider value={contextValue}>
      {children}
    </PublicContext.Provider>
  );
};

export const usePublic = () => {
  const context = useContext(PublicContext);
  if (!context) throw new Error('usePublic must be used within a PublicProvider');
  return context;
};
