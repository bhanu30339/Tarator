import logo from "./images/tarator.png"
interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="text-white" style={{ backgroundColor: "#591B1B" }}>
      <div className="container-custom py-12">
        <div className="text-center mb-12">
          <p className="text-base leading-relaxed max-w-4xl mx-auto text-gray-200">
            Bringing the flavours of the Mediterranean to South Melbourne - Fresh, Authentic, Unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section - Updated to use your tarator.png logo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-24 h-24 flex items-center justify-center">
              <img 
                src={logo}
                alt="Tarator Logo" 
                className="h-20 w-auto max-w-[160px]"
                onError={(e) => {
                  // Fallback if logo doesn't load
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Experience authentic Mediterranean flavors at Tarator Cafe, where fresh ingredients meet traditional recipes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="text-gray-200 text-sm space-y-2">
              <p>75 Dorcas St, South Melbourne, 3205</p>
              <p>1300 827 286</p>
              <p>info@taratorcafe.com.au</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
            <div className="text-gray-200 text-sm space-y-2">
              <p>Monday-Friday: 7:00 AM - 3:00 PM</p>
              <p>Saturday-Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 relative">
        <div className="absolute bottom-0 left-0 right-0 h-8 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(255,255,255,0.3) 15px, rgba(255,255,255,0.3) 17px)',
          }}
        ></div>
        <div className="container-custom py-6 text-center">
          <p className="text-gray-300 text-sm">© 2025 Tarator Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}