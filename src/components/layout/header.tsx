"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Stethoscope, ChevronDown, HeartPulse, UserCheck, Baby, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#concierge-care", label: "Benefits" },
];

const serviceLinks = [
    { 
        href: "/#wellness?tab=wellness-testing", 
        label: "Advanced Wellness Testing", 
        tab: "wellness-testing",
        icon: HeartPulse,
        description: "Comprehensive health screenings"
    },
    { 
        href: "/#wellness?tab=primary-care", 
        label: "Traditional Primary Care", 
        tab: "primary-care",
        icon: UserCheck,
        description: "Family medicine services"
    },
    { 
        href: "/#wellness?tab=specialized-services", 
        label: "Medicare & Specialized Services", 
        tab: "specialized-services",
        icon: Baby,
        description: "Senior care & specialized programs"
    },
];

const otherLinks = [
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" },
]

export function Header() {
  const [activeLink, setActiveLink] = React.useState("/#home");
  const router = useRouter();

  const allLinks = [...navLinks, {href: "/#wellness", label: "Services"}, ...otherLinks];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = allLinks.map(link => {
        const id = link.href.substring(2);
        return id ? document.getElementById(id.split('?')[0]) : null;
      }).filter(Boolean);

      let currentSection = "";

      for (const section of sections) {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = `#${section.id}`;
        }
      }
      
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        const lastLink = allLinks[allLinks.length -1];
        const lastId = lastLink.href.substring(2);
        if (document.getElementById(lastId)) {
          currentSection = lastLink.href;
        }
      }

      if (currentSection) {
        setActiveLink(currentSection);
      } else if (window.scrollY < 100) {
        setActiveLink("/#home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allLinks]);

  const handleServiceClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, href: string) => {
    event.preventDefault();
    const sectionId = href.split('?')[0].substring(2);
    
    // First update the URL to trigger tab change
    router.push(href, { scroll: false });
    
    // Wait for the URL to update and tab component to process, then scroll
    // Using requestAnimationFrame to ensure DOM has updated
    requestAnimationFrame(() => {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    });
  };


  return (
    <header className={cn(
      "sticky top-0 z-40 transition-all duration-300",
      "bg-background/80 backdrop-blur-sm border-b"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/#home" className="flex items-center gap-2">
          <Stethoscope className={cn(
            "h-7 w-7 transition-colors",
            "text-primary"
          )} />
          <span className={cn(
            "font-headline text-lg font-bold transition-colors",
             "text-primary"
          )}>
            Dr. Allison N. Williams, MD
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={cn(
                "text-sm font-medium transition-colors",
                activeLink === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className={cn(
                            "text-sm font-medium transition-colors flex items-center gap-1",
                            activeLink.startsWith('/#wellness') ? "text-primary" : "text-muted-foreground hover:text-primary"
                        )}
                    >
                        Services
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-72 p-2">
                    {serviceLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <DropdownMenuItem 
                                key={link.href} 
                                onSelect={(e) => e.preventDefault()} 
                                onClick={(e) => handleServiceClick(e as any, link.href)}
                                className="flex items-start gap-3 p-3 rounded-md cursor-pointer hover:bg-accent/50 transition-colors group"
                            >
                                <div className="mt-0.5 p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                    <Icon className="h-4 w-4" />
                                </div>
                                <div className="flex-1 space-y-0.5">
                                    <div className="font-medium text-sm">{link.label}</div>
                                    <div className="text-xs text-muted-foreground">{link.description}</div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuContent>
            </DropdownMenu>

            {otherLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={cn(
                    "text-sm font-medium transition-colors",
                    activeLink === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
                >
                {link.label}
                </Link>
            ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="https://www.mdvip.com/doctors/AllisonWilliamsMD" target="_blank" rel="noopener noreferrer">Join MDVIP</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-accent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <nav className="flex flex-col h-full">
                <div className="flex-grow pt-8 overflow-y-auto">
                  {navLinks.map((link) => (
                    <SheetTrigger asChild key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setActiveLink(link.href)}
                        className={cn(
                          "block py-3 text-lg font-medium transition-colors hover:text-primary border-b",
                          activeLink === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetTrigger>
                  ))}
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services" className="border-b">
                      <AccordionTrigger className="text-lg font-medium py-3 hover:no-underline hover:text-primary">
                        Services
                      </AccordionTrigger>
                      <AccordionContent className="pb-2">
                        <div className="space-y-2 pt-2">
                          {serviceLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                              <SheetTrigger asChild key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setActiveLink(link.href);
                                    const sectionId = link.href.split('?')[0].substring(2);
                                    
                                    // First update the URL to trigger tab change
                                    router.push(link.href, { scroll: false });
                                    
                                    // Wait for the URL to update and tab component to process, then scroll
                                    // Using requestAnimationFrame to ensure DOM has updated
                                    requestAnimationFrame(() => {
                                      setTimeout(() => {
                                        const section = document.getElementById(sectionId);
                                        if (section) {
                                          section.scrollIntoView({ behavior: 'smooth' });
                                        }
                                      }, 150);
                                    });
                                  }}
                                  className={cn(
                                    "flex items-start gap-3 p-3 rounded-md transition-colors hover:bg-accent/50 group",
                                    activeLink.startsWith(link.href.split('?')[0]) ? "bg-accent/30 text-primary" : "text-foreground"
                                  )}
                                >
                                  <div className="mt-0.5 p-1.5 rounded-md bg-primary/10 text-primary">
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div className="flex-1 space-y-0.5">
                                    <div className="font-medium text-sm">{link.label}</div>
                                    <div className="text-xs text-muted-foreground">{link.description}</div>
                                  </div>
                                </Link>
                              </SheetTrigger>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {otherLinks.map((link) => (
                    <SheetTrigger asChild key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setActiveLink(link.href)}
                        className={cn(
                          "block py-3 text-lg font-medium transition-colors hover:text-primary border-b",
                          activeLink === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetTrigger>
                  ))}
                </div>
                <Button asChild className="w-full mt-4">
                  <a href="https://www.mdvip.com/doctors/AllisonWilliamsMD" target="_blank" rel="noopener noreferrer">Join MDVIP</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
