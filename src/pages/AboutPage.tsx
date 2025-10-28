import { Users, Award, Globe, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-24">
      <div
        className="relative h-96 bg-cover bg-center mb-16"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
            <p className="text-xl">A Journey Through Mediterranean Tradition</p>
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="slide-up">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Where It All Began
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Tarator Australia was born from a deep love for Mediterranean cuisine and a desire to bring authentic flavors to Sydney. Our founders, having spent years traveling through Greece, Turkey, Morocco, and Spain, were inspired by the rich culinary traditions and warm hospitality of the region.
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                In 2018, we opened our doors with a simple mission: to create a dining experience that transports our guests to the sun-drenched shores of the Mediterranean. Every recipe has been carefully curated, tested, and perfected to honor the traditions we've come to love.
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                Today, we continue to source the finest ingredients, work with passionate artisans, and share the joy of Mediterranean cuisine with our community.
              </p>
            </div>
            <div className="slide-up">
              <img
                src="https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef preparing food"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="slide-up order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="slide-up order-1 md:order-2">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Philosophy
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                At Tarator, we believe that great food is more than sustenance. It's an experience that brings people together, creates memories, and celebrates culture. Our philosophy is rooted in three core principles:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Authenticity
                    </h3>
                    <p className="text-secondary">
                      We honor traditional recipes and cooking methods passed down through generations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Quality
                    </h3>
                    <p className="text-secondary">
                      Only the finest, freshest ingredients make it onto our plates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Community
                    </h3>
                    <p className="text-secondary">
                      We create a welcoming space where everyone feels at home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Commitment
              </h2>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                We are committed to sustainability and supporting local producers. Wherever possible, we source ingredients from Australian farmers and suppliers who share our values of quality and environmental responsibility.
              </p>
              <p className="text-secondary text-lg leading-relaxed mb-4">
                Our kitchen operates with a zero-waste philosophy, composting organic materials and minimizing single-use plastics. We believe in leaving the world better than we found it.
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                Beyond our environmental efforts, we're proud to support our local community through partnerships with charities and community programs, because good food should be accessible to all.
              </p>
            </div>
            <div className="slide-up">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh ingredients"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Passion
              </h3>
              <p className="text-secondary">
                We pour our heart into every dish we create
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Excellence
              </h3>
              <p className="text-secondary">
                Unwavering commitment to culinary perfection
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Heritage
              </h3>
              <p className="text-secondary">
                Honoring Mediterranean traditions and culture
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Togetherness
              </h3>
              <p className="text-secondary">
                Building connections through shared meals
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
