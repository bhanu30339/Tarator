interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="relative z-10 text-center container-custom py-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-primary leading-tight">
          Fresh. <span className="accent-text">FlavourFul.</span> Unforgettable.
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto">
          Crafted with passion, enjoyed in every bite. Taste the difference!
        </p>

        <button
          onClick={() => onNavigate('menu')}
          className="btn-primary"
        >
          Order Now »
        </button>
      </div>
    </section>
  );
}
