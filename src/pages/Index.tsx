import React, { useState } from 'react';
import { Search, Play, Clock, Users, BookOpen, Star, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  const featuredCourses = [
    {
      id: 1,
      title: "Healthcare Quality Improvement",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      students: 1240,
      rating: 4.9,
      image: "photo-1576091160399-112ba8d25d1f",
      category: "Quality Care",
      level: "Intermediate"
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
      level: "Beginner"
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
      level: "Advanced"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Healthcare Professionals Trained" },
    { number: "200+", label: "Expert-Led Courses" },
    { number: "95%", label: "Completion Rate" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  const handleEnroll = (courseId: number, courseTitle: string) => {
    setEnrolledCourses(prev => new Set([...prev, courseId]));
    toast({
      title: "Course Enrolled!",
      description: `You have successfully enrolled in "${courseTitle}". Welcome aboard!`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-2xl font-bold text-blue-600">MedLearn Pro</Link>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/courses" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Courses</Link>
                <Link to="/programs" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Programs</Link>
                <Link to="/certificate" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Certificate</Link>
                <Link to="/for-organizations" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">For Organizations</Link>
                <Link to="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</Link>
                <Link to="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link to="/signin">
                <Button variant="ghost" className="text-gray-600">Sign In</Button>
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/courses" className="block px-3 py-2 text-base font-medium text-gray-900">Courses</Link>
              <Link to="/programs" className="block px-3 py-2 text-base font-medium text-gray-500">Programs</Link>
              <Link to="/certificate" className="block px-3 py-2 text-base font-medium text-gray-500">Certificate</Link>
              <Link to="/for-organizations" className="block px-3 py-2 text-base font-medium text-gray-500">For Organizations</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-500">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-500">Contact</Link>
              <div className="px-3 py-2 space-y-2">
                <Link to="/signin">
                  <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                </Link>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Healthcare Quality Improvement Focus */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  Trusted by 50,000+ Healthcare Professionals
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Master Healthcare
                  <span className="text-blue-600 block">Quality Improvement</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform patient outcomes through evidence-based quality improvement methodologies and comprehensive training programs designed for healthcare professionals.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  Start Quality Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Training Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-medium">4.8/5</span>
                  <span className="ml-1">from 12,000+ healthcare professionals</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare professionals in quality improvement training session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-10"></div>
              </div>
              
              {/* Training Session Indicators */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live Quality Training</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Quality Improvement Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Professional Training Methods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Professional Training Methods</h2>
            <p className="text-xl text-gray-600">Comprehensive training approaches designed for busy healthcare professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Improvement Training */}
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-64 h-48 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
                  alt="Healthcare quality improvement training session with medical professionals"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-sm font-semibold">Quality Improvement</div>
                  <div className="text-xs">Evidence-Based Methods</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Quality Workshops</h3>
              <p className="text-gray-600">Hands-on training in PDSA cycles, root cause analysis, and quality metrics</p>
              <Link to="/certificate" className="inline-block mt-3">
                <Button variant="outline" size="sm">View Certificate</Button>
              </Link>
            </div>
            
            {/* Professional Development Training */}
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-64 h-48 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80"
                  alt="Healthcare professionals in training session with presentation screens"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-sm font-semibold">Live Sessions</div>
                  <div className="text-xs">Expert-Led Training</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Training Sessions</h3>
              <p className="text-gray-600">Real-time interaction with healthcare experts and peer collaboration</p>
            </div>
            
            {/* Mobile Learning for Healthcare */}
            <div className="text-center group">
              <div className="relative mb-6 mx-auto w-64 h-48 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80"
                  alt="Healthcare professional using mobile learning platform"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-sm font-semibold">Mobile Access</div>
                  <div className="text-xs">24/7 Learning</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Healthcare Learning</h3>
              <p className="text-gray-600">Access training modules anywhere, perfect for busy healthcare schedules</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses - Updated with enrollment functionality */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts and advance your healthcare career with our comprehensive courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
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
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="px-8">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Healthcare Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Healthcare Professionals Choose Our Quality Improvement Training
                </h2>
                <p className="text-xl text-gray-600">
                  We're dedicated to advancing healthcare through education, providing evidence-based tools and methodologies for measurable quality improvements.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence-Based Quality Methods</h3>
                    <p className="text-gray-600">Learn proven quality improvement frameworks including Lean, Six Sigma, and PDSA methodology from practicing healthcare quality experts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Professional Network</h3>
                    <p className="text-gray-600">Connect with quality improvement professionals, share success stories, and collaborate on healthcare transformation initiatives.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Accredited Quality Training</h3>
                    <p className="text-gray-600">Earn continuing education credits and quality improvement certifications recognized by healthcare organizations worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80"
                  alt="Healthcare quality improvement team in collaborative training session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Quality Training Indicators */}
              <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Quality Methods</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">Certified Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories - Enhanced with Quality Improvement Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Improvement Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from healthcare professionals who implemented our quality improvement training
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="Dr. Maria Rodriguez - Quality Improvement Director"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dr. Maria Rodriguez</h4>
                    <p className="text-gray-600 text-sm">Quality Improvement Director, Metro Health</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"The quality improvement methodology training helped me implement PDSA cycles that reduced readmission rates by 30% and improved patient satisfaction scores by 25%."</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=100&h=100&q=80"
                    alt="James Chen - Quality Nurse Practitioner"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">James Chen, NP</h4>
                    <p className="text-gray-600 text-sm">Quality Improvement Nurse Practitioner</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"The training gave me practical tools to lead quality initiatives. We've reduced medication errors by 40% using the root cause analysis methods I learned."</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
                  alt="Healthcare quality improvement training session in progress"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">Quality Training Success</p>
                  <p className="text-sm">Watch transformation stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of healthcare professionals who are already advancing their careers with MedLearn Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">MedLearn Pro</h3>
              <p className="text-gray-400">
                Empowering healthcare professionals with world-class education and training.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Quality Improvement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Value-Based Care</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Population Health</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MedLearn Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
