import React, { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import './Dashboard.css';
import { FileText, CheckCircle, AlertCircle, FileUp, Link, Briefcase, Upload, Eye } from 'lucide-react';

type Resume = { 
  id: number; 
  name: string; 
  description: string; 
  skills: string[]; 
  experience: string[]; 
  education: string[]; 
};

const Dashboard: React.FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);

  const handleCreateResume = () => {
    console.log('Creating a new optimized resume');
  };

  const handleViewResume = (id: string) => {
    console.log(`Viewing resume with ID: ${id}`);
  };

  return (
    <div className="dashboard-container">
      <AnimatedBackground />
      <header className="dashboard-header text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">Dashboard</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">Optimize your resume with cutting-edge tools</p>
      </header>
      <main className="dashboard-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"> 
          <div className="group relative create-resume"> 
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <FileUp className="h-6 w-6 text-primary"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Upload CV</h3>
              <button className="bg-primary hover:bg-primary-hover text-white w-full px-4 py-2 rounded-lg transition-colors duration-200">Upload</button>
            </div>
          </div>
          <div className="group relative upload-job-description"> 
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Briefcase className="h-6 w-6 text-primary"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Upload Job</h3>
              <input type="url" placeholder="Enter Job URL" className="upload-url text-white px-4 py-2 rounded-lg mb-2 w-full center-text" />
            </div>
          </div>
          <div className="group relative view-resumes"> 
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Eye className="h-6 w-6 text-primary"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Download CV</h3>
              <button className="bg-primary hover:bg-primary-hover text-white w-full px-4 py-2 rounded-lg transition-colors duration-200">Download</button>
            </div>
          </div>
          
          
          
          
        </div>
      </main>
      <footer className="dashboard-footer">
        {/* Additional tools or links */}
      </footer>
    </div>
  );
};

export default Dashboard;
