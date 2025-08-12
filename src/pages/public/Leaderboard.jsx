import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trophy, Medal, Award } from 'lucide-react';

const Leaderboard = () => {
  // Dummy data for leaderboard
  const leaderboardData = [
    {
      id: 1,
      name: "Rahul Sharma",
      score: 2847,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      level: "Expert",
      streak: 15,
      change: "+2"
    },
    {
      id: 2,
      name: "Priya Patel",
      score: 2634,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      level: "Pro",
      streak: 12,
      change: "+1"
    },
    {
      id: 3,
      name: "Arjun Singh",
      score: 2521,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      level: "Pro",
      streak: 8,
      change: "-1"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      score: 2398,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      level: "Advanced",
      streak: 6,
      change: "+3"
    },
    {
      id: 5,
      name: "Vikram Kumar",
      score: 2287,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      level: "Advanced",
      streak: 4,
      change: "0"
    },
    {
      id: 6,
      name: "Anita Mehta",
      score: 2156,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      level: "Intermediate",
      streak: 11,
      change: "+1"
    },
    {
      id: 7,
      name: "Rohit Verma",
      score: 2034,
      avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face",
      level: "Intermediate",
      streak: 3,
      change: "-2"
    },
    {
      id: 8,
      name: "Kavya Reddy",
      score: 1923,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      level: "Beginner",
      streak: 7,
      change: "+2"
    }
  ];

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-purple-100 text-purple-800';
      case 'Pro':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getChangeColor = (change) => {
    if (change.startsWith('+')) return 'text-green-600';
    if (change.startsWith('-')) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          🏆 Leaderboard
        </CardTitle>
        <p className="text-gray-600 mt-2">Top performers this week</p>
      </CardHeader>
      <CardContent className="space-y-1">
        {leaderboardData.map((user, index) => {
          const rank = index + 1;
          const isTopThree = rank <= 3;
          
          return (
            <div
              key={user.id}
              className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 hover:shadow-md ${
                isTopThree 
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-4 flex-1">
                <div className="flex-shrink-0 w-8 flex justify-center">
                  {getRankIcon(rank)}
                </div>
                
                <Avatar className={`h-12 w-12 ${isTopThree ? 'ring-2 ring-yellow-400' : ''}`}>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-semibold truncate ${isTopThree ? 'text-lg' : 'text-base'}`}>
                      {user.name}
                    </h3>
                    <Badge className={`text-xs ${getLevelBadgeColor(user.level)}`}>
                      {user.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    🔥 {user.streak} day streak
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-right">
                <div>
                  <p className={`font-bold ${isTopThree ? 'text-xl' : 'text-lg'}`}>
                    {user.score.toLocaleString()}
                  </p>
                  <p className={`text-sm font-medium ${getChangeColor(user.change)}`}>
                    {user.change !== '0' ? user.change : '--'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
          <p className="text-sm text-blue-800">
            💡 <strong>Tip:</strong> Complete daily challenges to improve your ranking!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;