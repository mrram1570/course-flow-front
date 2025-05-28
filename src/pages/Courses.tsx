
import React, { useState } from 'react';
import { Search, Clock, Users, Star, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Courses = () => {
  const { toast } = useToast();
  const [enrolledCourses, setEnrolledCourses] = useState<Set<number>>(new Set());

  const courses = [
    {
      id: 1,
      title: "Healthcare Quality Improvement",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      students: 1240,
      rating: 4.9,
      image: "photo-1576091160399-112ba8d25d1f",
      category: "Quality Care",
      level: "Intermediate",
      price: "$299"
    },
    {
      id: 2,
      title: "Value-Based Care Fundamentals",
      instructor: "Dr. Michael Chen",
      duration: "6 weeks",
      students: 980,
      rating: 4.8,
      image: "photo-1581091226825-a6a2a5aee158",
      category: "Healthcare Economics",
      level: "Beginner",
      price: "$199"
    },
    {
      id: 3,
      title: "Population Health Management",
      instructor: "Dr. Emily Rodriguez",
      duration: "10 weeks",
      students: 756,
      rating: 4.9,
      image: "photo-1649972904349-6e44c42644a7",
      category: "Public Health",
      level: "Advanced",
      price: "$399"
    },
    {
      id: 4,
      title: "Healthcare Data Analytics",
      instructor: "Dr. James Wilson",
      duration: "12 weeks",
      students: 892,
      rating: 4.7,
      image: "photo-1559757148-5c350d0d3c56",
      category: "Analytics",
      level: "Advanced",
      price: "$449"
    },
    {
      id: 5,
      title: "Patient Safety & Risk Management",
      instructor: "Dr. Maria Garcia",
      duration: "6 weeks",
      students: 634,
      rating: 4.8,
      image: "photo-1488590528505-98d2b5aba04b",
      category: "Safety",
      level: "Intermediate",
      price: "$249"
    },
    {
      id: 6,
      title: "Healthcare Leadership",
      instructor: "Dr. Robert Kim",
      duration: "8 weeks",
      students: 543,
      rating: 4.9,
      image: "photo-1486312338219-ce68d2c6f44d",
      category: "Leadership",
      level: "Advanced",
      price: "$349"
    }
  ];

  const handleEnroll = (courseId: number, courseTitle: string) => {
    setEnrolledCourses(prev => new Set([...prev, courseId]));
    toast({
      title: "Course Enrolled!",
      description: `You have successfully enrolled in "${courseTitle}". Welcome aboard!`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advance your healthcare career with our comprehensive courses designed by industry experts
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={`https://images.unsplash.com/${course.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-blue-600 shadow-sm">
                    {course.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black bg-opacity-50 text-white">
                    {course.level}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-gray-600">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                </div>
                
                <Button 
                  className={`w-full ${
                    enrolledCourses.has(course.id) 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } group-hover:bg-blue-700`}
                  onClick={() => handleEnroll(course.id, course.title)}
                  disabled={enrolledCourses.has(course.id)}
                >
                  {enrolledCourses.has(course.id) ? 'Enrolled!' : 'Enroll Now'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
