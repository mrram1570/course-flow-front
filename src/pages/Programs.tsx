
import React from 'react';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Healthcare Quality Leadership Certificate",
      description: "A comprehensive 6-month program designed to develop quality leadership skills in healthcare settings.",
      duration: "6 months",
      courses: 8,
      participants: 250,
      image: "photo-1576091160399-112ba8d25d1f",
      price: "$1,299",
      certification: "Quality Leadership Certificate"
    },
    {
      id: 2,
      title: "Value-Based Care Specialist Program",
      description: "Master the fundamentals of value-based care and transform healthcare delivery models.",
      duration: "4 months",
      courses: 6,
      participants: 180,
      image: "photo-1581091226825-a6a2a5aee158",
      price: "$999",
      certification: "VBC Specialist Certificate"
    },
    {
      id: 3,
      title: "Population Health Management Diploma",
      description: "Advanced program focusing on population health strategies and community care management.",
      duration: "8 months",
      courses: 10,
      participants: 150,
      image: "photo-1649972904349-6e44c42644a7",
      price: "$1,599",
      certification: "Population Health Diploma"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certificate Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning paths designed to advance your healthcare career with industry-recognized certifications
          </p>
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {programs.map((program, index) => (
            <Card key={program.id} className="overflow-hidden shadow-lg border-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={`https://images.unsplash.com/${program.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Badge className="bg-blue-100 text-blue-800 w-fit mb-4">
                    Certificate Program
                  </Badge>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg mb-6">
                    {program.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold">{program.duration}</div>
                    </div>
                    <div className="text-center">
                      <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Courses</div>
                      <div className="font-semibold">{program.courses}</div>
                    </div>
                    <div className="text-center">
                      <Award className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm text-gray-500">Graduates</div>
                      <div className="font-semibold">{program.participants}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">{program.price}</div>
                      <div className="text-sm text-gray-500">Full program</div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {program.certification}
                    </Badge>
                  </div>
                  
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Enroll in Program
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
