import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/context/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  User,
  Mail,
  Trophy,
  BookOpen,
  Calendar,
  Star,
  Download,
  Settings,
  Edit3,
  MapPin,
  Phone,
  Briefcase
} from 'lucide-react';
import apiClient from '@/api/apiClient';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [userStats, setUserStats] = useState(null);
  const [enrolledWorkshops, setEnrolledWorkshops] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');

  // Profile editing states
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || '',
    bio: user?.bio || '',
    company: user?.company || '',
  });

  const avatarText = user ? (user.name || user.email || "U")[0].toUpperCase() : "U";

  // Fetch user data
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      // Mock API calls with realistic data
      
      // Mock leaderboard stats
      const mockStats = {
        user: user,
        rank: 42,
        total_users: 1250,
        stats: {
          total_points: 850,
          workshops_completed: 8,
          certificates_earned: 5
        }
      };

      // Mock enrolled workshops
      const mockWorkshops = [
        {
          id: 1,
          title: "React.js Advanced Concepts",
          description: "Deep dive into React hooks, context, and performance optimization",
          conducted_by: "John Smith",
          scheduled_at: "2024-09-15T10:00:00Z",
          technologies: ["React", "JavaScript", "Node.js"],
          status: "upcoming"
        },
        {
          id: 2,
          title: "Python Data Science Workshop",
          description: "Learn pandas, numpy, and data visualization",
          conducted_by: "Sarah Johnson",
          scheduled_at: "2024-08-20T14:00:00Z",
          technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
          status: "completed"
        },
        {
          id: 3,
          title: "Full Stack Development with MERN",
          description: "Build complete web applications using MERN stack",
          conducted_by: "Mike Davis",
          scheduled_at: "2024-10-05T09:00:00Z",
          technologies: ["MongoDB", "Express", "React", "Node.js"],
          status: "upcoming"
        }
      ];

      // Mock user reviews
      const mockReviews = [
        {
          id: 1,
          workshop_id: 2,
          workshop_title: "Python Data Science Workshop",
          rating: 5,
          review_description: "Excellent workshop! Learned a lot about data manipulation.",
          created_at: "2024-08-25T10:00:00Z"
        },
        {
          id: 2,
          workshop_id: 4,
          workshop_title: "JavaScript ES6+ Features",
          rating: 4,
          review_description: "Good content but could be more interactive.",
          created_at: "2024-07-15T14:30:00Z"
        }
      ];

      // Mock certificates
      const mockCertificates = [
        {
          id: 1,
          workshop_id: 2,
          workshop_title: "Python Data Science Workshop",
          issued_at: "2024-08-25T12:00:00Z",
          certificate_url: "/certificates/cert-1.pdf"
        },
        {
          id: 2,
          workshop_id: 5,
          workshop_title: "JavaScript Fundamentals",
          issued_at: "2024-07-20T15:00:00Z",
          certificate_url: "/certificates/cert-2.pdf"
        },
        {
          id: 3,
          workshop_id: 6,
          workshop_title: "Git & Version Control",
          issued_at: "2024-06-10T11:00:00Z",
          certificate_url: "/certificates/cert-3.pdf"
        }
      ];

      // Mock assignments
      const mockAssignments = [
        {
          id: 1,
          workshop_id: 2,
          workshop_title: "Python Data Science Workshop",
          title: "Data Analysis Project",
          submit_link: "https://github.com/user/data-analysis-project",
          status: "completed",
          marks: 85,
          feedback: "Great work on the visualization part. Consider improving data cleaning techniques.",
          submitted_at: "2024-08-24T18:00:00Z"
        },
        {
          id: 2,
          workshop_id: 1,
          workshop_title: "React.js Advanced Concepts",
          title: "Build a Todo App with Hooks",
          submit_link: "https://github.com/user/react-todo-app",
          status: "submitted",
          marks: null,
          feedback: null,
          submitted_at: "2024-09-10T20:30:00Z"
        },
        {
          id: 3,
          workshop_id: 3,
          workshop_title: "Full Stack Development with MERN",
          title: "E-commerce Website",
          submit_link: null,
          status: "pending",
          marks: null,
          feedback: null,
          submitted_at: null
        }
      ];

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Set mock data
      setUserStats(mockStats);
      setEnrolledWorkshops(mockWorkshops);
      setUserReviews(mockReviews);
      setCertificates(mockCertificates);
      setAssignments(mockAssignments);

      // Uncomment below for real API calls:
      /*
      const [statsRes, workshopsRes, reviewsRes, certificatesRes, assignmentsRes] = await Promise.allSettled([
        apiClient.get('/api/v1/leaderboard/me'),
        apiClient.get('/api/v1/user-workshop/user/workshops'),
        apiClient.get('/api/v1/reviews/user'),
        apiClient.get('/api/v1/certificates'),
        apiClient.get('/api/v1/assignments')
      ]);

      if (statsRes.status === 'fulfilled') setUserStats(statsRes.value.data);
      if (workshopsRes.status === 'fulfilled') setEnrolledWorkshops(workshopsRes.value.data.workshops || []);
      if (reviewsRes.status === 'fulfilled') setUserReviews(reviewsRes.value.data.reviews || []);
      if (certificatesRes.status === 'fulfilled') setCertificates(certificatesRes.value.data.certificates || []);
      if (assignmentsRes.status === 'fulfilled') setAssignments(assignmentsRes.value.data.assignments || []);
      */

    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileUpdate = async () => {
    try {
      setLoading(true);
      
      // Mock profile update (simulate success)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock success response
      console.log('Profile updated successfully:', profileData);
      alert('Profile updated successfully!');
      setIsEditing(false);
      
      // Uncomment for real API call:
      /*
      await apiClient.put('/api/v1/auth/profile', profileData);
      setIsEditing(false);
      // You might want to refresh user context here
      */
      
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadCertificate = async (certificateId) => {
    try {
      // Mock certificate download
      alert(`Downloading certificate ${certificateId}...`);
      
      // Mock PDF blob creation
      const mockPdfContent = `Certificate ${certificateId} - This is a mock certificate for demonstration`;
      const blob = new Blob([mockPdfContent], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `certificate-${certificateId}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
      
      // Uncomment for real API call:
      /*
      const response = await apiClient.get(`/api/v1/certificates/${certificateId}/download`, {
        responseType: 'blob'
      });
      
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `certificate-${certificateId}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
      */
      
    } catch (error) {
      console.error('Error downloading certificate:', error);
      alert('Failed to download certificate. Please try again.');
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border mb-8">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.profile_pic_url} alt={user.name || user.email} />
                <AvatarFallback className="bg-indigo-600 text-white text-2xl font-semibold">
                  {avatarText}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {user.name || 'User'}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{user.email}</p>
                
                {userStats && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Rank: #{userStats.rank || 'N/A'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-indigo-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Points: {userStats.stats?.total_points || 0}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Workshops: {enrolledWorkshops.length}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Leaderboard Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {userStats ? (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Current Rank:</span>
                        <Badge variant="secondary">#{userStats.rank}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Points:</span>
                        <span className="font-semibold">{userStats.stats?.total_points || 0}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Users:</span>
                        <span className="text-sm">{userStats.total_users}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">Loading stats...</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-indigo-500" />
                    Workshop Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Enrolled:</span>
                      <span className="font-semibold">{enrolledWorkshops.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Completed:</span>
                      <span className="font-semibold">{assignments.filter(a => a.status === 'completed').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Reviews Given:</span>
                      <span className="font-semibold">{userReviews.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant={certificates.length > 0 ? "default" : "secondary"}>
                      {certificates.length} Certificates
                    </Badge>
                    <Badge variant={userReviews.length > 5 ? "default" : "secondary"}>
                      {userReviews.length > 5 ? "Active Reviewer" : "New Member"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Workshops Tab */}
          <TabsContent value="workshops" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Enrolled Workshops</CardTitle>
                <CardDescription>
                  Workshops you have registered for
                </CardDescription>
              </CardHeader>
              <CardContent>
                {enrolledWorkshops.length > 0 ? (
                  <div className="space-y-4">
                    {enrolledWorkshops.map((workshop) => (
                      <div key={workshop.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{workshop.title}</h3>
                          <p className="text-sm text-gray-600">{workshop.conducted_by}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">
                              {new Date(workshop.scheduled_at).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {workshop.technologies?.map((tech, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    No workshops enrolled yet. <Button variant="link" onClick={() => navigate('/workshops')}>Browse Workshops</Button>
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Assignments</CardTitle>
                <CardDescription>
                  Track your assignment submissions and grades
                </CardDescription>
              </CardHeader>
              <CardContent>
                {assignments.length > 0 ? (
                  <div className="space-y-4">
                    {assignments.map((assignment) => (
                      <div key={assignment.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{assignment.title}</h3>
                          <Badge variant={assignment.status === 'completed' ? 'default' : 'secondary'}>
                            {assignment.status}
                          </Badge>
                        </div>
                        {assignment.marks && (
                          <p className="text-sm text-green-600 font-medium">
                            Score: {assignment.marks}/100
                          </p>
                        )}
                        {assignment.feedback && (
                          <p className="text-sm text-gray-600 mt-2">{assignment.feedback}</p>
                        )}
                        {assignment.submit_link && (
                          <a 
                            href={assignment.submit_link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-indigo-600 hover:underline mt-2 block"
                          >
                            View Submission →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8">No assignments found.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Certificates</CardTitle>
                <CardDescription>
                  Download and view your earned certificates
                </CardDescription>
              </CardHeader>
              <CardContent>
                {certificates.length > 0 ? (
                  <div className="grid gap-4 md:grid-cols-2">
                    {certificates.map((certificate) => (
                      <div key={certificate.id} className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">{certificate.workshop_title}</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Issued: {new Date(certificate.issued_at).toLocaleDateString()}
                        </p>
                        <Button 
                          onClick={() => downloadCertificate(certificate.id)}
                          className="w-full"
                          size="sm"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Certificate
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8">No certificates earned yet.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Update your personal information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Personal Details</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    <Edit3 className="h-4 w-4 mr-2" />
                    {isEditing ? 'Cancel' : 'Edit'}
                  </Button>
                </div>

                <Separator />

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      disabled={!isEditing}
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      disabled={!isEditing}
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={profileData.company}
                      onChange={(e) => setProfileData({...profileData, company: e.target.value})}
                      disabled={!isEditing}
                      placeholder="Current workplace"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    disabled={!isEditing}
                    placeholder="Tell us about yourself..."
                    className="min-h-[100px]"
                  />
                </div>

                {isEditing && (
                  <div className="flex gap-2">
                    <Button onClick={handleProfileUpdate} disabled={loading}>
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Danger Zone</CardTitle>
                <CardDescription>
                  Irreversible account actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">
                      Delete Account
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                        Delete Account
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;