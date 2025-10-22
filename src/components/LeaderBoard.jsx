import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const Leaderboard = ({ 
  users = [], 
  title = "Leaderboard", 
  maxRanks = 10 
}) => {
  const topUsers = users.slice(0, maxRanks);

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return "bg-yellow-500 text-white";
      case 2: return "bg-gray-400 text-white";
      case 3: return "bg-amber-600 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return rank;
    }
  };

  return (
    <Card className=" w-full max-w-2xl mx-auto">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl md:text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-2 px-2 md:px-6">
        {topUsers.map((user) => (
          <div 
            key={user.user_id}
            className="flex items-center gap-2 md:gap-4 p-2 md:p-3 rounded-lg border hover:bg-muted/50 transition-colors"
          >
            {/* Rank */}
            <Badge className={`${getRankColor(user.rank)} min-w-[2rem] h-8 flex items-center justify-center text-xs md:text-sm`}>
              {getRankIcon(user.rank)}
            </Badge>
            
            {/* Avatar */}
            <Avatar className="h-8 w-8 md:h-10 md:w-10 flex-shrink-0">
              <AvatarImage src={user.profile_pic_url} alt={user.name} />
              <AvatarFallback className="text-xs md:text-sm">
                {user.name?.charAt(0)?.toUpperCase() || "?"}
              </AvatarFallback>
            </Avatar>
            
            {/* User Info */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate text-sm md:text-base">{user.name}</p>
              <div className="flex flex-col md:flex-row md:gap-4 text-xs text-muted-foreground">
                <span>Workshops: {user.workshops_attended}</span>
                <span className="hidden md:inline">•</span>
                <span>Certificates: {user.certificates_earned}</span>
              </div>
            </div>
            
            {/* Points */}
            <div className="text-right flex-shrink-0">
              <p className="font-bold text-base md:text-lg">{user.points}</p>
              <p className="text-xs text-muted-foreground">points</p>
            </div>
          </div>
        ))}
        
        {topUsers.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No users found
          </div>
        )}
      </CardContent>
    </Card>
  );
};