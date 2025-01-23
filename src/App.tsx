import { ArrowRight, Upload, FileText, CheckCircle, AlertCircle, Zap, ChevronRight } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />
            {/* Navigation */}
            <nav className="fixed w-full z-50 backdrop-blur-sm border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <img src="/src/red.svg" alt="DearCV Logo" className="h-32 w-auto mx-auto" />
                </div>
                <div className="hidden md:flex items-center gap-8">
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-white hover:text-primary transition-colors"
                  >
                    How it Works
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-white hover:text-primary transition-colors"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="text-white hover:text-primary transition-colors"
                  >
                    Pricing
                  </button>
                </div>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-lg transition-all" onClick={() => window.open('/dashboard', '_blank')}>
                  Get Started
                </button>
              </div>
            </nav>

            {/* Hero Section */}
            <div id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center gap-16">
                  <div className="max-w-3xl text-center">
                    <img src="/src/red.svg" alt="DearCV Logo" className="mb-4 mx-auto" />
                    <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8" style={{ color: '#C73257' }}>
                      <Zap className="h-4 w-4" />
                      <span className="text-sm font-medium">Powered by AI</span>
                    </div>
                    <h1 className="text-6xl font-bold text-white mb-6">
                      Your Resume,
                      <span className="block text-primary mt-2" style={{ color: '#C73257' }}>Perfected</span>
                    </h1>
                    <p className="text-white/70 text-xl mb-8">
                      Let AI analyse and optimize your resume for each job application, increasing your chances of landing interviews.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center gap-3" style={{ backgroundColor: '#C73257' }} onClick={() => window.open('/dashboard', '_blank')}>
                        <span>Start Now</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                      <button onClick={() => scrollToSection('how-it-works')} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center gap-3">
                        <span>See How It Works</span>
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full max-w-2xl mx-auto">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-full transform -rotate-12"></div>
                      <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-primary"></div>
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-white/20 rounded-full w-3/4"></div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-2 bg-white/10 rounded-full"></div>
                            <div className="h-2 bg-white/10 rounded-full w-4/5"></div>
                            <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                          </div>
                          <div className="flex justify-end">
                            <div className="bg-primary/20 text-primary px-4 py-2 rounded-lg text-sm">
                              98% Match
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div id="how-it-works" className="py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Three Steps to Landing Your Dream Job
                  </h2>
                  <p className="text-white/70 text-lg max-w-2xl mx-auto">
                    Our AI-powered platform simplifies the process of tailoring your resume for each application.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Upload,
                      title: 'Upload Resume',
                      desc: 'Share your current resume in any format - PDF, DOCX, or TXT'
                    },
                    {
                      icon: FileText,
                      title: 'Add Job Details',
                      desc: 'Paste the URL of your target job posting from LinkedIn'
                    },
                    {
                      icon: CheckCircle,
                      title: 'Get Optimized',
                      desc: 'Receive AI-powered suggestions to improve your resume'
                    }
                  ].map((step, i) => (
                    <div key={i} className="group relative">
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 hover:ring-white/20 transition-all">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-white/70">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
                  <p className="text-white/70 text-lg max-w-2xl mx-auto">Empower Your Resume with Cutting-Edge Tools</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group relative">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 hover:ring-white/20 transition-all">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">ATS Optimization</h3>
                      <p className="text-white/70">Ensure your resume passes through Applicant Tracking Systems with ease.</p>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 hover:ring-white/20 transition-all">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Time Saving</h3>
                      <p className="text-white/70">Quickly tailor your resume to each job application without starting from scratch.</p>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 ring-1 ring-white/10 hover:ring-white/20 transition-all">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                        <AlertCircle className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Scorer</h3>
                      <p className="text-white/70">Get a detailed score and feedback on your resume's effectiveness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Section */}
            <div id="testimonials" className="py-24 bg-transparent">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
                  <p className="text-white/70 text-lg max-w-2xl mx-auto">Hear from Our Satisfied Users</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group relative h-full">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
                      <p className="text-white/70 text-lg flex-grow">"DearCV transformed my job search! The tailored suggestions were spot on."</p>
                      <p className="text-white mt-4 font-bold">- Alex J.</p>
                    </div>
                  </div>
                  <div className="group relative h-full">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
                      <p className="text-white/70 text-lg flex-grow">"I landed my dream job thanks to DearCV's resume optimization features. Thanks god I used it."</p>
                      <p className="text-white mt-4 font-bold">- Lorenzo C.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div id="pricing" className="py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-4">Pricing</h2>
                  <p className="text-white/70 text-lg max-w-2xl mx-auto">Choose the Plan That's Right for You</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group relative h-full">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
                      <p className="text-4xl font-bold text-white mb-6">£0</p>
                      <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          One CV analysis
                        </li>
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Basic optimization tips
                        </li>
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Email support
                        </li>
                      </ul>
                      <button className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all" onClick={() => window.open('/dashboard', '_blank')}>
                        Get Started
                      </button>
                    </div>
                  </div>

                  <div className="group relative h-full">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-4">Pay as You Go</h3>
                      <p className="text-4xl font-bold text-white mb-6">£4.99<span className="text-lg font-normal text-white/70">/CV</span></p>
                      <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Advanced AI analysis
                        </li>
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Job-specific optimization
                        </li>
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Priority support
                        </li>
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Pay only when needed
                        </li>
                      </ul>
                      <button className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all" onClick={() => window.open('/dashboard', '_blank')}>
                        Start Now
                      </button>
                    </div>
                  </div>

                  <div className="group relative h-full">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 ring-1 ring-white/10 hover:ring-white/20 transition-all h-full flex flex-col">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">Most Popular</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Monthly</h3>
                      <p className="text-4xl font-bold text-white mb-6">£19.99<span className="text-lg font-normal text-white/70">/mo</span></p>
                      <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Unlimited CV analysis
                        </li>
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          All premium features
                        </li>
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          24/7 priority support
                        </li>
                        <li className="flex items-center text-white/70">
                          <CheckCircle className="h-5 w-5 text-primary mr-2" />
                          Custom templates
                        </li>
                      </ul>
                      <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg transition-colors duration-200" style={{ backgroundColor: '#C73257' }} onClick={() => window.open('/dashboard', '_blank')}>
                        Get Unlimited Access
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div id="disclaimer" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-white/70 text-sm leading-relaxed">
                      Our AI provides suggestions based on analyzing your existing resume and the job requirements. 
                      We never fabricate or misrepresent information. All final resume modifications are made by you, 
                      ensuring complete accuracy and truthfulness of your application.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer id="footer" className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">Features</a>
                      </li>
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a>
                      </li>
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">About</a>
                      </li>
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a>
                      </li>
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a>
                      </li>
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
                      </li>
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">Twitter</a>
                      </li>
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</a>
                      </li>
                      <li>
                        <a href="#" className="text-white/70 hover:text-white transition-colors">GitHub</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-center text-white/70">
                    &copy; {new Date().getFullYear()} DearCV. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;