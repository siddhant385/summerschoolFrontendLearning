import React, { useState, useEffect } from "react";
import {
  Settings,
  Trophy,
  Calendar,
  Award,
  Star,
  ExternalLink,
  Mail,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/auth";
import { getMyRank } from "@/api/leaderboardapi";
import { getMyAssignments } from "@/api/assignmentapi";
import { getMyWorkshops } from "@/api/userworkshopapi";

// const WorkshopDashboard = () => {
// Sample data based on your schema

// const [enrolledWorkshops,setEnrolledWorkshops] = useState([]);
// const [leaderboardUser,setleaderboardUser] = useState([]);
// const [assignments, setAssignments] = useState([]);
// const [loading, setLoading] = useState(false);

// // const [user] = useState({
// //   name: "Rahul Sharma",
// //   email: "rahul@example.com",
// //   profile_pic_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
// //   points: 1250,
// //   profile_complete: true,
// //   rank: 5 // From leaderboard calculation
// // });
// useEffect(() => {
//   // Fetch enrolled workshops from API or state management
//   const fetchEnrolledWorkshops = async () => {
//     setLoading(true);
//     try {
//       const data = await getMyWorkshops();
//       console.log(data.workshops)
//       setEnrolledWorkshops(data.workshops); // backend ke hisaab se

//     } catch (err) {
//       console.log(err);
//     } finally {

//     }
//   };

//   const fetchUserRank = async () => {
//     setLoading(true);
//     try {
//       const data = await getMyRank();
//       console.log(data.data.user_rank)
//       setleaderboardUser(data.data.user_rank);
//       // setEnrolledWorkshops(data.workshops); // backend ke hisaab se

//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const fetchAssignments = async () => {
//     setLoading(true);
//     try {
//       const data = await getMyAssignments();
//       console.log(data)
//       setAssignments(data.data.assignments); // backend ke hisaab se
//       // setleaderboardUser(data.data.user_rank);
//       // setEnrolledWorkshops(data.workshops); // backend ke hisaab se

//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchAssignments();
//   fetchEnrolledWorkshops();
//   fetchUserRank();

// }, []);

// // const [enrolledWorkshops] = useState([
// //   {
// //     id: 1,
// //     title: "React Advanced Concepts",
// //     description: "Deep dive into React hooks, context, and performance optimization",
// //     technologies: ["React", "JavaScript", "Redux"],
// //     conducted_by: "Priya Singh",
// //     scheduled_at: "2025-08-20T10:00:00",
// //     created_at: "2025-08-01T09:00:00"
// //   },
// //   {
// //     id: 2,
// //     title: "Node.js Backend Development",
// //     description: "Building scalable backend applications with Node.js and Express",
// //     technologies: ["Node.js", "Express", "MongoDB"],
// //     conducted_by: "Amit Kumar",
// //     scheduled_at: "2025-08-10T14:00:00",
// //     created_at: "2025-07-15T11:00:00"
// //   }
// // ]);

// // const [assignments] = useState([
// //   {
// //     id: 1,
// //     title: "Build Todo App with React Hooks",
// //     submit_link: "https://github.com/user/react-todo",
// //     workshop_title: "React Advanced Concepts",
// //     status: "submitted",
// //     marks: 85,
// //     feedback: "Great implementation! Consider adding error handling.",
// //     created_at: "2025-08-15T16:30:00"
// //   },
// //   {
// //     id: 2,
// //     title: "REST API with Authentication",
// //     submit_link: "https://github.com/user/node-api",
// //     workshop_title: "Node.js Backend Development",
// //     status: "submitted",
// //     marks: null,
// //     feedback: null,
// //     created_at: "2025-08-12T18:45:00"
// //   }
// // ]);

// const [certificates] = useState([
//   {
//     id: 1,
//     workshop_title: "JavaScript Fundamentals",
//     certificate_url: "https://example.com/cert1.pdf",
//     created_at: "2025-07-30T12:00:00",
//     technologies: ["JavaScript", "ES6"]
//   }
// ]);

// const [reviews] = useState([
//   {
//     id: 1,
//     workshop_title: "JavaScript Fundamentals",
//     rating: 5,
//     review_description: "Excellent workshop! Very clear explanations and practical examples.",
//     created_at: "2025-07-31T14:20:00"
//   }
// ]);

// const formatDate = (dateString) => {
//   return new Date(dateString).toLocaleDateString('hi-IN', {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
//   });
// };

// const isUpcoming = (dateString) => {
//   return new Date(dateString) > new Date();
// };

// const renderStars = (rating) => {
//   return Array.from({ length: 5 }, (_, i) => (
//     <Star
//       key={i}
//       className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
//     />
//   ));
// };

const UserProfile = () => {
  const { user } = useAuth();
  const [leaderboardUser, setleaderboardUser] = useState([]);
  const [enrolledWorkshops, setEnrolledWorkshops] = useState([]);
  const [topTechnologies, setTopTechnologies] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [user] = useState({
  //   name: "Rahul Sharma",
  //   email: "rahul@example.com",
  //   profile_pic_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  //   points: 1250,
  //   profile_complete: true,
  //   rank: 5,
  //   created_at: "2024-01-15T10:00:00",
  //   role: "student"
  // });

  useEffect(() => {
    // Fetch enrolled workshops from API or state management
    const fetchEnrolledWorkshops = async () => {
      setLoading(true);
      try {
        const data = await getMyWorkshops();
        console.log(data.workshops);
        setEnrolledWorkshops(data.workshops);
        // backend ke hisaab se
      } catch (err) {
        console.log(err);
      } finally {
      }
    };


    const fetchUserRank = async () => {
      setLoading(true);
      try {
        const data = await getMyRank();
        console.log(data.data.user_rank);
        setleaderboardUser(data.data.user_rank);
        // setEnrolledWorkshops(data.workshops); // backend ke hisaab se
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    const fetchAssignments = async () => {
      setLoading(true);
      try {
        const data = await getMyAssignments();
        console.log(data);
        setAssignments(data.data.assignments); // backend ke hisaab se
        const submittedCount = data.data.assignments.filter(
          (a) => a.status === "submitted",
        ).length;

        setStats((prev) => ({
          ...prev,
          completedAssignments: submittedCount,
        }));
        // setleaderboardUser(data.data.user_rank);
        // setEnrolledWorkshops(data.workshops); // backend ke hisaab se
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAssignments();
    fetchEnrolledWorkshops();
    fetchUserRank();
  }, []);

  useEffect(() => {
      if (enrolledWorkshops.length > 0) {
        const techMap = {};

        enrolledWorkshops.forEach((workshop) => {
          workshop.technologies.forEach((tech) => {
            if (techMap[tech]) {
              techMap[tech] += 1;
            } else {
              techMap[tech] = 1;
            }
          });
        });

        // object ko array me convert
        const techArray = Object.entries(techMap).map(([name, count]) => ({
          name,
          count,
        }));

        // optional: descending order by count
        techArray.sort((a, b) => b.count - a.count);

        setTopTechnologies(techArray);
      }
    }, [enrolledWorkshops]);

  // User stats from various tables
  const [stats, setStats] = useState({
    totalWorkshops: enrolledWorkshops.length,
    completedAssignments: 0,
    certificatesEarned: 0,
    reviewsGiven: 0,
    averageRating: 0,
  });

  // Recent activity
  const [recentActivity] = useState([
    {
      id: 1,
      type: "certificate",
      title: "Earned JavaScript Fundamentals Certificate",
      date: "2025-08-10T14:30:00",
      icon: Award,
    },
    {
      id: 2,
      type: "assignment",
      title: "Submitted React Todo App Assignment",
      date: "2025-08-08T16:20:00",
      icon: ExternalLink,
    },
    {
      id: 3,
      type: "review",
      title: "Reviewed Node.js Backend Workshop",
      date: "2025-08-05T11:15:00",
      icon: Star,
    },
  ]);

  // User's top technologies based on workshops
  // const [topTechnologies] = useState([
  //   { name: "React", count: 3 },
  //   { name: "JavaScript", count: 4 },
  //   { name: "Node.js", count: 2 },
  //   { name: "MongoDB", count: 2 },
  //   { name: "Express", count: 2 },
  // ]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("hi-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatJoinDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("hi-IN", {
      year: "numeric",
      month: "long",
    });
  };

  const handleEditProfile = () => {
    // This will navigate to settings page
    console.log("Navigate to settings page");
  };

  return (
    <div className="min-h-screen bg-background p-3 md:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-24 h-24 md:w-32 md:h-32">
                  <AvatarImage src={user.profile_pic_url} alt={user.name} />
                  <AvatarFallback className="text-2xl md:text-4xl">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left">
                  <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    {user.name}
                  </h1>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-muted-foreground mb-3">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      {user.points} Points
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 text-yellow-800"
                    >
                      <Trophy className="w-3 h-3 mr-1" />
                      Rank #{leaderboardUser.rank}
                    </Badge>
                    <Badge
                      variant={
                        user.profile_complete ? "default" : "destructive"
                      }
                    >
                      Profile{" "}
                      {user.profile_complete ? "Complete" : "Incomplete"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Joined {formatJoinDate(user.created_at)}
                  </p>
                </div>
              </div>
              <Button
                onClick={handleEditProfile}
                className="self-center md:self-start"
              >
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Stats Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Statistics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {enrolledWorkshops.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Workshops Enrolled
                  </div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {stats.certificatesEarned}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Certificates Earned
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {stats.completedAssignments}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Assignments Submitted
                  </div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">
                    {stats.reviewsGiven}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Reviews Given
                  </div>
                </div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-gray-600">
                  ★ {stats.averageRating}/5.0
                </div>
                <div className="text-sm text-muted-foreground">
                  Average Rating Given
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Technologies */}
          <Card>
            <CardHeader>
              <CardTitle>Top Technologies</CardTitle>
              <CardDescription>
                Based on workshops you've enrolled in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topTechnologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(tech.count / 4) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {tech.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        {/*<Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest achievements and submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={activity.id}>
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(activity.date)}
                        </p>
                      </div>
                    </div>
                    {index < recentActivity.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>*/}

        {/* Account Information */}
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Full Name
                </label>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Email Address
                </label>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Account Type
                </label>
                <Badge variant="outline" className="mt-1">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Member Since
                </label>
                <p className="font-medium">{formatJoinDate(user.created_at)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;