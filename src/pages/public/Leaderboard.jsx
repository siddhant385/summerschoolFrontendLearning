import React, { useState, useEffect } from 'react';
import { Leaderboard } from '@/components/LeaderBoard'
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Trophy, Users, Target } from "lucide-react";
import { getLeaderboard, getTopPerformers } from '@/api/leaderboardapi';
import { useAuth } from '@/context/auth';
import { usePublic } from '@/context/public';
import { usePrivate } from '@/context/private';

const LeaderboardPage = () => {
  const { user } = useAuth();
  const {topPerformer} = usePublic();
  const {leaderboard,fetchLeaderboardData,loading,error} = usePrivate();
  const leaderboardData = leaderboard;
  // const [GuestleaderData, setGuestleaderData] = useState(null);
  const GuestleaderData = topPerformer;
  
  // Check if user is logged in (you can replace this with your auth logic)
  const isLoggedIn = !!user; // Replace with your auth check
  useEffect(() => {
    isLoggedIn ? fetchLeaderboardData():console.log("Hello");
    
  }, [isLoggedIn]);

      // const fetchLeaderboardData = async () => {
      // setLoading(true);
      // try {
      //   // yaha tu params de sakta hai
      //   const data = await getLeaderboard(20, 0, 0, "all_time"); 
      //   console.log(data)
      //   setLeaderboardData(data.data); // backend ke hisaab se
        

      // } catch (err) {
      //   setError(err);
      // } finally {
      //   setLoading(false);
      // }
    // };

    // const fetchGuestData = async () => {
    //   setLoading(true);
    //   try {
    //     // yaha tu params de sakta hai
    //     const data = await getTopPerformers(); 
    //     console.log(data.data)
    //     setGuestleaderData(data.data); // backend ke hisaab se
        

    //   } catch (err) {
    //     setError(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    


  const getStatsCards = () => {
    if (!leaderboardData) return null;

    if (isLoggedIn) {
      // Logged in user stats
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card >
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <p className="text-2xl font-bold">{leaderboardData.total_users}</p>
              <p className="text-xs text-muted-foreground">Total Users</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
              <p className="text-2xl font-bold">#{leaderboardData.current_user_rank}</p>
              <p className="text-xs text-muted-foreground">Your Rank</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Target className="h-6 w-6 mx-auto mb-2 text-green-500" />
              <p className="text-2xl font-bold">{leaderboardData.current_user_points}</p>
              <p className="text-xs text-muted-foreground">Your Points</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Badge variant="outline" className="w-full justify-center py-2">
                Page {leaderboardData.page}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">Current Page</p>
            </CardContent>
          </Card>
        </div>
      );
    } else {
      // Guest user stats  
      return (
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {console.log("returning User Data")}
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <p className="text-2xl font-bold">{GuestleaderData.total_participants}</p>
              <p className="text-xs text-muted-foreground">Participants</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="h-6 w-6 mx-auto text-center mb-2 text-yellow-500" />
              <p className="text-2xl font-bold">{GuestleaderData.highest_points}</p>
              <p className="text-xs text-muted-foreground">Highest Points</p>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-1 col-span-2">
            <CardContent className="p-4 text-center">
              <Badge variant="secondary" className="w-full justify-center py-2">
                Top 3 Only
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">Guest View</p>
            </CardContent>
          </Card>
        </div>
      );
    }
  };

  const getLeaderboardUsers = () => {
    if (!leaderboardData && !GuestleaderData) return [];

    // Return appropriate data based on login status
    return isLoggedIn ? leaderboardData?.entries : GuestleaderData.top_three;
  }; leaderboardData

  if (!getLeaderboardUsers()) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error.message}</p>
          <button 
            onClick={fetchLeaderboardData}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl text-foreground md:text-4xl font-bold mb-2">
            🏆 Leaderboard
          </h1>
          <p className="text-muted-foreground">
            {isLoggedIn 
              ? "See where you stand among all participants" 
              : "Top performers in our community"}
          </p>
        </div>

        {/* Stats Cards */}
        {getStatsCards()}

        {/* Leaderboard Component */}
        <Leaderboard 
          users={getLeaderboardUsers()}
          title={isLoggedIn ? "All Participants" : "Top 3 Performers"}
          maxRanks={isLoggedIn ? 20 : 3}
        />

        {/* Login Prompt for Guests */}
        {!isLoggedIn && (
          <Card className="mt-10 w-[40%] mx-auto border-dashed">
            <CardContent className="p-1 text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Want to see the full leaderboard and your rank?
              </p>
              <button 
                onClick={() => window.location.href = '/login'}
                className="px-6 py-3 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                Login to View More
              </button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;