interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className=" text-white" style={{ backgroundColor: "#591B1B" }}>
      <div className="container-custom py-12">
        <div className="text-center mb-12">
          <p className="text-base leading-relaxed max-w-4xl mx-auto text-gray-200">
            Bringing the flavours of the Mediterranean to South Melbourne - Fresh, Authentic, Unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="flex justify-center md:justify-start">
            <div className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="2"/>
                <text x="50" y="35" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">EUROPA</text>
                <text x="50" y="50" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">PIZZA</text>
                <circle cx="50" cy="65" r="8" fill="white"/>
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              The Europa Pizza features a savory medley of flavors inspired by Europe's diverse cuisine.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="text-gray-200 text-sm space-y-2">
              <p>75 Dorcas St, South Melbourne, 3205</p>
              <p>P1300 827 286</p>
              <p>info@europapizza.com.au</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
            <div className="text-gray-200 text-sm space-y-2">
              <p>Monday: 7:00 AM - 3:00 PM</p>
              <p>Tuesday-Sunday: 7:00 AM - 9:30 PM</p>
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
        <div className="container-custom py-6 text-right">
          <p className="text-gray-300 text-sm">&copy; 2025 &copy; All Rights Reserved Europa Pizza</p>
        </div>
      </div>
    </footer>
  );
}
