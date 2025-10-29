import { useState, useEffect } from 'react';
import logo from '../images/tarator.png';
import { Menu, X, Clock, Phone } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'MENU', id: 'menu' },
    { name: 'GALLERY', id: 'gallery' },
    { name: 'CATERING & EVENTS', id: 'about' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleLogoError = () => {
    console.error('Logo failed to load');
    setLogoError(true);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 text-white"
        style={{ backgroundColor: "#591B1B" }}>
        <div className="container-custom py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">MON-FRI 7:00AM - 3:00PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">1300 827 286</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-6 py-2 border-2 border-[#B43F3F] text-[#B43F3F] rounded-full text-sm font-semibold hover:bg-[#B43F3F] hover:text-white transition-colors duration-300">
                ORDER NOW
              </button>
              <button className="px-6 py-2 border-2 border-white text-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                BOOK A TABLE
              </button>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed top-[52px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <nav className="container-custom py-6">
          <div className="flex items-center justify-between">
            {/* Logo Section - FIXED: Use the imported logo variable */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              {!logoError ? (
                <img
                  src={logo}
                  alt="Tarator Logo"
                  className="h-15 w-auto"
                  onError={handleLogoError}
                />
              ) : (
                // Fallback text logo
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full border-4 border-[#6B3E3A] flex items-center justify-center">
                    <span className="text-[#6B3E3A] font-bold text-lg">T</span>
                  </div>
                  <span className="text-2xl font-bold text-[#6B3E3A]">TARATOR</span>
                </div>
              )}
            </div>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`transition-all duration-300 hover:text-[#B43F3F] text-sm font-semibold tracking-wide ${
                    currentPage === link.id
                      ? 'text-[#B43F3F]'
                      : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6 space-y-4 animate-fadeIn">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 transition-colors hover:text-accent ${
                    currentPage === link.id ? 'text-accent font-medium' : 'text-primary'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
}