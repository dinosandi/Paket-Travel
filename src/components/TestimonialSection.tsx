// src/components/TestimonialSection.tsx
import { useRef, useEffect } from 'react';

// Import gambar latar belakang baru
import testimonialBg from '../assets/bg.jpg'; // Ganti dengan path gambar Anda yang sesuai

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  avatar: string; // URL avatar
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, title, avatar }) => {
  return (
    <div className="flex-none w-80 md:w-96 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center mx-4 my-2"> {/* Added flex-none, width, and margin */}
      <img
        src={avatar}
        alt={author}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200"
      />
      <p className="text-lg text-white mb-6 italic">"{quote}"</p>
      <h4 className="text-xl font-bold text-white">{author}</h4>
      <p className="text-white text-sm">{title}</p> {/* Added text-blue-600 and text-sm */}
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Perjalanan dengan Daily Travel sungguh luar biasa! Semuanya terorganisir dengan sempurna dan pemandangan yang disajikan tak terlupakan.",
      author: "Ananda Putri",
      title: "Petualang",
      avatar: "https://i.pinimg.com/736x/d7/a7/61/d7a761f988ccb4131ddc15a19844bc52.jpg"
    },
    {
      quote: "Saya tidak pernah menyangka liburan bisa semenyenangkan ini. Tim Daily Travel sangat profesional dan ramah. Highly recommended!",
      author: "Bunga Lestari",
      title: "Wisatawan",
      avatar: "https://i.pinimg.com/736x/10/d3/74/10d374f94b1e73a8ec94a24c4ac4e92a.jpg"
    },
    {
      quote: "Dari pemesanan hingga kembali ke rumah, pengalaman saya dengan Daily Travel mulus dan bebas repot. Destinasi yang dipilih juga sangat memukau.",
      author: "Cahyo Wijoyo",
      title: "Pebisnis",
      avatar: "https://i.pinimg.com/736x/e2/d4/a1/e2d4a1924b2e3e0044ee09cb5f94e33d.jpg"
    },
    {
        quote: "Pelayanan pelanggan yang sangat responsif dan membantu. Saya merasa aman dan nyaman sepanjang perjalanan.",
        author: "Dewi Permata",
        title: "Travel Blogger",
        avatar: "https://i.pinimg.com/736x/8a/a5/d0/8aa5d023b378c8571477f15e87178c77.jpg"
    },
    {
        quote: "Pilihan paket wisata yang sangat beragam, cocok untuk segala jenis petualang. Akan menggunakan Daily Travel lagi!",
        author: "Eko Prasetyo",
        title: "Backpacker",
        avatar: "https://i.pinimg.com/736x/f6/52/ce/f652ce6515a2f5f1c3f2b4e87010e6a2.jpg"
    },
    {
        quote: "Tempat-tempat yang direkomendasikan sangat indah dan belum banyak terjamah. Pengalaman otentik yang saya cari.",
        author: "Fira Kusuma",
        title: "Penjelajah",
        avatar: "https://i.pinimg.com/736x/a2/3e/2d/a23e2d6b3e9a0e6b5e0c5d6c8b0a9c6c.jpg"
    },
    {
        quote: "Daily Travel membuat impian liburan saya menjadi kenyataan. Harga terjangkau dengan kualitas premium.",
        author: "Guntur Hadi",
        title: "Karyawan Swasta",
        avatar: "https://i.pinimg.com/736x/4d/9c/e8/4d9ce8a6e8b5d7d9f7a7d9b9a6b1c4b1.jpg"
    },
    {
        quote: "Kami sekeluarga sangat menikmati perjalanan ini. Fasilitas lengkap dan pemandu wisata yang sangat berpengetahuan.",
        author: "Hanafitri",
        title: "Ibu Rumah Tangga",
        avatar: "https://i.pinimg.com/736x/c0/8b/f6/c08bf6d5a1b02b9e6e1d2c6c0b3d6a6a.jpg"
    },
    {
        quote: "Pengalaman yang tak terlupakan! Daily Travel benar-benar memahami apa yang dibutuhkan seorang petualang.",
        author: "Iqbal Ramadhan",
        title: "Fotografer",
        avatar: "https://i.pinimg.com/736x/11/4a/b7/114ab73a1b5c4f2e3e5c9b7e7c5a7b0d.jpg"
    },
    {
        quote: "Sangat direkomendasikan untuk siapa saja yang mencari petualangan baru. Terima kasih Daily Travel!",
        author: "Jihan Putri",
        title: "Mahasiswa",
        avatar: "https://i.pinimg.com/736x/1d/a3/e5/1da3e5d0d8f0f0c0f9a2f7c0a9e7f8e8.jpg"
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    const scrollSpeed = 0.5; // Kecepatan scroll dalam piksel per interval
    const intervalTime = 20; // Waktu interval dalam milidetik

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1) {
          // Jika sudah mencapai akhir, kembali ke awal dengan animasi
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }, intervalTime);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    // Mulai scroll otomatis saat komponen di-mount
    startScrolling();

    // Hentikan scroll saat mouse masuk, lanjutkan saat mouse keluar
    scrollContainer.addEventListener('mouseenter', stopScrolling);
    scrollContainer.addEventListener('mouseleave', startScrolling);

    // Cleanup interval saat komponen di-unmount
    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', stopScrolling);
      scrollContainer.removeEventListener('mouseleave', startScrolling);
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="relative py-20 px-6 md:px-12 text-gray-800 overflow-hidden"
      style={{ backgroundImage: `url(${testimonialBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay untuk membuat teks lebih mudah dibaca */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <span className="text-blue-400 font-semibold uppercase tracking-wider mb-2 block">WHAT OUR CLIENTS SAY</span>
        <h2 className="text-4xl font-extrabold text-white mb-12">Hear From Our Happy Travelers</h2>
        
        {/* Scrollable Container */}
        <div 
          ref={scrollRef} 
          className="flex overflow-x-auto scrollbar-hide py-4 snap-x snap-mandatory" // scrollbar-hide memerlukan plugin tailwind, atau styling kustom
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;