/**
 * @copyright 2025 Archana
 * @license Apache-2.0
 */

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export const App = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Archana_Srinivasan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:archana@example.com';
  };

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Hero Section with Social Links */}
      <section id="hero" className="min-h-screen flex items-center justify-center mb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img 
              src="/archana.jpeg"
              alt="Archana Srinivasan"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Hi, I'm <span className="text-primary">Archana</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              First-year B.Tech CSD student passionate about web development, UI/UX design, 
              and AI. Building projects, learning daily, and documenting my journey.
            </p>
            
            {/* Social Links in Hero */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <a 
                href="https://github.com/yourusername"  // PASTE YOUR GITHUB LINK HERE
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername"  // PASTE YOUR LINKEDIN LINK HERE
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:your.email@example.com"  // PASTE YOUR EMAIL HERE
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <Button size="lg" onClick={handleDownloadResume}>
                Download Resume
              </Button>
              <Button variant="outline" size="lg" onClick={handleContactClick}>
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="rounded-xl border border-border p-5 hover:border-primary/50 transition-all">
            <div className="h-48 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/images/projects/project1.jpg"  // PASTE PROJECT 1 IMAGE PATH HERE
                alt="VoiceGap - Symptom Screener"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl mb-2">VoiceGap - Symptom Screener</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 text-xs rounded-full bg-secondary">AI</span>
              <span className="px-3 py-1 text-xs rounded-full bg-secondary">Healthcare</span>
              <span className="px-3 py-1 text-xs rounded-full bg-secondary">Speech</span>
            </div>
            <a 
              href="https://github.com/yourusername/voicegap"  // PASTE PROJECT 1 GITHUB LINK
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="rounded-xl border border-border p-5 hover:border-primary/50 transition-all">
            <div className="h-48 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/images/projects/project2.jpg"  // PASTE PROJECT 2 IMAGE PATH
                alt="Unbias Hire"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl mb-2">Unbias Hire - AI Hiring Platform</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 text-xs rounded-full bg-secondary">UI/UX</span>
              <span className="px-3 py-1 text-xs rounded-full bg-secondary">Frontend</span>
              <span className="px-3 py-1 text-xs rounded-full bg-secondary">AI</span>
            </div>
            <a 
              href="https://github.com/yourusername/unbiashire"  // PASTE PROJECT 2 GITHUB LINK
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-secondary pl-6 py-2">
            <div className="text-sm text-primary font-medium mb-1">2025 (Hackathon)</div>
            <h4 className="font-semibold text-lg">VoiceGap - Symptom Screener (Team Member)</h4>
            <p className="text-muted-foreground">Code Cubicle 4.0</p>
            <p className="text-muted-foreground text-sm mt-2">
              AI-based symptom analysis with voice input, triage suggestions & UI screens.
            </p>
          </div>
          <div className="border-l-2 border-secondary pl-6 py-2">
            <div className="text-sm text-primary font-medium mb-1">2025</div>
            <h4 className="font-semibold text-lg">UI/UX & Frontend Learning</h4>
            <p className="text-muted-foreground">Self Projects + Portfolio Work</p>
            <p className="text-muted-foreground text-sm mt-2">
              Learning Tailwind, React, and product design to build real projects.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Tech Stack & Tools</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {/* Tech Item 1 */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tech/java.svg"  // PASTE JAVA ICON PATH
                alt="Java"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">Java</span>
          </div>

          {/* Tech Item 2 */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tech/python.svg"  // PASTE PYTHON ICON PATH
                alt="Python"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">Python</span>
          </div>

          {/* Tech Item 3 */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tech/react.svg"  // PASTE REACT ICON PATH
                alt="React"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">React</span>
          </div>

          {/* Tech Item 4 */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tech/javascript.svg"  // PASTE JS ICON PATH
                alt="JavaScript"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">JavaScript</span>
          </div>

          {/* Tech Item 5 */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tech/html.svg"  // PASTE HTML ICON PATH
                alt="HTML"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">HTML</span>
          </div>

          {/* Tech Item 6 */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tech/css.svg"  // PASTE CSS ICON PATH
                alt="CSS"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">CSS</span>
          </div>

          {/* Add more tech items as needed */}
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section id="achievements" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Achievements & Certifications</h2>
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                2025
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg">Participated in Code Cubicle 4.0 Hackathon</h4>
                <a 
                  href="#"  // PASTE CERTIFICATE LINK
                  className="text-sm text-primary hover:underline mt-1 inline-block"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
                2024
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg">UI/UX Fundamentals - Self Learning Path</h4>
                <a 
                  href="#"  // PASTE CERTIFICATE LINK
                  className="text-sm text-primary hover:underline mt-1 inline-block"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Interested in collaborating or have questions? Feel free to reach out!
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" onClick={() => window.location.href = 'mailto:your.email@example.com'}>
            Send Email
          </Button>
          <Button variant="outline" size="lg" onClick={handleDownloadResume}>
            Download Resume
          </Button>
        </div>
      </section>
    </main>
  );
};