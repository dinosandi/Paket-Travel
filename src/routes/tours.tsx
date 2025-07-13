// src/routes/tours.tsx
import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import Footer from '../components/Footer'; // Asumsi Anda punya komponen Footer

// Import gambar contoh untuk tur
import tourImg1 from '../assets/borobudur.jpg';
import tourImg2 from '../assets/bg2.jpg';
import tourImg3 from '../assets/rajaampat.jpg';
import tourImg4 from '../assets/komodo.jpg';
import tourImg5 from '../assets/toba.jpg';
import tourImg6 from '../assets/bg.jpg';
//bg
import Baground from '../assets/rajaampat.jpg';

export const Route = createFileRoute('/tours')({
  component: ToursPage,
});

interface TourPackage {
  id: string;
  name: string;
  image: string;
  price: number;
  duration: string; // e.g., "5 Days / 4 Nights"
  description: string;
  highlights: string[];
}

const tourPackages: TourPackage[] = [
  {
    id: 'borobudur-prambanan',
    name: 'Borobudur & Prambanan Cultural Journey',
    image: tourImg1,
    price: 750,
    duration: '3 Days / 2 Nights',
    description: 'Explore the majestic Borobudur Temple at sunrise and the ancient Prambanan Temple. Immerse yourself in Javanese culture and history.',
    highlights: ['Sunrise at Borobudur', 'Prambanan Temple exploration', 'Local village visit', 'Traditional dance show'],
  },
  {
    id: 'bromo-ijen-adventure',
    name: 'Mount Bromo & Ijen Crater Expedition',
    image: tourImg2,
    price: 980,
    duration: '4 Days / 3 Nights',
    description: 'An exhilarating adventure to witness the stunning sunrise over Mount Bromo and the mystical blue flames of Ijen Crater.',
    highlights: ['Bromo sunrise jeep tour', 'Ijen blue fire trek', 'Coffee plantation visit', 'Madakaripura Waterfall'],
  },
  {
    id: 'raja-ampat-diving',
    name: 'Raja Ampat Underwater Paradise',
    image: tourImg3,
    price: 2500,
    duration: '7 Days / 6 Nights',
    description: 'Dive into the world\'s richest marine biodiversity. A dream destination for divers and snorkelers alike.',
    highlights: ['Multiple dive spots', 'Island hopping (Wayag, Pianemo)', 'Snorkeling with manta rays', 'Local homestay experience'],
  },
  {
    id: 'komodo-dragon-trek',
    name: 'Komodo Island & Pink Beach Cruise',
    image: tourImg4,
    price: 1200,
    duration: '3 Days / 2 Nights',
    description: 'Encounter the legendary Komodo dragons in their natural habitat and relax on the unique Pink Beach.',
    highlights: ['Komodo National Park', 'Pink Beach snorkeling', 'Padar Island trekking', 'Manta Point dive/snorkel'],
  },
  {
    id: 'lake-toba-samosir',
    name: 'Lake Toba & Samosir Island Escape',
    image: tourImg5,
    price: 650,
    duration: '4 Days / 3 Nights',
    description: 'Discover the immense beauty of Lake Toba, the largest volcanic lake, and the unique Batak culture on Samosir Island.',
    highlights: ['Cruise Lake Toba', 'Visit Batak villages', 'Hot springs at Pangururan', 'Traditional crafts'],
  },
  {
    id: 'bali-cultural-retreat',
    name: 'Bali Spiritual & Cultural Retreat',
    image: tourImg6,
    price: 850,
    duration: '5 Days / 4 Nights',
    description: 'Immerse yourself in the serene and spiritual side of Bali, exploring ancient temples, lush rice terraces, and vibrant arts.',
    highlights: ['Ubud Monkey Forest', 'Tegallalang Rice Terraces', 'Tirta Empul Temple', 'Balinese cooking class', 'Yoga & Meditation sessions'],
  },
];

function ToursPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [durationFilter, setDurationFilter] = useState('');

  const filteredPackages = tourPackages.filter(pkg => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pkg.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pkg.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesMinPrice = minPrice === '' || pkg.price >= Number(minPrice);
    const matchesMaxPrice = maxPrice === '' || pkg.price <= Number(maxPrice);
    const matchesDuration = durationFilter === '' || pkg.duration.includes(durationFilter);

    return matchesSearch && matchesMinPrice && matchesMaxPrice && matchesDuration;
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="relative py-24 text-white text-center"
      style={{ backgroundImage: `url(${Baground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">Discover Our Amazing Tour Packages</h1>
          <p className="text-xl opacity-90 animate-fadeInUp delay-200">Find your perfect adventure with our curated selection of tours.</p>
        </div>
      </header>

      <main className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Filter Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12 animate-fadeInUp delay-400">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search by Keyword</label>
              <input
                type="text"
                id="search"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Bali, diving, sunrise"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-2">Min Price ($)</label>
              <input
                type="number"
                id="minPrice"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value === '' ? '' : Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-2">Max Price ($)</label>
              <input
                type="number"
                id="maxPrice"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select
                id="duration"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white"
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
              >
                <option value="">Any</option>
                <option value="3 Days">3 Days</option>
                <option value="4 Days">4 Days</option>
                <option value="5 Days">5 Days</option>
                <option value="7 Days">7 Days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tour Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }} // Stagger animation
              >
                <img src={pkg.image} alt={pkg.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-blue-600 text-lg font-semibold mb-3">${pkg.price} / person</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{pkg.description}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <svg className="w-5 h-5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    <span>{pkg.duration}</span>
                  </div>
                  <ul className="text-gray-700 text-sm list-disc pl-5 mb-4">
                    {pkg.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                  <Link
                    to="/contact" // Mengarahkan ke halaman kontak untuk booking
                    className="block w-full text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg">No tour packages found matching your criteria.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}