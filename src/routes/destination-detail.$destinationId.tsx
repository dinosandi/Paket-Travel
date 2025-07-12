// src/routes/destination-detail.$destinationId.tsx
import { createFileRoute, notFound, Link } from '@tanstack/react-router';
import React from 'react';
import Footer from '../components/Footer'; // Asumsi Anda punya komponen Footer

// Import gambar destinasi
import borobudurImg from '../assets/borobudur.jpg';
import bromoImg from '../assets/bg2.jpg';
import rajaAmpatImg from '../assets/rajaampat.jpg';
import ubudImg from '../assets/bg.jpg';
import komodoImg from '../assets/komodo.jpg';
import tobaImg from '../assets/toba.jpg';

export const Route = createFileRoute('/destination-detail/$destinationId')({
  component: DestinationDetailPage,
  loader: ({ params }) => {
    const destination = destinationsData.find(d => d.id === params.destinationId);
    if (!destination) {
      throw notFound();
    }
    return { destination };
  },
  // Untuk penanganan error 404
  errorComponent: () => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6 text-center">
      <h1 className="text-4xl font-extrabold mb-4">404 - Destination Not Found</h1>
      <p className="text-lg mb-8">Sorry, the destination you are looking for does not exist.</p>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
        Go to Home
      </Link>
      <Footer />
    </div>
  ),
});

interface Destination {
  id: string;
  name: string;
  image: string; // Main image
  description: string;
  longDescription: string;
  gallery: string[]; // Array of image URLs for gallery
  activities: string[];
  bestTime: string;
  location: string;
  mapLink: string; // Google Maps link
  relatedTours: { id: string; name: string }[]; // Optional: link to related tours
}

