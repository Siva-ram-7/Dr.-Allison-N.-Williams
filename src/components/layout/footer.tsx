import Link from "next/link";
import { Stethoscope, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/#concierge-care", label: "Concierge Care" },
  { href: "/#wellness", label: "Wellness Services" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link href="/#home" className="flex items-center gap-2">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">
                Crofton Family Practice
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Crofton Family Practice is more than healthcare—it’s a partnership in your well-being, led by a skilled, compassionate physician who puts you first.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                  <a href="https://www.mdvip.com/doctors/AllisonWilliamsMD" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Join
                  </a>
                </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>1684 Village Green, Lower Level, Crofton, MD 21114</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:410-424-5348" className="hover:text-primary transition-colors">410-424-5348</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@croftoncare.com" className="hover:text-primary transition-colors">info@croftoncare.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Crofton Family Practice. All Rights Reserved. An MDVIP-affiliated practice.</p>
        </div>
      </div>
    </footer>
  );
}
