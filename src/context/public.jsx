import React, { createContext, useState, useEffect } from "react";
import { setLocalItem, getLocalItem } from "@/utils/localUtils";
import { getUpcomingWorkshops, getWorkshops, getWorkshopsStats } from "@/api/workshopapi"; // assume API function
import { getTopPerformers } from "@/api/leaderboardapi";

export const PublicContext = createContext();
export default function PublicProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [workShopData, setWorkShopData] = useState(() => getLocalItem("workshops") || []);
  const [error, setError] = useState(null);
  const [upcomingWorkshops, setUpcomingWorkshops] = useState(() => getLocalItem("upcomingWorkshops") || []);
  const [workshopStats, setWorkshopStats] = useState(() => getLocalItem("workshopStats") || []);
  const [topPerformer, setTopPerformer] = useState(() => getLocalItem("topPerformer") || []);

  const fetchData = async () => {
    try {
      console.log("sending api request...")
      const data = await getWorkshops({
        search:"",
        technology:"",
        instructor:"",
        page: 1,
        page_size: 20,
      });
      setWorkShopData(data.workshops);
      console.log(data.workshops)
      setLocalItem("workshops", data.workshops);
    } catch (err) {
      setError(err);
    } finally {
    }
  };
  const fetchStats = async () => {
      try {
        const data = await getWorkshopsStats();
        // console.log(data.data)
        setWorkshopStats(data.data);
        setLocalItem("workshopStats",data.data);
      } catch (error) {
        console.error("Error fetching workshop stats:", error);
      }
  };
  const fetchTopPerformers = async () => {
      try {
        const data = await getTopPerformers();
        setTopPerformer(data.data.top_three);
        setLocalItem("topPerformer",data.data.top_three)
        console.log(data.data.top_three)
      } catch (error) {
        console.error("Error fetching top performers:", error);
      }
    };
  const fetchUpcomingWorkshops = async () => {
      try {
        const data = await getUpcomingWorkshops(5);
        setUpcomingWorkshops(data.data);
        setLocalItem("upcomingWorkshops",data.data)
      } catch (err) {
        console.error("Error fetching upcoming workshops:", err);
      } finally {
      }
    };
    const refreshAll = async () => {
      setLoading(true);
      await Promise.all([
        fetchData(),           // workshops
        fetchStats(),          // stats
        fetchTopPerformers(),  // top performers
        fetchUpcomingWorkshops() // upcoming
      ]);
      setLoading(false);
    };


  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      await Promise.all([
        fetchData(),
        fetchStats(),
        fetchTopPerformers(),
        fetchUpcomingWorkshops()
      ]);
      setLoading(false);
    };
    fetchAll();
  }, []);


  return (
    <PublicContext.Provider
      value={{
        workShopData,
        fetchData,
        loading,
        upcomingWorkshops,
        workshopStats,
        topPerformer,
        error,
        refreshAll
      }}
    >
      {children}
    </PublicContext.Provider>
  );
}

export const usePublic = () => {
    const context = React.useContext(PublicContext);
    if (context === undefined) {
        throw new Error('usePublic must be used within a PublicProvider');
    }
    return context;
};