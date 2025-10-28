interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative pt-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <div
          className="relative h-[600px] bg-cover bg-center overflow-hidden group"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800)',
          }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-white">
            <div className="flex flex-col items-center">
              <h2 className="text-5xl font-bold mb-4">Tarator</h2>
              <p className="text-lg mb-8 max-w-xs text-center leading-relaxed h-[84px] flex items-start">
                Where Mediterranean Flavours Meet Melbourne Soul
              </p>
              <button
                onClick={() => onNavigate('menu')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium transition-colors duration-300"
              >
                Menu
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative h-[600px] bg-cover bg-center overflow-hidden group"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800)',
          }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-white">
            <div className="flex flex-col items-center">
              <h2 className="text-5xl font-bold mb-4">Europa Pizza</h2>
              <p className="text-lg mb-8 max-w-xs text-center leading-relaxed h-[84px] flex items-start">
                Not all works of art are to just to be admired, Some are to be eaten. Europa Pizza
              </p>
              <button
                onClick={() => onNavigate('menu')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium transition-colors duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative h-[600px] bg-cover bg-center overflow-hidden group"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=800)',
          }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-white">
            <div className="flex flex-col items-center">
              <h2 className="text-5xl font-bold mb-4">Catering</h2>
              <p className="text-lg mb-8 max-w-xs text-center leading-relaxed h-[84px] flex items-start">
                From intimate gatherings to large corporate events, we offer a range of catering services to meet your needs
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium transition-colors duration-300"
              >
                Caterly
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative h-[600px] bg-cover bg-center overflow-hidden group"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800)',
          }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-white">
            <div className="flex flex-col items-center">
              <h2 className="text-5xl font-bold mb-4">Events</h2>
              <p className="text-lg mb-8 max-w-xs text-center leading-relaxed h-[84px] flex items-start">
                Discover the amenities that make Tarator Café the perfect choice for your next event.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 font-medium transition-colors duration-300"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
