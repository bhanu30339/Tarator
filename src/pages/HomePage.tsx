import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [activeTab, setActiveTab] = useState('traditional');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const menuItems = {
    traditional: [
      {
        name: 'Margherita',
        description: 'Salsa di Pomodoro, Sliced Roasted Pumpkin, Fior di Latte, Rocket, Goat cheese & Roasted Pine nuts.Tomato, mozzarella,...',
        price: '$9.50',
        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Pepperoni',
        description: 'Salsa di Pomodoro, Sliced Roasted Pumpkin, Fior di Latte, Rocket, Goat cheese & Roasted Pine nuts.Tomato, mozzarella,...',
        price: '$11.00',
        image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'BBQ Chicken',
        description: 'Salsa di Pomodoro, Sliced Roasted Pumpkin, Fior di Latte, Rocket, Goat cheese & Roasted Pine nuts.BBQ sauce, chicken,...',
        price: '$12.50',
        image: 'https://images.pexels.com/photos/7353366/pexels-photo-7353366.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Truffle Funghi',
        description: 'Salsa di Pomodoro, Sliced Roasted Pumpkin, Fior di Latte, Rocket, Goat cheese & Roasted Pine nuts.Truffle oil, mushroom...',
        price: '$13.00',
        image: 'https://images.pexels.com/photos/5949906/pexels-photo-5949906.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Veggie Supreme',
        description: 'Salsa di Pomodoro, Sliced Roasted Pumpkin, Fior di Latte, Rocket, Goat cheese & Roasted Pine nuts.Peppers, olives, onions',
        price: '$10.50',
        image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Four Cheese',
        description: 'Salsa di Pomodoro, Sliced Roasted Pumpkin, Fior di Latte, Rocket, Goat cheese & Roasted Pine nuts.Mozzarella, cheddar',
        price: '$12.00',
        image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Crispy Wings',
        description: 'Salsa di Pomodoro, Sliced Roasted Pumpkin, Fior di Latte, Rocket, Goat cheese & Roasted Pine nuts.Crispy and juicy',
        price: '$7.00',
        image: 'https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Cola',
        description: 'Salsa di Pomodoro, Sliced Roasted Pumpkin, Fior di Latte, Rocket, Goat cheese & Roasted Pine nuts.Chilled',
        price: '$2.50',
        image: 'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
    signature: [
      {
        name: 'Mediterranean Delight',
        description: 'Olives, feta, sundried tomatoes, herbs, premium mozzarella on artisan base',
        price: '$14.50',
        image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Lamb Kofta Pizza',
        description: 'Spiced lamb, tahini drizzle, fresh herbs, rocket on wood-fired base',
        price: '$15.00',
        image: 'https://images.pexels.com/photos/12737659/pexels-photo-12737659.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
  };

  const galleryImages = [
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const testimonials = [
    {
      name: 'Alex',
      text: 'Crispy crust, fresh toppings. Loved it!',
    },
    {
      name: 'Jordan',
      text: 'Best pizza in town. Quick delivery!',
    },
    {
      name: 'Sam',
      text: 'Flavorful and satisfying.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const currentItems = activeTab === 'traditional' ? menuItems.traditional : menuItems.signature;

  return (
    <div className="bg-white">
      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl text-primary mb-4">
              Our <span className=" italic accent-text">Menu</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Crafted with passion, enjoyed in every bite. Taste the difference!
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`pb-4 px-2 text-lg transition-colors relative ${
                activeTab === 'traditional'
                  ? 'text-primary font-medium'
                  : 'text-gray-400'
              }`}
            >
              Traditional Selection
              {activeTab === 'traditional' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('signature')}
              className={`pb-4 px-2 text-lg transition-colors relative ${
                activeTab === 'signature'
                  ? 'text-primary font-medium'
                  : 'text-gray-400'
              }`}
            >
              Signature Selection
              {activeTab === 'signature' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
              )}
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      {item.price}
                    </span>
                    <button className="text-accent hover:text-primary transition-colors">
                      View Product »
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={() => onNavigate('menu')} className="btn-primary">
              View All »
            </button>
          </div>
        </div>
      </section>

      {/* Why We're The Best Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-4xl text-primary mb-4">
              Why we're <span className="italic accent-text">the best</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              At Tarator, we draw inspiration from the Mediterranean's rich history and flavors. Our name comes from the legendary tradition of authentic cuisine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-gray-200">
              <h3 className="text-3xl font-bold text-primary mb-2">
                Legendary
              </h3>
              <h4 className="text-2xl accent-text mb-6">
                Mediterranean Flavor
              </h4>
              <p className="text-secondary leading-relaxed mb-8">
                We blend the bold, sun-kissed flavors of the Mediterranean with recipes inspired by the ancient tale of tradition. Every dish is a harmony of tradition, legend, and the finest ingredients.
              </p>
              <div className="border-t border-accent opacity-30 pt-4">
                <div className="h-4 bg-accent opacity-20" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, #C44536 8px, #C44536 10px)'
                }}></div>
              </div>
            </div>

            <div className="bg-white p-10 border border-gray-200">
              <h3 className="text-3xl font-bold text-primary mb-2">
                Crafted for
              </h3>
              <h4 className="text-2xl accent-text mb-6">
                Pure Taste
              </h4>
              <p className="text-secondary leading-relaxed mb-8">
                We blend the bold, sun-kissed flavors of the Mediterranean with recipes inspired by the ancient tale of tradition. Every dish is a harmony of tradition, legend, and the finest ingredients.
              </p>
              <div className="border-t border-accent opacity-30 pt-4">
                <div className="h-4 bg-accent opacity-20" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, #C44536 8px, #C44536 10px)'
                }}></div>
              </div>
            </div>

            <div className="bg-white p-10 border border-gray-200">
              <h3 className="text-3xl font-bold text-primary mb-2">
                Service That
              </h3>
              <h4 className="text-2xl accent-text mb-6">
                Feels Like Home
              </h4>
              <p className="text-secondary leading-relaxed mb-8">
                We blend the bold, sun-kissed flavors of the Mediterranean with recipes inspired by the ancient tale of tradition. Every dish is a harmony of tradition, legend, and the finest ingredients.
              </p>
              <div className="border-t border-accent opacity-30 pt-4">
                <div className="h-4 bg-accent opacity-20" style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, #C44536 8px, #C44536 10px)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-4xl  text-primary mb-4">
              See <span className="italic accent-text">What's Cooking</span>
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Here's a peek at what we've been baking — pizzas, pastas, and smiles fresh from our kitchen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setGalleryIndex(Math.max(0, galleryIndex - 1))}
              className="w-12 h-12 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setGalleryIndex(Math.min(2, galleryIndex + 1))}
              className="w-12 h-12 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-4xl text-primary mb-4">
              Our Customers
            </h2>
            <h3 className="text-3xl italic accent-text">
              can't get enough of us.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-10 border border-gray-200"
              >
                <div className="text-6xl text-accent opacity-30 mb-4">"</div>
                <p className="text-secondary text-lg mb-8 leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="font-bold text-primary text-xl">{testimonial.name}</p>
                <div className="border-t border-accent opacity-30 mt-6 pt-4">
                  <div className="h-4 bg-accent opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, #C44536 8px, #C44536 10px)'
                  }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button className="w-12 h-12 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className=" min-h-screen pt-8">
        <div
          className="relative h-80 bg-center mb-8"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-black">
              <h1 className="text-4xl md:text-4xl mb-4">Contact Us</h1>
              <p className="text-xl">We'd Love to Hear From You</p>
            </div>
          </div>
        </div>

        <div className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        Address
                      </h3>
                      <p className="text-secondary">
                        123 Mediterranean Lane<br />
                        Sydney, NSW 2000<br />
                        Australia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        Phone
                      </h3>
                      <p className="text-secondary">+61 2 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        Email
                      </h3>
                      <p className="text-secondary">hello@tarator.com.au</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        Opening Hours
                      </h3>
                      <p className="text-secondary">
                        Monday - Friday: 11:00 AM - 10:00 PM<br />
                        Saturday - Sunday: 10:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-2xl">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Book a Table
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                    Thank you! We'll contact you soon to confirm your reservation.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-primary font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors"
                      placeholder="+61 2 1234 5678"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-primary font-medium mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-primary font-medium mb-2">
                        Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-2">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-primary font-medium mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Any dietary requirements or special occasions?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-center"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>

            <div className="h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.694881401849!2d151.20929931521054!3d-33.86882098065158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632bfc0!2sCircular%20Quay%2C%20Sydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}