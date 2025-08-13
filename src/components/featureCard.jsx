import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, LogIn } from "lucide-react";

export const FeatureCard = ({ 
  isLoggedIn = false
}) => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };
  const guestFeatures = [
    "Subscribe to Workshops",
    "Get Reminders",
    "View Workshop Content",
    "Get Top 3 Leaderboard"
  ];

  const userFeatures = [
    "Set Profile",
    "Get Certificates", 
    "Get and Submit Assignments",
    "Join Leaderboard",
    
    ...guestFeatures // All guest features included
  ];

  const currentFeatures = isLoggedIn ? userFeatures : guestFeatures;

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Status Card */}
      <Card className="border-2">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Badge variant={isLoggedIn ? "default" : "secondary"} className="text-sm">
              {isLoggedIn ? "Logged In User" : "Guest User"}
            </Badge>
          </div>
          <CardTitle className="text-xl">
            {isLoggedIn ? "Welcome Back!" : "Join Us Today"}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Features List */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              Available Features
            </h4>
            
            {currentFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Additional Features for Users */}
          {!isLoggedIn && (
            <div className="space-y-3 pt-4 border-t">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                Unlock with Login
              </h4>
              
              {["Set Profile", "Get Certificates", "Submit Assignments", "Track Progress"].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 opacity-60">
                  <Circle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Login Button */}
          {!isLoggedIn && (
            <div className="pt-4">
              <Button 
                onClick={handleLoginRedirect}
                className="w-full flex items-center gap-2"
                size="lg"
              >
                <LogIn className="h-5 w-5" />
                Login to Unlock Features
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Login with Google and unlock all features
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};