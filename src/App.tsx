/**
 * @copyright 2025 Archana
 * @license Apache-2.0
 */

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export const App = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ARCHANA_SRINIVASAN.pdf';
    link.download = 'Archana_Resume.pdf';
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
              Heyy, I'm <span className="text-primary">Archana</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              A student passionate about Web Development, UI/UX Design, and Software Development. I’m building projects, learning every day, and documenting my journey as I grow. Step in and take a dive into my world of code, creativity, and creation.
            </p>
            
            {/* Social Links in Hero */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <a 
                href="https://github.com/Archana01-07"  // PASTE YOUR GITHUB LINK HERE
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/archana-sr-67a0b7355/"  // PASTE YOUR LINKEDIN LINK HERE
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:sr.archana01@gmail.com"  // PASTE YOUR EMAIL HERE
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
                src="/images/voice.png"  // PASTE PROJECT 1 IMAGE PATH HERE
                alt="VoiceCare – Voice-Enabled AI Symptom Screener"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl mb-2">VoiceCare – Voice-Enabled AI Symptom Screener</h3>
            {/* <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 text-xs rounded-full bg-secondary">AI</span>
              <span className="px-3 py-1 text-xs rounded-full bg-secondary">Healthcare</span>
              <span className="px-3 py-1 text-xs rounded-full bg-secondary">Speech</span>
            </div> */}
            <p>Voice-based medical symptom screener with voice input, triage suggestions & UI screens. </p>
             
            <a 
              href="https://github.com/Archana01-07/VoiceCare---AI-Powered-Symptom-Screener"  // PASTE PROJECT 1 GITHUB LINK
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              <br></br>
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div className="rounded-xl border border-border p-5 hover:border-primary/50 transition-all">
            <div className="h-48 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/images/java.png"  // PASTE PROJECT 2 IMAGE PATH
                alt="Java Learning Portal – Interactive Learning System"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl mb-2">Java Learning Portal – Interactive Learning System</h3>
            <p> Desktop Java platform for learning, compiling, and tracking
programming progress.</p>
            <a 
              href="https://github.com/Archana01-07/Java-Learning-Portal-with-IDE"  // PASTE PROJECT 2 GITHUB LINK
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              <br></br>
              View Project →
            </a>
          </div>

<div className="rounded-xl border border-border p-5 hover:border-primary/50 transition-all">
            <div className="h-48 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/images/face.png"  // PASTE PROJECT 2 IMAGE PATH
                alt="Face Recognition – Webcam Identity Recognition
System"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl mb-2">Face Recognition – Webcam Identity Recognition
System</h3>
            <p>Real-time facial recognition system that detects faces through webcam input, classifies identities from a trained dataset, and displays facial landmarks/IDs with UI toggle controls.</p>
            <a 
              href="https://github.com/Archana01-07/Face-Recognition"  // PASTE PROJECT 2 GITHUB LINK
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              <br></br>
              View Project → 
            </a>
          </div>

          <div className="rounded-xl border border-border p-5 hover:border-primary/50 transition-all">
            <div className="h-48 rounded-lg mb-4 overflow-hidden">
              <img 
                src="/images/hms.png"  // PASTE PROJECT 2 IMAGE PATH
                alt="Hospital Management System"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl mb-2">Hospital Management System</h3>
            <p>Web-based hospital management platform handling patient
records, appointments, staff roles, and billing workflows.</p>
            <a 
              href="https://github.com/Archana01-07/Hospital-Management-System"  // PASTE PROJECT 2 GITHUB LINK
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              <br></br>
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
            <div className="text-sm text-primary font-medium mb-1">Aug 2025 - Sep 2025 </div>
            <h4 className="font-semibold text-lg">ValutOfCodes Internship</h4>
            <p className="text-muted-foreground"> Gained hands-on experience in frontend development.  </p>
            <p className="text-muted-foreground  mt-5">
              Developed and deployed responsive web projects—including
an internship listings page, interactive video gallery,
recipe card, and to-do app—using HTML, CSS, and
JavaScript.
            </p>
            <br></br>
            <a 
                  href="/CERTIFICATE.pdf"  // PASTE CERTIFICATE LINK
                  className="text-sm text-primary hover:underline mt-1 inline-block"
                >
                  View Certificate →
            </a>
            <br></br>
            <a href="https://github.com/Archana01-07/VOC---Internship" 
                  className="text-sm text-primary hover:underline mt-1 inline-block"
                >
                  <br></br>
                  View Internship Work Summary →
                </a>
          </div>
          {/* <div className="border-l-2 border-secondary pl-6 py-2">
            <div className="text-sm text-primary font-medium mb-1">2025 (Hackathon)</div>
            <h4 className="font-semibold text-lg">VisAIon Hacks</h4>
            <p className="text-muted-foreground">Self Projects + Portfolio Work</p>
            <p className="text-muted-foreground text-sm mt-2">
              Learning Tailwind, React, and product design to build real projects.
            </p>
          </div> */}
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
                src="/images/tools/java.png"  // PASTE JAVA ICON PATH
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
                src="/images/tools/python.png"  // PASTE PYTHON ICON PATH
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
                src="/images/tools/c.png"  // PASTE REACT ICON PATH
                alt="C"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">C</span>
          </div>

          {/* Tech Item 4 */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tools/javascript.svg"  // PASTE JS ICON PATH
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
                src="/images/tools/html.jpg"  // PASTE HTML ICON PATH
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
                src="/images/tools/css3.svg"  // PASTE CSS ICON PATH
                alt="CSS"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">CSS</span>
          </div>
          {/* Tech Item 7 */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tools/mysql.png"  // PASTE CSS ICON PATH
                alt="MySQL"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">MySQL</span>
          </div>
          {/* Tech Item 8 */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tools/vsc.png"  // PASTE CSS ICON PATH
                alt="VSC"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">Visual Studio Code</span>
          </div>

          {/* Tech Item 9*/}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tools/git.png"  // PASTE CSS ICON PATH
                alt="Git/Github"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">Git/Github</span>
          </div>

          {/* Tech Item 10*/}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tools/figma.svg"  // PASTE CSS ICON PATH
                alt="Figma"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">Figma</span>
          </div>

           
          {/* Tech Item 11*/}
          <div className="flex flex-col items-center p-4 rounded-xl border border-border hover:border-primary/50 transition-all">
            <div className="w-12 h-12 mb-2 flex items-center justify-center">
              <img 
                src="/images/tools/canva.png"  // PASTE CSS ICON PATH
                alt="Canva"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-sm font-medium">Canva</span>
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
                <h4 className="font-medium text-lg">Runner Up in VisAIon Hacks 2025 </h4>
                <h3> Conducted by Ciklum & EEC</h3>
                <br></br>
                <p> FaceBank – Developed and deployed with Lovable AI, this smart banking system uses webcam facial recognition to identify customers, predict needs, and auto-route them to service counters (VIP/Elderly/Regular). </p>
<br></br>
                <p>Received a cash prize of 5000 rupees </p>
                <br></br>
                <a 
                  href="https://github.com/Archana01-07/face-bank"  // PASTE CERTIFICATE LINK
                  className="text-sm text-primary hover:underline mt-1 inline-block"
                >
                  View Project →
                </a>
                <br></br>
                <br></br>

                <a 
                  href="/vis.jpeg"  // PASTE CERTIFICATE LINK
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
                2025
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg">Privacy and Security in Online Social Media </h4>
                <p>NPTEL Online Certification</p>
                <a 
                  href="/Nptel.pdf"  // PASTE CERTIFICATE LINK
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
                2025
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg">MongoDB Basics for Students </h4>
                <a 
                  href="/mongo.pdf"  // PASTE CERTIFICATE LINK
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
                2025
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg">Introduction to Cybersecurity </h4>
                <p>Cisco Networkig Academy</p>
                <a 
                  href="/cyber.pdf"  // PASTE CERTIFICATE LINK
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
                2025
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg"> Networking Basics </h4>
                <p>Cisco Networkig Academy</p>

                <a 
                  href="/network.pdf"  // PASTE CERTIFICATE LINK
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
          <Button size="lg" onClick={() => window.location.href = 'mailto:sr.archana01@gmail.com'}>
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