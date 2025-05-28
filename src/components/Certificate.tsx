
import React, { useState } from 'react';
import { Upload, Download, Award, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface CertificateProps {
  courseName: string;
  studentName: string;
  completionDate: string;
  instructorName: string;
}

const Certificate = ({ courseName, studentName, completionDate, instructorName }: CertificateProps) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        toast({
          title: "Image Uploaded!",
          description: "Your profile picture has been added to the certificate.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    toast({
      title: "Certificate Downloaded!",
      description: "Your certificate has been saved to your device.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="border-2 border-blue-200 shadow-xl">
        <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-blue-100 border-b-2 border-blue-200">
          <div className="flex justify-center mb-4">
            <Award className="h-16 w-16 text-blue-600" />
          </div>
          <CardTitle className="text-3xl font-bold text-blue-800 mb-2">
            Certificate of Completion
          </CardTitle>
          <p className="text-lg text-blue-600">Healthcare Quality Improvement Training</p>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 bg-blue-50">
              <p className="text-lg text-gray-700 mb-2">This is to certify that</p>
              
              <div className="flex items-center justify-center space-x-4 mb-4">
                {uploadedImage && (
                  <img 
                    src={uploadedImage} 
                    alt="Student" 
                    className="w-20 h-20 rounded-full object-cover border-4 border-blue-300"
                  />
                )}
                <div>
                  <h2 className="text-3xl font-bold text-blue-800">{studentName}</h2>
                  <div className="flex items-center justify-center text-gray-600 mt-1">
                    <User className="h-4 w-4 mr-1" />
                    <span>Healthcare Professional</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-2">has successfully completed the course</p>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">{courseName}</h3>
              
              <div className="flex items-center justify-center text-gray-600 mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Completed on {completionDate}</span>
              </div>
              
              <p className="text-gray-700">Instructor: <span className="font-semibold">{instructorName}</span></p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="image-upload"
                />
                <Button 
                  variant="outline" 
                  className="px-6 py-2"
                  asChild
                >
                  <label htmlFor="image-upload" className="cursor-pointer flex items-center">
                    <Upload className="h-4 w-4 mr-2" />
                    {uploadedImage ? 'Change Picture' : 'Upload Picture'}
                  </label>
                </Button>
              </div>
              
              <Button 
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Certificate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Certificate;
