import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'Find a Doctor', 
    href: '/doctors',
    submenu: [
      { label: 'All Doctors', href: '/doctors' },
      { label: 'Orthopedic Surgeon (US)', href: '/doctors/orthopedic-surgeon' },
      { label: 'Bariatric Surgeon (Brazil)', href: '/doctors/bariatric-surgeon' },
    ]
  },
  { 
    label: 'Services', 
    href: '/services',
    submenu: [
      { label: 'All Services', href: '/services' },
      { label: 'Orthopedic Surgery', href: '/services/orthopedic' },
      { label: 'Bariatric Surgery', href: '/services/bariatric' },
    ]
  },
  { label: 'Patients & Visitors', href: '/patients-visitors' },
  { label: 'Health Library', href: '/health-library' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#003366] text-white text-sm py-2">
        <div className="px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:1-800-555-0123" className="flex items-center gap-1 hover:text-blue-200">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">1-800-555-0123</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/patients-visitors" className="hover:text-blue-200">Patient Portal</Link>
            <Link to="/contact" className="hover:text-blue-200">Careers</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-white'
        }`}
      >
        <div className="px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#003366] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-[#003366] text-lg block leading-tight">Lutheran Health</span>
                <span className="text-xs text-gray-500">Network</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.submenu && setOpenSubmenu(link.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors ${
                      location.pathname === link.href || location.pathname.startsWith(link.href + '/')
                        ? 'text-[#003366]'
                        : 'text-gray-700 hover:text-[#003366]'
                    }`}
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Submenu */}
                  {link.submenu && openSubmenu === link.label && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg py-2 min-w-48 border-t-2 border-[#003366]">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#003366]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact" className="btn-primary text-sm">
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className="block py-2 text-gray-700 font-medium"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 space-y-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block py-1 text-sm text-gray-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="btn-primary block text-center mt-4">
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
