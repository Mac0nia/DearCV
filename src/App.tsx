import { ArrowRight, Upload, FileText, CheckCircle, AlertCircle, Zap, ChevronRight } from 'lucide-react';

function App() {
  const scrollToSection = () => {
    const section = document.getElementById('three-steps-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-text">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-text/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/src/red.svg" alt="ResumeAI Logo" className="h-24 w-auto" />
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-lg transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-16">
            <div className="max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">Powered by AI</span>
              </div>
              <h1 className="text-6xl font-bold text-white mb-6">
                Your Resume,
                <span className="block text-primary mt-2">Perfected</span>
              </h1>
              <p className="text-white/70 text-xl mb-8">
                Let AI analyze and optimize your resume for each job application, increasing your chances of landing interviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center gap-3">
                  <span>Start Now</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button onClick={scrollToSection} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center gap-3">
                  <span>See How It Works</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="w-full max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl rounded-full transform -rotate-12"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
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
      <div id="three-steps-section" className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">
              Three Steps to Landing Your Dream Job
            </h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 rounded-2xl -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-text/10 group-hover:border-primary/30 transition-colors">
                  <div className="mb-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">{step.title}</h3>
                  <p className="text-text/70">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">Features</h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">"Empower Your Resume with Cutting-Edge Tools"</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 rounded-2xl -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-text/10 group-hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-text mb-3">ATS Optimization</h3>
                <p className="text-text/70">Ensure your resume passes through Applicant Tracking Systems with ease.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 rounded-2xl -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-text/10 group-hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-text mb-3">Time Saving</h3>
                <p className="text-text/70">Quickly tailor your resume to each job application without starting from scratch.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 rounded-2xl -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-text/10 group-hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-text mb-3">Scorer</h3>
                <p className="text-text/70">Get a detailed score and feedback on your resume's effectiveness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-text py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">"Hear from Our Satisfied Users"</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 rounded-2xl -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <div className="bg-white/10 p-8 rounded-2xl shadow-lg border-2 border-white/20 group-hover:border-primary/30 transition-colors">
                <p className="text-white/70">"DearCV transformed my job search! The tailored suggestions were spot on."</p>
                <p className="text-white mt-4 font-bold">- Alex J.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 rounded-2xl -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <div className="bg-white/10 p-8 rounded-2xl shadow-lg border-2 border-white/20 group-hover:border-primary/30 transition-colors">
                <p className="text-white/70">"I landed my dream job thanks to DearCV's resume optimization features."</p>
                <p className="text-white mt-4 font-bold">- Jamie L.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">Pricing</h2>
            <p className="text-text/70 text-lg max-w-2xl mx-auto">"Choose the Plan That's Right for You"</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 rounded-2xl -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-text/10 group-hover:border-primary/30 transition-colors h-full">
                <h3 className="text-xl font-bold text-text mb-3">Free Starter</h3>
                <p className="text-text/70">Get started with basic features at no cost.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 rounded-2xl -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-text/10 group-hover:border-primary/30 transition-colors h-full">
                <h3 className="text-xl font-bold text-text mb-3">Monthly Plan</h3>
                <p className="text-text/70">Access premium features for just £4.99/month.</p>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 rounded-2xl -z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-text/10 group-hover:border-primary/30 transition-colors h-full">
                <h3 className="text-xl font-bold text-text mb-3">Yearly Plan</h3>
                <p className="text-text/70">Save more with a yearly subscription of £49.99.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      <footer className="bg-text border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/src/red.svg" alt="ResumeAI Logo" className="h-12 w-auto" />
            
            </div>
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} DearCV. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;