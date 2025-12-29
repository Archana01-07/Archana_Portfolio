/**
 * @copyright 2025 Archana
 * @license Apache-2.0
 */

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  FileText,
  Cpu,
  Award,
  Mail
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const [active, setActive] = useState('#hero');
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Archana_Srinivasan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ONLY required navigation options
  const navOptions = [
    { label: 'Home', link: '#hero', icon: Home },
    { label: 'Projects', link: '#projects', icon: Briefcase },
    { label: 'Experience', link: '#experience', icon: FileText },
    { label: 'Tech Stack', link: '#techstack', icon: Cpu },
    { label: 'Achievements', link: '#achievements', icon: Award },
    { label: 'Contact', link: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Menu Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-sm border border-border rounded-full w-12 h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
            aria-label="Open menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </SheetTrigger>

        {/* Sidebar Content */}
        <SheetContent 
          side="right" 
          className="w-full sm:w-80 p-0 border-l border-border bg-background/95 backdrop-blur-xl"
        >
          <div className="h-full flex flex-col p-6">
            {/* Profile Header */}
            <div className="flex flex-col items-center mb-8 pb-8 border-b border-border">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30">
                  <img 
                    src="/archana.jpeg"
                    alt="Archana Srinivasan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h1 className="text-xl font-bold text-center mb-1">Archana Srinivasan</h1>
              <p className="text-sm text-muted-foreground text-center mb-4">
                CSD Student & Developer
              </p>
              
              {/* Download Resume Button */}
              <Button 
                className="w-full rounded-full mb-2"
                onClick={handleDownloadResume}
                size="sm"
              >
                Download Resume
              </Button>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1">
              <ul className="space-y-1">
                {navOptions.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.link}
                        onClick={() => {
                          setActive(link.link);
                          setIsOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300",
                          active === link.link 
                            ? "bg-primary/20 text-primary border border-primary/30" 
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                      >
                        <Icon size={18} />
                        <span className="font-medium">{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};