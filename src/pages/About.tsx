
import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { number: "50,000+", label: "Healthcare Professionals Trained" },
    { number: "200+", label: "Expert-Led Courses" },
    { number: "95%", label: "Completion Rate" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "photo-1559839734-2b71ea197ec2",
      bio: "20+ years in healthcare quality improvement and patient safety."
    },
    {
      name: "Dr. Michael Chen",
      role: "Director of Education",
      image: "photo-1612349317150-e413f6a5b16d",
      bio: "Former hospital administrator with expertise in value-based care."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Curriculum",
      image: "photo-1594824804732-ca8db0c75b37",
      bio: "Population health expert and medical education specialist."
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in healthcare education and training."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and shared learning experiences."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality healthcare education accessible to professionals worldwide."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Focused on improving patient outcomes through better-trained healthcare professionals."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About MedLearn Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We're dedicated to advancing healthcare through education, providing healthcare professionals 
            with the knowledge and skills needed to deliver exceptional patient care and drive positive outcomes.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To transform healthcare education by providing accessible, high-quality training programs 
                that empower healthcare professionals to deliver better patient outcomes and advance 
                their careers in an ever-evolving industry.
              </p>
              <p className="text-lg text-gray-600">
                Founded by healthcare professionals for healthcare professionals, we understand the 
                unique challenges and opportunities in modern healthcare delivery.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80"
                alt="Healthcare mission"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to healthcare education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced healthcare professionals and educators dedicated to advancing the industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <img 
                    src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=300&h=300&q=80`}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
