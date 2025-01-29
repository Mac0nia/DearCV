import React, { useState, useRef } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import './Dashboard.css';
import { FileText, Briefcase, Eye, FileUp } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4

const Dashboard: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobUrl, setJobUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef(uuidv4()); // Generate a unique sessionId

  // Handles CV upload
  const handleUploadCV = async () => {
    if (!file) {
      alert('Please select a CV file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('sessionId', sessionId.current);

    try {
      const response = await fetch('https://app.dearchappie.co.uk/webhook-test/b694faf0-cf75-4c21-802e-38dc9767ed17', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload CV');

      const result = await response.json();
      console.log('File upload response:', result);
      alert('CV uploaded successfully!');
    } catch (error) {
      console.error('Error uploading CV:', error);
      alert('Failed to upload CV.');
    }
  };

  // Handles file selection and triggers upload
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    console.log('Selected file:', selectedFile);

    // Automatically upload the file after selection
    await handleUploadCV();
  };

  // Handles job URL submission
  const handleSubmitJobUrl = async () => {
    if (!jobUrl) {
      alert('Please enter a job URL.');
      return;
    }

    try {
      const response = await fetch('https://app.dearchappie.co.uk/webhook-test/a9150df1-9621-41eb-9d5f-8f3c44945d38', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: jobUrl,
          sessionId: sessionId.current,
        }),
      });

      if (!response.ok) throw new Error('Failed to submit job URL');

      const result = await response.json();
      console.log('Job URL submission response:', result);
      alert('Job URL submitted successfully!');
    } catch (error) {
      console.error('Error submitting job URL:', error);
      alert('Failed to submit job URL.');
    }
  };

  // Handles CV download
  const handleDownloadCV = async () => {
    if (!downloadLink) {
      alert('No processed CV available for download.');
      return;
    }
    window.open(downloadLink, '_blank');
  };

  // Triggers file input click
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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
          
          {/* Upload CV Card */}
          <div className="group relative create-resume">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <FileUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Upload CV</h3>
              <button
                  className="bg-primary hover:bg-primary-hover text-white w-full px-4 py-2 rounded-lg transition-colors duration-200"
                  onClick={handleButtonClick}>
                  Upload File
              </button>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange} // Auto-upload file on selection
              />
            </div>
          </div>

          {/* Upload Job Description Card */}
          <div className="group relative upload-job-description">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enter Job URL</h3>
              <input
                type="url"
                placeholder="Enter Job URL"
                className="text-white px-4 py-2 rounded-lg w-full bg-transparent border border-white/20 focus:border-white/50"
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmitJobUrl();
                  }
                }} // Submit on Enter
              />
            </div>
          </div>

          {/* Download CV Card */}
          <div className="group relative view-resumes">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Download CV</h3>
              <button
                className="bg-primary hover:bg-primary-hover text-white w-full px-4 py-2 rounded-lg transition-colors duration-200"
                onClick={handleDownloadCV}
              >
                Download
              </button>
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