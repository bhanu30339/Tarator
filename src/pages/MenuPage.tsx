export default function MenuPage() {
  const menuCategories = [
    {
      category: 'Starters',
      items: [
        {
          name: 'Mezze Platter',
          description: 'Hummus, baba ganoush, tzatziki, olives, and warm pita',
          price: '$28',
          image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Falafel',
          description: 'Crispy chickpea fritters with tahini sauce',
          price: '$16',
          image: 'https://images.pexels.com/photos/6275166/pexels-photo-6275166.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Spanakopita',
          description: 'Flaky phyllo pastry filled with spinach and feta',
          price: '$18',
          image: 'https://images.pexels.com/photos/8753673/pexels-photo-8753673.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Calamari',
          description: 'Lightly fried squid with lemon and aioli',
          price: '$22',
          image: 'https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
    {
      category: 'Mains',
      items: [
        {
          name: 'Grilled Lamb Kofta',
          description: 'Spiced lamb skewers with rice pilaf and tahini',
          price: '$32',
          image: 'https://images.pexels.com/photos/12737659/pexels-photo-12737659.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Mediterranean Sea Bass',
          description: 'Grilled whole sea bass with herbs, lemon, and vegetables',
          price: '$38',
          image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Moussaka',
          description: 'Layered eggplant, lamb, and béchamel sauce',
          price: '$28',
          image: 'https://images.pexels.com/photos/5949903/pexels-photo-5949903.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Chicken Souvlaki',
          description: 'Marinated chicken skewers with Greek salad and pita',
          price: '$26',
          image: 'https://images.pexels.com/photos/7353366/pexels-photo-7353366.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Seafood Paella',
          description: 'Spanish rice with prawns, mussels, and calamari',
          price: '$36',
          image: 'https://images.pexels.com/photos/16743486/pexels-photo-16743486.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Vegetarian Tagine',
          description: 'Moroccan spiced vegetables with couscous',
          price: '$24',
          image: 'https://images.pexels.com/photos/5949906/pexels-photo-5949906.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
    {
      category: 'Desserts',
      items: [
        {
          name: 'Baklava',
          description: 'Layers of phyllo with honey, pistachios, and walnuts',
          price: '$12',
          image: 'https://images.pexels.com/photos/17742866/pexels-photo-17742866.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Greek Yogurt Parfait',
          description: 'Thick yogurt with honey, nuts, and fresh berries',
          price: '$10',
          image: 'https://images.pexels.com/photos/1435903/pexels-photo-1435903.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Kunefe',
          description: 'Shredded phyllo dessert with cheese and syrup',
          price: '$14',
          image: 'https://images.pexels.com/photos/11794896/pexels-photo-11794896.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Tiramisu',
          description: 'Classic Italian coffee-soaked dessert',
          price: '$13',
          image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
    {
      category: 'Beverages',
      items: [
        {
          name: 'Turkish Coffee',
          description: 'Traditional strong coffee with cardamom',
          price: '$6',
          image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Fresh Mint Tea',
          description: 'Moroccan-style mint green tea',
          price: '$5',
          image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'House Wine',
          description: 'Selection of Mediterranean wines (glass)',
          price: '$12',
          image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
        {
          name: 'Fresh Lemonade',
          description: 'House-made with mint and rose water',
          price: '$7',
          image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=400',
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      <div className="bg-cream py-20">
        <div className="container-custom text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Our <span className="accent-text">Menu</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">Authentic Mediterranean Flavors</p>
        </div>
      </div>

      <div className="container-custom py-20">
        {menuCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-20">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-48 h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-primary">
                            {item.name}
                          </h3>
                          <span className="text-2xl font-bold text-accent ml-4">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-secondary leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <button className="text-accent hover:text-primary transition-colors mt-4 text-left">
                        View Product »
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
