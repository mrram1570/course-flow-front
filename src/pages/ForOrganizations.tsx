
import React from 'react';
import { Building2, Users, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ForOrganizations = () => {
  const benefits = [
    "Custom learning paths tailored to your organization",
    "Bulk enrollment discounts for teams",
    "Progress tracking and analytics dashboard",
    "Dedicated account management support",
    "Integration with your existing LMS",
    "Continuing education credit management"
  ];

  const solutions = [
    {
      icon: Building2,
      title: "Hospital Systems",
      description: "Comprehensive training programs for large healthcare networks and hospital systems.",
      features: ["Multi-facility management", "Standardized protocols", "Quality metrics tracking"]
    },
    {
      icon: Users,
      title: "Medical Groups",
      description: "Specialized training for medical practices and physician groups.",
      features: ["Practice-specific content", "Team collaboration tools", "Performance analytics"]
    },
    {
      icon: TrendingUp,
      title: "Health Plans",
      description: "Value-based care training for health insurance and managed care organizations.",
      features: ["VBC methodology", "Risk management", "Population health strategies"]
    },
    {
      icon: Shield,
      title: "Quality Organizations",
      description: "Advanced quality improvement training for healthcare quality organizations.",
      features: ["Quality frameworks", "Best practices", "Certification programs"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Organization's Healthcare Education
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Empower your healthcare teams with world-class training programs designed to improve patient outcomes and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Get Custom Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80"
                alt="Healthcare team training"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Healthcare Organization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored training programs designed to meet the unique needs of different healthcare organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Organizations Choose MedLearn Pro
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join leading healthcare organizations that trust us to deliver exceptional training and development programs.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80"
                alt="Healthcare organization training"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how MedLearn Pro can help your organization achieve its training and development goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForOrganizations;
