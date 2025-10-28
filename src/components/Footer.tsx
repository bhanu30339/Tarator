import { Facebook, Instagram, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-footer text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold">Tarator Australia</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience the authentic flavors of the Mediterranean. Traditional recipes crafted with premium ingredients and served with passion.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Contact'].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.toLowerCase().replace(' ', ''))}
                    className="text-gray-400 hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
            <div className="text-gray-400">
              <p className="mb-2">Sydney, NSW, Australia</p>
              <p className="mb-2">Phone: +61 2 1234 5678</p>
              <p>Email: hello@tarator.com.au</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Tarator Australia | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
