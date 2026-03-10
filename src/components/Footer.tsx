import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      {/* Main Footer */}
      <div className="px-4 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#003366] font-bold text-lg">L</span>
              </div>
              <div>
                <span className="font-bold text-lg block leading-tight">Lutheran Health</span>
                <span className="text-xs text-blue-200">Network</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              Providing exceptional healthcare services across the United States and Brazil. 
              Your health is our priority.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}<a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Staff Portal Login</a>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link to="/doctors" className="hover:text-white transition-colors">Find a Doctor</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/health-library" className="hover:text-white transition-colors">Health Library</Link></li>
              <li><Link to="/patients-visitors" className="hover:text-white transition-colors">Patients & Visitors</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><Link to="/services/orthopedic" className="hover:text-white transition-colors">Orthopedic Surgery</Link></li>
              <li><Link to="/services/bariatric" className="hover:text-white transition-colors">Bariatric Surgery</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Emergency Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Physical Therapy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diagnostic Imaging</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-blue-100">
              <p>
                <strong className="text-white block">United States</strong>
                7952 W Jefferson Blvd<br />
                Fort Wayne, IN 46804<br />
                (260) 435-2999
              </p>
              <p>
                <strong className="text-white block">Brazil</strong>
                Av. Paulista, 1000<br />
                Porto Alegre, RS<br />
                +55 (51) 99999-9999
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="px-4 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <p>© 2026 Lutheran Health Network. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Notice of Privacy Practices</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
