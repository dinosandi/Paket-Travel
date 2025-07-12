// src/components/VideoDestinations.tsx
import React, { useState, useEffect, useRef } from 'react';

interface VideoDestinationProps {
  title: string;
  videoUrl: string; // URL video (misal dari YouTube embed)
  description: string;
  delay?: number;
}

const VideoDestinationCard: React.FC<VideoDestinationProps> = ({ title, videoUrl, description, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Fungsi untuk memutar/menghentikan video
  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      ref={cardRef}
      className={`
        bg-white rounded-lg shadow-xl overflow-hidden
        transition-all duration-700 ease-out
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative w-full h-56 bg-gray-200 flex items-center justify-center">
        {/* Menggunakan iframe untuk video YouTube embed */}
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img src={`https://img.youtube.com/vi/${videoUrl.split('/').pop()}/hqdefault.jpg`} alt={`Thumbnail ${title}`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button
                onClick={handlePlayToggle}
                className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                aria-label={`Play video about ${title}`}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v8a1 1 0 001.555.832l6.25-4a1 1 0 000-1.664l-6.25-4z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

const VideoDestinations: React.FC = () => {
  const videoDestinationsData = [
    {
      title: 'Enchanting Bali',
      videoUrl: 'https://www.youtube.com/embed/S2gX7U9qN6U', // Ganti dengan ID video YouTube Anda
      description: 'Explore the serene temples, lush rice paddies, and vibrant culture of Bali.',
    },
    {
      title: 'Romantic Paris',
      videoUrl: 'https://www.youtube.com/embed/5k5eX-g4zEc',
      description: 'Discover the city of love, iconic landmarks like Eiffel Tower, and artistic masterpieces.',
    },
    {
      title: 'Futuristic Tokyo',
      videoUrl: 'https://www.youtube.com/embed/XyWn-H4QG_E',
      description: 'Experience the blend of traditional shrines and neon-lit skyscrapers in Tokyo.',
    },
    {
      title: 'Vibrant New York',
      videoUrl: 'https://www.youtube.com/embed/rkTjB9eNnJ8',
      description: 'The city that never sleeps, offering world-class entertainment and diverse cultures.',
    },
    {
      title: 'Stunning Sydney',
      videoUrl: 'https://www.youtube.com/embed/fD1t-1iU_68',
      description: 'From the Opera House to beautiful beaches, Sydney is a city of dreams.',
    },
    {
      title: 'Ancient Rome',
      videoUrl: 'https://www.youtube.com/embed/d3_1C_Q07qY',
      description: 'Walk through history with iconic Roman ruins and delicious Italian cuisine.',
    },
    {
      title: 'Cosmopolitan Dubai',
      videoUrl: 'https://www.youtube.com/embed/S0j9b43_A0w',
      description: 'A luxurious desert oasis with futuristic architecture and grand shopping malls.',
    },
    {
      title: 'Mystical Egypt',
      videoUrl: 'https://www.youtube.com/embed/yQ_s3G75t9k',
      description: 'Unravel the mysteries of ancient pyramids and the majestic Nile River.',
    },
  ];

  return (
    <section id="video-destinations" className="py-20 px-6 md:px-12 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Discover with Video</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {videoDestinationsData.map((dest, index) => (
            <VideoDestinationCard
              key={index}
              title={dest.title}
              videoUrl={dest.videoUrl}
              description={dest.description}
              delay={index * 100} // Staggered animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoDestinations; // Ekspor sebagai default