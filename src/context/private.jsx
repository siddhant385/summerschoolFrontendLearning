import React, { createContext, useState, useEffect } from "react";
import { useAuth } from "./auth";
import { getSessionItem,removeSessionItem,setSessionItem } from "@/utils/localUtils";
import { getMyRank } from "@/api/leaderboardapi";
import { getMyWorkshops } from "@/api/userworkshopapi";
import { getMyAssignments } from "@/api/assignmentapi";

export const PrivateContext = createContext();
export default function PublicProvider({ children }) {
	const {user,logout} = useAuth();

	const [enrolledWorkshops,setEnrolledWorkshops] = useState(() => getSessionItem("enrolledWorkshops") || []);
	const [leaderboardUser,setleaderboardUser] = useState(() => getSessionItem("leaderboardUser") || []);
	const [assignments, setAssignments] = useState(() => getSessionItem("assignments") || []);
	const [loading, setLoading] = useState(false);


	const fetchUserRank = async () => {
      setLoading(true);
      try {
        const data = await getMyRank();

        console.log(data.data.user_rank)
        setSessionItem("leaderboardUser",data.data.user_rank);
        setleaderboardUser(data.data.user_rank);
        // setEnrolledWorkshops(data.workshops); // backend ke hisaab se


      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchEnrolledWorkshops = async () => {
      setLoading(true);
      try {
        const data = await getMyWorkshops();
        console.log(data.workshops)
        setSessionItem("enrolledWorkshops",data.workshops)
        setEnrolledWorkshops(data.workshops); // backend ke hisaab se


      } catch (err) {
        console.log(err);
      } finally {
        
      }
    };

    const fetchAssignments = async () => {
      setLoading(true);
      try {
        const data = await getMyAssignments();
        console.log(data)
        setSessionItem("assignments",data.data.assignments);
        setAssignments(data.data.assignments); // backend ke hisaab se
        // setleaderboardUser(data.data.user_rank);
        // setEnrolledWorkshops(data.workshops); // backend ke hisaab se


      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      await Promise.all([
        fetchUserRank(),
        fetchAssignments(),
        fetchEnrolledWorkshops()
      ]);
      setLoading(false);
    };
    fetchAll();
  }, []);
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


    return (
    <PrivateContext.Provider
      value={{
        enrolledWorkshops,
        loading,
        assignments,
        leaderboardUser,
        refreshAll
      }}
    >
      {children}
    </PrivateContext.Provider>
  );

}
export const usePrivate = () => {
    const context = React.useContext(PrivateContext);
    if (context === undefined) {
        throw new Error('usePublic must be used within a PublicProvider');
    }
    return context;
};

