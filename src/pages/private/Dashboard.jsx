import React, { useState } from "react";
import {
  Calendar,
  Award,
  FileText,
  Star,
  Download,
  ExternalLink,
  User,
  TrendingUp,
  Settings,
  Trophy,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WorkshopCard } from "@/components/WorkshopCard";
import { useAuth } from "@/context/auth";
import AssignmentCard from "@/components/AssignmentCard";
import { usePrivate } from "@/context/private";
import { ReviewButton } from "@/components/ReviewButton";

const WorkshopDashboard = () => {
  // Sample data based on your schema
  const { user } = useAuth();

  const {
    leaderboard,
    myAssignments,
    loading,
    myWorkshops,
    myRank,
    myReviews,
  } = usePrivate();
  // const [enrolledWorkshops,setEnrolledWorkshops] = useState([]);
  // const [leaderboardUser,setleaderboardUser] = useState([]);
  // const [assignments, setAssignments] = useState([]);
  // const [loading, setLoading] = useState(false);
  console.log(myReviews);
  const enrolledWorkshops = myWorkshops?.workshops || [];
  const leaderboardUser = myRank?.user_rank || {};
  const assignments = myAssignments?.assignments || [];

  // const [user] = useState({
  //   name: "Rahul Sharma",
  //   email: "rahul@example.com",
  //   profile_pic_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  //   points: 1250,
  //   profile_complete: true,
  //   rank: 5 // From leaderboard calculation
  // });
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

  // const [enrolledWorkshops] = useState([
  //   {
  //     id: 1,
  //     title: "React Advanced Concepts",
  //     description: "Deep dive into React hooks, context, and performance optimization",
  //     technologies: ["React", "JavaScript", "Redux"],
  //     conducted_by: "Priya Singh",
  //     scheduled_at: "2025-08-20T10:00:00",
  //     created_at: "2025-08-01T09:00:00"
  //   },
  //   {
  //     id: 2,
  //     title: "Node.js Backend Development",
  //     description: "Building scalable backend applications with Node.js and Express",
  //     technologies: ["Node.js", "Express", "MongoDB"],
  //     conducted_by: "Amit Kumar",
  //     scheduled_at: "2025-08-10T14:00:00",
  //     created_at: "2025-07-15T11:00:00"
  //   }
  // ]);

  // const [assignments] = useState([
  //   {
  //     id: 1,
  //     title: "Build Todo App with React Hooks",
  //     submit_link: "https://github.com/user/react-todo",
  //     workshop_title: "React Advanced Concepts",
  //     status: "submitted",
  //     marks: 85,
  //     feedback: "Great implementation! Consider adding error handling.",
  //     created_at: "2025-08-15T16:30:00"
  //   },
  //   {
  //     id: 2,
  //     title: "REST API with Authentication",
  //     submit_link: "https://github.com/user/node-api",
  //     workshop_title: "Node.js Backend Development",
  //     status: "submitted",
  //     marks: null,
  //     feedback: null,
  //     created_at: "2025-08-12T18:45:00"
  //   }
  // ]);

  const [certificates] = useState([]);

  const [reviews] = useState([
    {
      id: 1,
      workshop_title: "JavaScript Fundamentals",
      rating: 5,
      review_description:
        "Excellent workshop! Very clear explanations and practical examples.",
      created_at: "2025-07-31T14:20:00",
    },
  ]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("hi-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) > new Date();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };
  return (
    <div className="min-h-screen bg-background p-3 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Header Section - Mobile Responsive */}
        <Card>
          <CardContent className="pt-4 md:pt-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3 md:space-x-4">
                <Avatar className="w-12 h-12 md:w-16 md:h-16">
                  <AvatarImage src={user.profile_pic_url} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="mx-2 md:mx-4">
                  <h1 className="text-xl md:text-2xl font-bold my-1">
                    {user.name}
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground my-1">
                    {user.email}
                  </p>
                  <div className="grid gap-1 md:gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-1">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 text-xs md:text-sm"
                    >
                      {user.points} Points
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 text-yellow-800 text-xs md:text-sm"
                    >
                      <Trophy className="w-3 h-3 mr-1" />
                      Rank #{leaderboardUser.rank}
                    </Badge>
                    <Badge
                      variant={
                        user.profile_complete ? "default" : "destructive"
                      }
                      className="text-xs md:text-sm"
                    >
                      Profile{" "}
                      {user.profile_complete ? "Complete" : "Incomplete"}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Quick Stats - Mobile Responsive */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
                <div className="space-y-1">
                  <div className="text-xl md:text-2xl font-bold text-primary">
                    {enrolledWorkshops.length}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Workshops
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl md:text-2xl font-bold text-green-600">
                    {certificates.length}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Certificates
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl md:text-2xl font-bold text-purple-600">
                    {reviews.length}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Reviews
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs - Mobile Responsive */}
        <Tabs defaultValue="workshops" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger
              value="workshops"
              className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 p-2 md:p-3"
            >
              <Calendar className="w-4 h-4" />
              <span className="text-xs md:text-sm">Workshops</span>
            </TabsTrigger>
            <TabsTrigger
              value="assignments"
              className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 p-2 md:p-3"
            >
              <FileText className="w-4 h-4" />
              <span className="text-xs md:text-sm">Assignments</span>
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 p-2 md:p-3"
            >
              <Award className="w-4 h-4" />
              <span className="text-xs md:text-sm">Certificates</span>
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 p-2 md:p-3"
            >
              <Star className="w-4 h-4" />
              <span className="text-xs md:text-sm">Reviews</span>
            </TabsTrigger>
          </TabsList>

          {/* Workshops Tab - Mobile Responsive */}
          <TabsContent value="workshops" className="space-y-4 mt-4 md:mt-6">
            <div className="grid gap-4 md:gap-6 md:grid-cols-2">
              {enrolledWorkshops.map((workshop) => (
                <WorkshopCard
                  key={workshop.workshop_id}
                  workshop={workshop}
                  isUserGiven={true}
                />
              ))}
            </div>
          </TabsContent>

          {/* Assignments Tab - Mobile Responsive */}
          <TabsContent value="assignments" className="space-y-4 mt-4 md:mt-6">
            {assignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </TabsContent>

          {/* Certificates Tab - Mobile Responsive */}
          <TabsContent value="certificates" className="space-y-4 mt-4 md:mt-6">
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate) => (
                <Card
                  key={certificate.id}
                  className="text-center hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-4 md:pt-6">
                    <Award className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 mx-auto mb-3 md:mb-4" />
                    <CardTitle className="text-base md:text-lg mb-2">
                      {certificate.workshop_title}
                    </CardTitle>
                    <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-3 md:mb-4">
                      {certificate.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                      {formatDate(certificate.created_at)}
                    </p>
                    <Button size="sm" asChild>
                      <a
                        href={certificate.certificate_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab - Mobile Responsive */}
          <TabsContent value="reviews" className="space-y-4 mt-4 md:mt-6">
            {myReviews?.reviews?.length > 0 ? (
              myReviews?.reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader className="pb-3">
                    <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-start md:space-y-0">
                      <CardTitle className="text-base md:text-lg">
                        {review.workshop_title || "Review"}
                      </CardTitle>
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 md:mb-4 text-sm md:text-base">
                      {review.review_description}
                    </p>
                    <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center md:space-y-0">
                      <span className="text-xs md:text-sm text-muted-foreground">
                        {formatDate(review.created_at)}
                      </span>
                      <ReviewButton
                        ButtonName={"Edit Review"}
                        Edit={true}
                        review_id={review.id}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-muted-foreground">
                {console.log(myReviews)}

                No reviews yet 😶
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkshopDashboard;