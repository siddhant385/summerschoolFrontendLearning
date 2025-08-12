import React, { useState } from 'react';
import { Star, Users, Award, Clock, ArrowRight, Play, CheckCircle, BookOpen, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Reusable Hero Section Component (same as dashboard)
const HeroSection = ({ 
  title = "Welcome to Workshops", 
  subtitle = "Discover amazing workshops and enhance your skills",
  showCTA = false,
  ctaText = "Explore Workshops",
  onCTAClick,
  background = "bg-gradient-to-r from-blue-600 to-purple-700"
}) => {
  return (
    <div className={`${background} text-white py-20 px-6 rounded-2xl mb-16`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">{subtitle}</p>
        {showCTA && (
          <Button 
            onClick={onCTAClick}
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl px-8 py-4 text-lg"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, highlight = false }) => {
  return (
    <Card className={`text-center ${highlight ? 'ring-2 ring-blue-500 relative' : ''}`}>
      {highlight && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
          Most Popular
        </Badge>
      )}
      <CardHeader>
        <div className={`mx-auto h-16 w-16 rounded-full flex items-center justify-center mb-4 ${
          highlight ? 'bg-blue-100' : 'bg-gray-100'
        }`}>
          <Icon className={`h-8 w-8 ${highlight ? 'text-blue-600' : 'text-gray-600'}`} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

// Stats Counter Component
const StatsCounter = ({ number, label, suffix = "" }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {number}{suffix}
      </div>
      <div className="text-white/80 text-lg">{label}</div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ name, role, content, rating, avatar }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <CardDescription className="text-base mb-4 text-gray-700">
          "{content}"
        </CardDescription>
        <div className="flex items-center">
          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <span className="font-semibold text-blue-600">{name.charAt(0)}</span>
          </div>
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Workshop Card Component (simplified for home page)
const FeaturedWorkshopCard = ({ workshop, onEnroll, onLearnMore }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2"></div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{workshop.category}</Badge>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">₹{workshop.price}</div>
            {workshop.originalPrice && (
              <div className="text-sm text-gray-500 line-through">₹{workshop.originalPrice}</div>
            )}
          </div>
        </div>
        <CardTitle className="text-xl">{workshop.title}</CardTitle>
        <CardDescription>{workshop.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {workshop.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {workshop.enrolled}+ enrolled
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500" />
            {workshop.rating}
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => onLearnMore(workshop)} className="flex-1">
            Learn More
          </Button>
          <Button onClick={() => onEnroll(workshop)} className="flex-1">
            Enroll Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// CTA Section Component
const CTASection = ({ 
  title = "Ready to Start Learning?", 
  description = "Join thousands of learners and upgrade your skills today",
  primaryCTA = "Get Started Now",
  secondaryCTA = "View All Workshops",
  onPrimary,
  onSecondary
}) => {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-purple-700 text-white border-0">
      <CardContent className="text-center py-16 px-6">
        <CardTitle className="text-3xl md:text-4xl font-bold mb-4">{title}</CardTitle>
        <CardDescription className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </CardDescription>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onPrimary}
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            {primaryCTA}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            onClick={onSecondary}
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900"
          >
            {secondaryCTA}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Home Component
const Home = () => {
  // Dummy data
  const [featuredWorkshops] = useState([
    {
      id: 1,
      title: "Complete React Development",
      description: "Master React from basics to advanced concepts with real projects",
      category: "Web Development",
      duration: "8 weeks",
      enrolled: 1250,
      rating: 4.9,
      price: 4999,
      originalPrice: 7999,
      instructor: "Priya Sharma"
    },
    {
      id: 2,
      title: "Full Stack JavaScript",
      description: "MERN stack development with deployment and best practices",
      category: "Full Stack",
      duration: "12 weeks",
      enrolled: 890,
      rating: 4.8,
      price: 8999,
      originalPrice: 12999,
      instructor: "Amit Patel"
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      description: "Complete design workflow from research to prototyping",
      category: "Design",
      duration: "6 weeks",
      enrolled: 650,
      rating: 4.7,
      price: 3999,
      originalPrice: 5999,
      instructor: "Sneha Gupta"
    }
  ]);

  const [testimonials] = useState([
    {
      name: "Rohit Kumar",
      role: "Software Engineer",
      content: "Amazing workshops! I learned React in just 4 weeks and got a job at a top company. Highly recommended for anyone looking to upskill.",
      rating: 5
    },
    {
      name: "Priya Singh",
      role: "UI/UX Designer",
      content: "The design workshop was incredible. Practical approach and real projects helped me build an amazing portfolio. Worth every penny!",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      role: "Full Stack Developer",
      content: "Best investment in my career. The instructors are industry experts and the curriculum is always updated with latest trends.",
      rating: 5
    }
  ]);

  const handleGetStarted = () => {
    console.log('Get started clicked');
    // Navigate to signup or workshops
  };

  const handleViewWorkshops = () => {
    console.log('View workshops clicked');
    // Navigate to workshops catalog
  };

  const handleEnrollWorkshop = (workshop) => {
    console.log('Enrolling in:', workshop.title);
    // Handle enrollment
  };

  const handleLearnMore = (workshop) => {
    console.log('Learn more about:', workshop.title);
    // Navigate to workshop details
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        
        {/* Hero Section */}
        <HeroSection 
          title="Learn. Grow. Excel."
          subtitle="Join thousands of learners in our expert-led workshops and transform your career with hands-on learning"
          showCTA={true}
          ctaText="Start Learning Today"
          onCTAClick={handleGetStarted}
          background="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700"
        />

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter number="10" suffix="K+" label="Happy Learners" />
            <StatsCounter number="150" suffix="+" label="Expert Workshops" />
            <StatsCounter number="95" suffix="%" label="Success Rate" />
            <StatsCounter number="24" suffix="/7" label="Support Available" />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Workshops?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide industry-relevant skills with practical learning approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Users}
              title="Expert Instructors"
              description="Learn from industry professionals with years of real-world experience"
            />
            <FeatureCard 
              icon={BookOpen}
              title="Hands-on Projects"
              description="Build real projects that you can showcase in your portfolio"
              highlight={true}
            />
            <FeatureCard 
              icon={Award}
              title="Industry Certification"
              description="Get recognized certificates that employers value"
            />
          </div>
        </div>

        {/* Featured Workshops */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Workshops</h2>
              <p className="text-xl text-gray-600">Most popular courses chosen by learners</p>
            </div>
            <Button variant="outline" onClick={handleViewWorkshops}>
              View All Workshops
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorkshops.map(workshop => (
              <FeaturedWorkshopCard 
                key={workshop.id}
                workshop={workshop}
                onEnroll={handleEnrollWorkshop}
                onLearnMore={handleLearnMore}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">
              Real stories from learners who transformed their careers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to start your learning journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Workshop</h3>
              <p className="text-gray-600">Browse our catalog and find the perfect workshop for your goals</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn & Practice</h3>
              <p className="text-gray-600">Attend live sessions and work on hands-on projects</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Certified</h3>
              <p className="text-gray-600">Receive industry-recognized certificate and boost your career</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <CTASection 
          title="Ready to Transform Your Career?"
          description="Join thousands of successful learners who upgraded their skills and got better opportunities"
          primaryCTA="Start Learning Now"
          secondaryCTA="View All Workshops"
          onPrimary={handleGetStarted}
          onSecondary={handleViewWorkshops}
        />

      </div>
    </div>
  );
};

export default Home;