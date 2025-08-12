import React, { useState } from 'react';
import { Calendar, MapPin, Users, Star, Clock, BookOpen, ArrowRight, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Reusable Hero Section Component
const HeroSection = ({ 
  title = "Welcome to Workshops", 
  subtitle = "Discover amazing workshops and enhance your skills",
  showCTA = false,
  ctaText = "Explore Workshops",
  onCTAClick,
  background = "bg-gradient-to-r from-blue-600 to-purple-700"
}) => {
  return (
    <div className={`${background} text-white py-16 px-6 rounded-2xl mb-8`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">{subtitle}</p>
        {showCTA && (
          <Button 
            onClick={onCTAClick}
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

// Reusable Workshop Card Component
const WorkshopCard = ({ workshop, showActions = true, onJoin, onView }) => {
  const getStatusVariant = (status) => {
    switch(status) {
      case 'upcoming': return 'default';
      case 'ongoing': return 'secondary';
      case 'completed': return 'outline';
      case 'enrolled': return 'destructive';
      default: return 'outline';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('hi-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const isEnrolled = workshop.status === 'enrolled';
  const isFull = workshop.participants >= workshop.maxParticipants;

  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{workshop.title}</CardTitle>
            <CardDescription className="text-sm">{workshop.description}</CardDescription>
          </div>
          <Badge variant={getStatusVariant(workshop.status)} className="ml-4">
            {workshop.status === 'enrolled' ? 'Enrolled' : workshop.status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(workshop.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{workshop.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{workshop.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{workshop.participants}/{workshop.maxParticipants} enrolled</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{workshop.rating}</span>
            <span className="text-sm text-gray-500">({workshop.reviews} reviews)</span>
          </div>
          <div className="text-xl font-bold text-blue-600">
            ₹{workshop.price}
          </div>
        </div>

        {showActions && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => onView && onView(workshop)}
              className="flex-1"
            >
              View Details
            </Button>
            {!isEnrolled ? (
              <Button
                onClick={() => onJoin && onJoin(workshop)}
                disabled={isFull}
                className="flex-1"
                variant={isFull ? "secondary" : "default"}
              >
                {isFull ? 'Full' : 'Join Now'}
              </Button>
            ) : (
              <Button
                onClick={() => onView && onView(workshop)}
                className="flex-1"
                variant="default"
              >
                Go to Workshop
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Reusable Stats Card Component
const StatsCard = ({ title, value, icon: Icon, description, trend }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trend && (
          <div className="flex items-center text-xs text-green-600 mt-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            {trend}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Empty State Component
const EmptyState = ({ 
  icon: Icon = BookOpen, 
  title = "No workshops found", 
  description = "Explore our catalog and find workshops that interest you",
  actionText = "Browse Workshops",
  onAction
}) => {
  return (
    <Card>
      <CardContent className="text-center py-16">
        <div className="mx-auto h-24 w-24 text-gray-400 mb-6">
          <Icon className="h-24 w-24" />
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="mb-6 max-w-md mx-auto">{description}</CardDescription>
        {onAction && (
          <Button onClick={onAction} size="lg">
            {actionText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  // Dummy user data
  const [user] = useState({
    name: "Rahul Kumar",
    enrolledWorkshops: 3,
    completedWorkshops: 5,
    totalSpent: 15000,
    joinedThisMonth: 2
  });

  // Dummy workshops data
  const [workshops] = useState([
    {
      id: 1,
      title: "React Advanced Patterns & Hooks",
      description: "Master advanced React concepts, custom hooks, and performance optimization",
      date: "2025-08-20",
      duration: "6 hours",
      participants: 25,
      maxParticipants: 30,
      status: "enrolled",
      location: "Online",
      rating: 4.8,
      reviews: 120,
      price: 2999,
      instructor: "Priya Sharma"
    },
    {
      id: 2,
      title: "Full Stack JavaScript Bootcamp",
      description: "Complete MERN stack development from basics to deployment",
      date: "2025-08-25",
      duration: "2 days",
      participants: 18,
      maxParticipants: 20,
      status: "upcoming",
      location: "Mumbai",
      rating: 4.9,
      reviews: 85,
      price: 5999,
      instructor: "Amit Patel"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      description: "Learn modern design principles, Figma, and user research methods",
      date: "2025-08-15",
      duration: "4 hours",
      participants: 30,
      maxParticipants: 30,
      status: "upcoming",
      location: "Bangalore",
      rating: 4.7,
      reviews: 65,
      price: 3499,
      instructor: "Sneha Gupta"
    }
  ]);

  const enrolledWorkshops = workshops.filter(w => w.status === 'enrolled');
  const upcomingWorkshops = workshops.filter(w => w.status === 'upcoming');

  const handleJoinWorkshop = (workshop) => {
    console.log('Joining workshop:', workshop.title);
    // Join workshop logic
  };

  const handleViewWorkshop = (workshop) => {
    console.log('Viewing workshop:', workshop.title);
    // Navigate to workshop details
  };

  const handleBrowseWorkshops = () => {
    console.log('Browse all workshops');
    // Navigate to workshops catalog
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <HeroSection 
          title={`Welcome back, ${user.name}!`}
          subtitle="Continue your learning journey and discover new workshops"
          background="bg-gradient-to-r from-purple-600 to-blue-600"
        />

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard 
            title="Enrolled Workshops"
            value={user.enrolledWorkshops}
            icon={BookOpen}
            description="Currently active"
          />
          <StatsCard 
            title="Completed Workshops"
            value={user.completedWorkshops}
            icon={Star}
            description="Successfully finished"
            trend="+20% from last month"
          />
          <StatsCard 
            title="Total Investment"
            value={`₹${user.totalSpent.toLocaleString()}`}
            icon={TrendingUp}
            description="Lifetime spending"
          />
          <StatsCard 
            title="This Month"
            value={user.joinedThisMonth}
            icon={Users}
            description="New enrollments"
          />
        </div>

        {/* My Enrolled Workshops */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold tracking-tight">My Enrolled Workshops</h2>
          </div>
          
          {enrolledWorkshops.length === 0 ? (
            <EmptyState 
              title="No enrolled workshops yet"
              description="Browse our workshop catalog and enroll in workshops that match your interests"
              actionText="Browse Workshops"
              onAction={handleBrowseWorkshops}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {enrolledWorkshops.map(workshop => (
                <WorkshopCard 
                  key={workshop.id}
                  workshop={workshop}
                  onJoin={handleJoinWorkshop}
                  onView={handleViewWorkshop}
                />
              ))}
            </div>
          )}
        </div>

        {/* Recommended Workshops */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Recommended for You</h2>
            <Button variant="ghost" onClick={handleBrowseWorkshops}>
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingWorkshops.map(workshop => (
              <WorkshopCard 
                key={workshop.id}
                workshop={workshop}
                onJoin={handleJoinWorkshop}
                onView={handleViewWorkshop}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;