// Data dummy destinasi
const destinationsData: Destination[] = [
  {
    id: 'borobudur-temple',
    name: 'Borobudur Temple',
    image: borobudurImg,
    description: 'Candi Buddha terbesar di dunia, sebuah mahakarya arsitektur kuno dan situs warisan dunia UNESCO di Magelang, Jawa Tengah.',
    longDescription: 'Borobudur adalah candi Buddha terbesar di dunia, dibangun pada abad ke-9 dan merupakan salah satu keajaiban arsitektur kuno. Terdiri dari sembilan platform bertumpuk, enam persegi dan tiga melingkar, dan diatapi oleh sebuah kubah sentral, candi ini dihiasi dengan lebih dari 2.672 panel relief dan 504 patung Buddha. Pengunjung sering datang saat fajar untuk menyaksikan matahari terbit yang memukau di balik stupa-stupa, menciptakan pengalaman spiritual yang tak terlupakan. Ini adalah situs warisan dunia UNESCO yang menjadi pusat peziarahan Buddha.',
    gallery: [borobudurImg, tobaImg, bromoImg], // Contoh lebih banyak gambar
    activities: ['Sunrise viewing', 'Exploring relief panels', 'Meditation', 'Visiting nearby villages'],
    bestTime: 'May to September (dry season)',
    location: 'Magelang, Central Java',
    mapLink: 'https://maps.app.goo.gl/YourBorobudurMapLink',
    relatedTours: [{ id: 'borobudur-prambanan', name: 'Borobudur & Prambanan Cultural Journey' }],
  },
  {
    id: 'mount-bromo',
    name: 'Mount Bromo',
    image: bromoImg,
    description: 'Gunung berapi aktif yang ikonik di Jawa Timur, terkenal dengan pemandangan matahari terbit yang spektakuler.',
    longDescription: 'Gunung Bromo adalah salah satu gunung berapi paling ikonik di Indonesia, terkenal dengan pemandangan matahari terbitnya yang spektakuler di atas lautan pasir dan kawahnya yang berasap. Terletak di Taman Nasional Bromo Tengger Semeru, pengunjung biasanya memulai pendakian dini hari untuk mencapai titik pandang Penanjakan, menikmati panorama kaldera Tengger yang luas dengan Gunung Semeru yang menjulang di kejauhan. Pengalaman ini menawarkan keindahan alam yang dramatis dan tak tertandingi.',
    gallery: [bromoImg, borobudurImg, rajaAmpatImg],
    activities: ['Sunrise trekking', 'Jeep tour across sand sea', 'Crater ascent', 'Horse riding'],
    bestTime: 'April to October (dry season)',
    location: 'East Java',
    mapLink: 'https://maps.app.goo.gl/YourBromoMapLink',
    relatedTours: [{ id: 'bromo-ijen-adventure', name: 'Mount Bromo & Ijen Crater Expedition' }],
  },
  {
    id: 'raja-ampat',
    name: 'Raja Ampat',
    image: rajaAmpatImg,
    description: 'Surga bawah laut di Papua Barat, dikenal sebagai salah satu pusat keanekaragaman hayati laut terkaya di dunia.',
    longDescription: 'Raja Ampat, terletak di Papua Barat, adalah surga tropis yang terkenal dengan keanekaragaman hayati lautnya yang luar biasa, menjadikannya salah satu tujuan menyelam dan snorkeling terbaik di dunia. Kepulauan ini terdiri dari lebih dari 1.500 pulau kecil, tebing batu kapur, dan teluk tersembunyi. Perairannya yang jernih adalah rumah bagi ribuan spesies ikan, karang, dan makhluk laut lainnya, menawarkan pengalaman bawah laut yang tak tertandingi bagi para penyelam dan peneliti.',
    gallery: [rajaAmpatImg, ubudImg, komodoImg],
    activities: ['Scuba diving', 'Snorkeling', 'Island hopping', 'Kayaking', 'Bird watching'],
    bestTime: 'October to April',
    location: 'West Papua',
    mapLink: 'https://maps.app.goo.gl/YourRajaAmpatMapLink',
    relatedTours: [{ id: 'raja-ampat-diving', name: 'Raja Ampat Underwater Paradise' }],
  },
  {
    id: 'ubud-bali',
    name: 'Ubud, Bali',
    image: ubudImg,
    description: 'Jantung budaya Bali dengan sawah terasering yang indah, seni tradisional, yoga retreat, dan suasana yang tenang.',
    longDescription: 'Ubud adalah pusat seni dan budaya Bali, dikelilingi oleh sawah terasering yang hijau subur dan hutan lebat. Kota ini dikenal sebagai tempat yang sempurna untuk yoga dan meditasi, dengan banyak studio dan retreat yang menawarkan pengalaman holistik. Pengunjung dapat menjelajahi galeri seni, pasar tradisional, melihat pertunjukan tari Bali, dan berinteraksi dengan monyet-monyet di Monkey Forest. Ubud menawarkan suasana yang tenang dan inspiratif, jauh dari keramaian pantai.',
    gallery: [ubudImg, borobudurImg, tobaImg],
    activities: ['Yoga & Meditation', 'Cooking classes', 'Art market shopping', 'Rice terrace trekking', 'Monkey Forest visit'],
    bestTime: 'April to October (dry season)',
    location: 'Bali',
    mapLink: 'https://maps.app.goo.gl/YourUbudMapLink',
    relatedTours: [{ id: 'bali-cultural-retreat', name: 'Bali Spiritual & Cultural Retreat' }],
  },
  {
    id: 'komodo-island',
    name: 'Komodo Island',
    image: komodoImg,
    description: 'Habitat alami Komodo, kadal terbesar di dunia. Pulau ini juga menawarkan pantai pink yang unik.',
    longDescription: 'Pulau Komodo adalah rumah bagi kadal terbesar di dunia, Komodo, dan merupakan bagian dari Taman Nasional Komodo yang terdaftar sebagai Situs Warisan Dunia UNESCO. Selain bertemu dengan naga purba ini, pulau ini menawarkan pemandangan alam yang menakjubkan, termasuk Pantai Pink yang ikonik, salah satu dari sedikit pantai berpasir merah muda di dunia. Perairan di sekitarnya kaya akan kehidupan laut, menjadikannya tempat yang luar biasa untuk snorkeling dan menyelam.',
    gallery: [komodoImg, rajaAmpatImg, bromoImg],
    activities: ['Komodo dragon trekking', 'Pink Beach snorkeling/relaxing', 'Padar Island viewpoint hike', 'Manta ray spotting'],
    bestTime: 'April to December',
    location: 'East Nusa Tenggara',
    mapLink: 'https://maps.app.goo.gl/YourKomodoMapLink',
    relatedTours: [{ id: 'komodo-dragon-trek', name: 'Komodo Island & Pink Beach Cruise' }],
  },
  {
    id: 'lake-toba',
    name: 'Lake Toba',
    image: tobaImg,
    description: 'Danau vulkanik terbesar di dunia, terletak di Sumatera Utara. Dikelilingi perbukitan hijau.',
    longDescription: 'Danau Toba, sebuah danau kaldera vulkanik raksasa di Sumatera Utara, adalah danau terbesar di Indonesia dan salah satu danau terdalam di dunia. Di tengah danau terdapat Pulau Samosir, sebuah pulau vulkanik yang luas dengan budaya Batak yang kaya dan pemandangan yang indah. Danau ini menawarkan suasana yang tenang dan udara segar, sempurna untuk relaksasi dan menjelajahi tradisi lokal, termasuk rumah adat Batak dan makam raja-raja kuno.',
    gallery: [tobaImg, borobudurImg, ubudImg],
    activities: ['Boat trip on the lake', 'Exploring Samosir Island', 'Visiting Batak villages (Tomok, Simanindo)', 'Hot springs'],
    bestTime: 'May to September',
    location: 'North Sumatra',
    mapLink: 'https://maps.app.goo.gl/YourLakeTobaMapLink',
    relatedTours: [{ id: 'lake-toba-samosir', name: 'Lake Toba & Samosir Island Escape' }],
  },
];


function DestinationDetailPage() {
  const { destination } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-6 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">{destination.name}</h1>
            <p className="text-xl md:text-2xl font-light">{destination.description}</p>
          </div>
        </div>
      </header>

      <main className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Overview Section */}
        <section className="bg-white p-8 rounded-lg shadow-xl mb-12 animate-slideInUp">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{destination.longDescription}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Location</h3>
              <p className="text-gray-700">{destination.location}</p>
              <a href={destination.mapLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 block">View on Map</a>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Best Time to Visit</h3>
              <p className="text-gray-700">{destination.bestTime}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Main Activities</h3>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {destination.activities.slice(0, 3).map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
                {destination.activities.length > 3 && <li>...and more!</li>}
              </ul>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-12 animate-fadeIn delay-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.gallery.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${destination.name} - Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </section>

        {/* Related Tours (Optional) */}
        {destination.relatedTours && destination.relatedTours.length > 0 && (
          <section className="mb-12 animate-fadeIn delay-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">Related Tour Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.relatedTours.map((tour, index) => (
                <Link
                  key={index}
                  to="/tours" // Anda bisa membuat rute detail tur jika ada
                  className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v8a1 1 0 001.555.832l6.25-4a1 1 0 000-1.664l-6.25-4z" clipRule="evenodd"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{tour.name}</h3>
                    <p className="text-gray-600 text-sm">Explore this destination with our special package!</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="text-center mt-12 animate-fadeIn delay-400">
          <Link
            to="/tours"
            className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            View All Tour Packages
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}