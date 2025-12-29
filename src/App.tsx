/**
 * @copyright 2025 Archana
 * @license Apache-2.0
 */

import { projectsData, education, experience, tools, certifications } from '@/constants/index'; // CHANGED from @/constants/index
import { Button } from '@/components/ui/button';

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
    // Update with your actual email
    window.location.href = 'mailto:archana.srinivasan@example.com';
  };

  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section id="hero" className="min-h-[80vh] sm:min-h-screen flex flex-col justify-center mb-16 sm:mb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Profile Image - SIMPLIFIED */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mx-auto lg:mx-0 bg-gray-100">
            <img 
              src="/archana.jpeg"  // Make sure this file exists in public folder
              alt="Archana Srinivasan"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Hi, I'm <span className="text-primary">Archana</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              First-year B.Tech CSD student passionate about web development, UI/UX design, 
              and AI. Building projects, learning daily, and documenting my journey.
            </p>
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
      <section id="projects" className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center lg:text-left">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projectsData.map((project, index) => (
            <div key={index} className="group rounded-xl border border-border p-4 sm:p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              {/* Project Image */}
              <div className="h-40 sm:h-48 md:h-56 rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 sm:px-3 py-1 text-xs rounded-full bg-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.projectLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">About Me</h2>
        <div className="space-y-4 text-muted-foreground text-base sm:text-lg text-center lg:text-left">
          <p>
            I'm a first-year Computer Science & Design student at Easwari Engineering College, 
            concurrently pursuing a BS in Data Science from IIT Madras. My interests span 
            frontend development, UI/UX design, and AI applications.
          </p>
          <p>
            I believe in learning by building—currently exploring React, Tailwind, and design 
            tools while contributing to hackathons and personal projects.
          </p>
        </div>
      </section>

      {/* Resume/Experience Section */}
      <section id="resume" className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left">Education & Experience</h2>
        
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center lg:text-left">Education</h3>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary pl-4 sm:pl-6 py-2">
                <div className="text-sm text-primary font-medium mb-1">{edu.year}</div>
                <h4 className="font-semibold text-lg">{edu.title}</h4>
                <p className="text-muted-foreground">{edu.institute}</p>
                <p className="text-muted-foreground text-sm mt-2">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center lg:text-left">Experience</h3>
          <div className="space-y-4 sm:space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-secondary pl-4 sm:pl-6 py-2">
                <div className="text-sm text-primary font-medium mb-1">{exp.year}</div>
                <h4 className="font-semibold text-lg">{exp.title}</h4>
                <p className="text-muted-foreground">{exp.institute}</p>
                <p className="text-muted-foreground text-sm mt-2">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left">Skills & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center p-3 sm:p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 bg-secondary rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={tool.imgSrc}
                  alt={tool.label}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain p-1"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-center">{tool.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left">Certifications & Achievements</h2>
        <div className="space-y-3 sm:space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
              <div className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium whitespace-nowrap w-fit">
                {cert.year}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-base sm:text-lg">{cert.title}</h4>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">Get In Touch</h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl text-center lg:text-left">
          Interested in collaborating or have questions? Feel free to reach out!
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <Button size="lg" onClick={handleContactClick}>
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