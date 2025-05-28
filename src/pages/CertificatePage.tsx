
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Certificate from '@/components/Certificate';

const CertificatePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Healthcare Training Certificate</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Training Certificate</h2>
            <p className="text-xl text-gray-600">
              Congratulations on completing your healthcare quality improvement training!
            </p>
          </div>
          
          <Certificate 
            courseName="Healthcare Quality Improvement Fundamentals"
            studentName="Healthcare Professional"
            completionDate={new Date().toLocaleDateString()}
            instructorName="Dr. Sarah Johnson"
          />
          
          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Accredited Certificate</h3>
              <p className="text-gray-600 text-sm">Recognized by healthcare organizations worldwide</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Personalized</h3>
              <p className="text-gray-600 text-sm">Add your photo and personal details</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="h-8 w-8 bg-green-500 rounded mx-auto mb-3 flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Downloadable</h3>
              <p className="text-gray-600 text-sm">Save and share your achievement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
