import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/20">
                <Leaf className="h-5 w-5" />
              </div>
              <span>CropGuard AI</span>
            </Link>
            <p className="mt-4 max-w-sm text-primary-foreground/80 text-sm leading-relaxed">
              Empowering farmers with AI-powered crop disease detection and treatment recommendations in their local language.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/detect" className="hover:text-primary-foreground transition-colors">Detect Disease</Link></li>
              <li><Link to="/history" className="hover:text-primary-foreground transition-colors">History</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@cropguard.ai</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Agricultural Research Center, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© 2025 CropGuard AI. All rights reserved. Made with ❤️ for farmers.</p>
        </div>
      </div>
    </footer>
  );
}