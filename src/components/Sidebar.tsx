/**
 *  @copyright 2025 Archana
 *  @license Apache-2.0
 */

/** 
 * Node modules
*/
import { useState } from "react";

/** 
 * Components
*/
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/** 
 * Assets
*/
import { MenuIcon } from "lucide-react";

/** 
 * Data
*/
import { navLinks, socialLinks } from "@/constants/index";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
    const [active, setActive] = useState('#hero');

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Archana_Srinivasan_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Sheet> 
                <SheetTrigger asChild>
                    <Button 
                        variant='ghost' 
                        size='icon' 
                        className='m-4 fixed top-4 right-4 z-50 border-2 hover:border-primary bg-background/80 backdrop-blur-sm py-5 px-5 rounded-full hover:text-primary cursor-pointer lg:hidden'
                    >
                        <MenuIcon size={30}/>
                    </Button>
                </SheetTrigger>
                <SheetContent 
                    side='right' 
                    className='w-84 bg-background text-foreground py-6 pl-10 sm:w-96'
                >
                    <SheetTitle className="text-lg sm:text-xl font-semibold">Menu</SheetTitle>
                    
                    <nav className="flex flex-col gap-3 sm:gap-4 mt-6">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a 
                                    href={link.link} 
                                    key={link.label}
                                    onClick={() => setActive(link.link)}
                                    className={cn(
                                        'text-muted-foreground flex items-center gap-3 hover:text-primary transition-colors duration-200 text-base sm:text-lg py-2',
                                        active === link.link && 'text-primary font-medium'
                                    )}
                                >
                                    <Icon className='size-5 sm:size-6'/>
                                    {link.label}
                                </a>
                            );
                        })}
                    </nav>
                    
                    <div className="mt-12 sm:mt-16">
                        <p className="pb-3 sm:pb-4 text-foreground font-medium">Connect with me</p>
                        <div className="flex gap-3 sm:gap-4">
                            {socialLinks.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={i}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary border-2 border-border p-2 sm:p-3 rounded-full hover:border-primary transition duration-200 text-muted-foreground hover:bg-accent"
                                    >
                                        <Icon className='size-4 sm:size-5' />
                                    </a>
                                );
                            })}
                        </div>
                        
                        <Button 
                            className="w-full mt-6 sm:mt-8" 
                            size="sm"
                            onClick={handleDownloadResume}
                        >
                            Download Resume
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:block fixed left-0 top-0 h-screen w-64 border-r border-border bg-background/50 backdrop-blur-sm p-6">
                <div className="flex flex-col h-full">
                    {/* Profile Image for Desktop */}
                    <div className="mb-8">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 mb-4 mx-auto">
                            <img 
                                src="/archana.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?w=200&h=200&fit=crop";
                                }}
                            />
                        </div>
                        <h1 className="text-center text-lg font-bold">Archana Srinivasan</h1>
                        <p className="text-center text-sm text-muted-foreground">CSD Student & Developer</p>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <li key={link.label}>
                                        <a
                                            href={link.link}
                                            onClick={() => setActive(link.link)}
                                            className={cn(
                                                "flex items-center gap-3 px-3 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
                                                active === link.link && "text-primary bg-accent"
                                            )}
                                        >
                                            <Icon size={18} />
                                            <span className="text-sm font-medium">{link.label}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Desktop Social & Download */}
                    <div className="pt-6 border-t border-border">
                        <div className="flex justify-center gap-3 mb-6">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
                                        aria-label={social.label}
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                        <Button 
                            className="w-full" 
                            size="sm"
                            onClick={handleDownloadResume}
                        >
                            Download Resume
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    );
};