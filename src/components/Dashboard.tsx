import React from 'react';
import './Dashboard.css';
import AnimatedBackground from './AnimatedBackground';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <AnimatedBackground />
            {/* Header and Navbar */}
            <nav className="fixed w-full z-50 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <a href="/">
                            <img src="/src/red.svg" alt="DearCV Logo" className="h-32 w-auto mx-auto" />
                        </a>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <button className="text-white hover:text-primary transition-colors">Home</button>
                        <button className="text-white hover:text-primary transition-colors">Features</button>
                        <button className="text-white hover:text-primary transition-colors">Pricing</button>
                    </div>
                </div>
            </nav>

            {/* Main Dashboard Content */}
            <div className="main-content">
                <div className="content-wrapper">
                    <div className="options">
                        <button className="option-button">Create New Optimized Resume</button>
                        <button className="option-button">View Optimized Resumes</button>
                    </div>
                    <div className="resume-optimization">
                        <h2>Optimize Your Resume</h2>
                        <div className="step">
                            <h3>Upload Resume</h3>
                            <p>Share your current resume in any format - PDF, DOCX, or TXT</p>
                            <input type="file" accept=".pdf,.docx,.txt" />
                        </div>
                        <div className="step">
                            <h3>Add Job Details</h3>
                            <p>Paste the URL of your target job posting from LinkedIn</p>
                            <input type="url" placeholder="Job posting URL" />
                        </div>
                        <button className="download-button">Download Optimized Resume</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Twitter</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-white/70 hover:text-white transition-colors">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-center text-white/70">&copy; {new Date().getFullYear()} DearCV. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
