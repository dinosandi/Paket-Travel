// src/routes/home.tsx
import { createFileRoute, Link } from '@tanstack/react-router';
import { useState, useEffect, useRef } from 'react';
import useInView from '../hooks/useInView';

// Import assets
import heroVideoBackground from '../assets/laut2.mp4';
import heroIllustration from '../assets/logo.png';

// Partner Logos - Menggunakan aset yang sudah diunggah
import partnerLogo1 from '../assets/borobudur.jpg';
import partnerLogo2 from '../assets/bg.jpg';
import partnerLogo3 from '../assets/bg1.jpg';
import partnerLogo4 from '../assets/bg2.jpg';
import partnerLogo5 from '../assets/borobudur.jpg';
import partnerLogo6 from '../assets/rajaampat.jpg';

// Video untuk Video Showcase
import showcaseVideo from '../assets/travel1.mp4';

// Komponen lainnya
import ServicesPage from '../routes/services';
import Footer from '../components/Footer';
import TestimonialSection from '../components/TestimonialSection';

// Aset untuk About Us section
import aboutUsImg1 from '../assets/borobudur.jpg';
import aboutUsImg2 from '../assets/bg1.jpg';
import aboutUsImg3 from '../assets/bg2.jpg';
import aboutUsImg4 from '../assets/bg.jpg';
import aboutUsImg5 from '../assets/komodo.jpg';
import aboutUsImg6 from '../assets/toba.jpg';
// Komponen DockNavbar
const DockNavbar: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // New state for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '/home#home', label: 'Home', icon: (<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1H11m-9 0h-1a1 1 0 01-1-1v-4a1 1 0 011-1h1m-2 0h16'></path></svg>) },
    { href: '/home#about-us', label: 'About Us', icon: (<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>) },
    { href: '/tours', label: 'Tours', icon: (<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1H11m-9 0h-1a1 1 0 01-1-1v-4a1 1 0 011-1h1m-2 0h16'></path></svg>) },
    { href: '/home#services', label: 'Services', icon: (<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37.522.316 1.15.492 1.724 1.066zM15 12a3 3 0 11-6 0 3 3 0 016 0z'></path></svg>) },
    { href: '/home#video-showcase', label: 'Videos', icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.724v6.552a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 1 0 00-2 2v8a2 2 0 002 2z"></path></svg>) },
    { href: '/contact', label: 'Contact Us', icon: (<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg>) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } py-2 px-4 md:px-6 flex items-center justify-center`}
    >
      <nav className="flex flex-grow justify-center relative">
        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="lg:hidden p-2 rounded-full bg-white bg-opacity-80 backdrop-blur-sm shadow-lg text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          )}
        </button>

        {/* Desktop Navigation (Dock-like) */}
        <div className="hidden lg:flex justify-center space-x-4 md:space-x-8 text-base font-medium bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-gray-700 hover:text-blue-600 transition-all duration-200 px-3 py-2 rounded-full flex items-center space-x-1 hover:scale-110 hover:bg-blue-100"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full mt-2 w-full bg-white bg-opacity-95 backdrop-blur-md rounded-lg shadow-xl py-4 flex flex-col items-center space-y-3 animate-slideDown">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-800 hover:text-blue-600 transition-colors duration-200 px-4 py-2 w-full text-center flex items-center justify-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

// Komponen HomeDestinationsPreview
const HomeDestinationsPreview: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '-50px 0px' });

  const topDestinations = [
    { id: 'borobudur-temple', name: 'Borobudur Temple', image: aboutUsImg1 },
    { id: 'mount-bromo', name: 'Bromo', image: aboutUsImg3 },
    { id: 'raja-ampat', name: 'Raja Ampat', image: aboutUsImg2 },
    { id: 'ubud-bali', name: 'Ubud, Bali', image: aboutUsImg4 },
    { id: 'komodo-island', name: 'Komodo, island', image: aboutUsImg5 },
    { id: 'lake-toba', name: 'Lake Toba', image: aboutUsImg6 },
  ];

  return (
    <section
      id="featured-destinations"
      ref={ref}
      className={`py-20 px-6 md:px-12 bg-white text-gray-800 transition-all duration-1000 ease-out
                         ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {topDestinations.map((dest) => (
            <Link
              key={dest.id}
              // =====================================================================
              // KEMBALIKAN KE PENGGUNAAN STRING PATH DAN PARAMS PROP:
              to="/destination-detail/$destinationId" // Use the full string path
              params={{ destinationId: dest.id }} // Pass parameters as an object
              // =====================================================================
              className="block relative overflow-hidden rounded-lg shadow-md group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white text-left">
                <h3 className="text-2xl font-bold">{dest.name}</h3>
                <p className="text-sm">Discover more</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="/tours"
          className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg inline-flex items-center space-x-2"
        >
          <span>View All Tour Packages</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </Link>
      </div>
    </section>
  );
};

// Komponen About Us Section
const AboutUsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '-50px 0px' });

  const images = [
    { src: aboutUsImg1, alt: 'Adventure 1', className: 'absolute top-0 left-0 w-2/3 h-2/3 object-cover rounded-lg shadow-xl -rotate-6 transform hover:rotate-0 hover:scale-105 transition-transform duration-300' },
    { src: aboutUsImg2, alt: 'Adventure 2', className: 'absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-lg shadow-xl rotate-3 transform hover:rotate-0 hover:scale-105 transition-transform duration-300' },
    { src: aboutUsImg3, alt: 'Adventure 3', className: 'absolute top-1/4 left-1/3 w-1/2 h-1/2 object-cover rounded-lg shadow-xl rotate-1 transform hover:rotate-0 hover:scale-105 transition-transform duration-300' },
    { src: aboutUsImg4, alt: 'Adventure 4', className: 'absolute bottom-1/4 right-1/3 w-1/2 h-1/2 object-cover rounded-lg shadow-xl -rotate-3 transform hover:rotate-0 hover:scale-105 transition-transform duration-300' },
  ];

  return (
    <section
      id="about-us"
      ref={ref}
      className={`py-20 px-6 md:px-12 bg-gray-50 text-gray-800 transition-all duration-1000 ease-out
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Images */}
        <div className={`relative h-96 sm:h-[500px] w-full
                               ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} transition-all duration-1000 ease-out delay-100`}>
          {images.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} className={img.className} />
          ))}
        </div>

        {/* Right Side: Text and Stats */}
        <div className={`${inView ? `opacity-100 translate-x-0` : `opacity-0 translate-x-20`} transition-all duration-1000 ease-out delay-200`}>
          <span className="text-blue-600 font-semibold uppercase tracking-wider mb-2 block">WHO WE ARE</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            We Are the Bridge to Your Ridge Travel Dreams.
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Ultricius purus dapibus senectus netus nibh molestie nisi rlora est et malesuada. Mattis quis noi ex feugiat scelerisque. Vitae torquent fusce faucibus at tempor nullam commodo ultrices scelerisque blandit.
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-gray-900">87K+</p>
              <p className="text-gray-600 uppercase text-sm mt-1">MEMBER ACTIVE</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900">415+</p>
              <p className="text-gray-600 uppercase text-sm mt-1">EXPERT TEAM</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900">4.8</p>
              <p className="text-gray-600 uppercase text-sm mt-1">CLIENT RATINGS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponen Partner Logos
const PartnerLogos: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, rootMargin: '-50px 0px' });

  const logos = [
    partnerLogo1,
    partnerLogo2,
    partnerLogo3,
    partnerLogo4,
    partnerLogo5,
    partnerLogo6,
  ];

  return (
    <section
      className={`py-12 bg-white transition-all duration-1000 ease-out
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {logos.map((logo, index) => (
            (<img key={index} src={logo} alt={`Partner Logo ${index + 1}`} className={`h-12 w-auto object-contain`} />)
          ))}
        </div>
      </div>
    </section>
  )
};

// Komponen Video Showcase
interface VideoShowcaseProps {
  videoSrc: string; // URL video lokal
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ videoSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sectionRef, inView] = useInView({ threshold: 0.1, rootMargin: '-100px 0px' });

  const openModalAndPlay = () => {
    setIsModalOpen(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.controls = true;
      videoRef.current.play();

      document.body.style.overflow = 'hidden';

      // Request fullscreen based on browser support
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  const closeModalAndReset = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current.controls = false;
    }
    document.body.style.overflow = ''; // Reset body overflow

    // Exit fullscreen based on browser support
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
  };

  useEffect(() => {
    // Play video when in view and not in modal
    if (videoRef.current && inView && !isModalOpen) {
      videoRef.current.play().catch(error => console.error("Video autoplay failed:", error));
    } else if (videoRef.current && (!inView || isModalOpen)) {
      videoRef.current.pause();
    }

    // Handle fullscreen change to close modal if user exits fullscreen manually
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement && !(document as any).msFullscreenElement) {
        if (isModalOpen) {
          closeModalAndReset();
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      // Clean up on component unmount
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, [inView, isModalOpen]);

  return (
    <>
      {/* Background Video Showcase Section */}
      <section
        id="video-showcase"
        ref={sectionRef}
        className={`relative py-20 px-6 md:px-12 flex items-center justify-center min-h-[500px] overflow-hidden cursor-pointer
                            transition-all duration-1000 ease-out ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        onClick={openModalAndPlay}
      >
        {/* Background Video Element - Muted and Looping */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay for darkening the background video */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* "Click to view video" indicator text */}
        <div className="relative z-10 text-white text-center max-w-4xl mx-auto w-full h-full flex justify-center items-center">
          <span className="text-white text-2xl font-semibold opacity-30">Klik untuk melihat video</span>
        </div>
      </section>

      {/* Modal / Fullscreen Overlay for Video Playback */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black z-[9999] flex justify-center items-center p-4 animate-fadeIn">
          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              src={videoSrc}
              controls
              autoPlay
              onEnded={closeModalAndReset}
              onError={(e) => console.error("Video error in modal:", e)}
            />
            <button
              onClick={closeModalAndReset}
              className="absolute top-4 right-4 p-3 bg-red-600 rounded-full text-white hover:bg-red-700 transition-colors duration-300 shadow-lg z-50"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  const [showHeroContent, setShowHeroContent] = useState(false);

  useEffect(() => {
    // Animate hero content on mount
    const timer = setTimeout(() => {
      setShowHeroContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <DockNavbar />

      {/* Main Hero Section with Video Background */}
      <main
        id="home" // Ensure this ID matches the href for 'Home' in navItems
        className="relative w-full min-h-screen flex items-center p-6 md:p-12 lg:px-20 overflow-hidden"
      >
        {/* Video Background Element */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={heroVideoBackground}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent z-10"></div>
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto z-20 relative">
          {/* Left Side: Text Content */}
          <div
            className={`relative flex flex-col space-y-6 transition-all duration-1000 ease-out ${
              showHeroContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white z-10">
              Travel Memories <br /> You'll Never Forget
            </h1>
            <p className="text-lg text-gray-200 max-w-md z-10">
              Two proximately switches detect when the value has reached the end of is travel
            </p>
            <div className="flex space-x-4 z-10">
              <Link to="/tours" className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                Find Tour Packages
              </Link>
            </div>
          </div>

          {/* Right Side: Illustrative Image (hero-illustration.png) in a circle */}
          <div
            className={`relative flex justify-center items-center h-96 w-full lg:h-[500px] transition-all duration-1000 ease-out ${
              showHeroContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Blue Dotted Circle (Inner) */}
            <div className="absolute inset-0 border-[5px] border-dashed border-blue-400 rounded-full animate-spin-slow"></div>
            <img
              src={heroIllustration}
              alt="Travel Illustration"
              className="relative z-10 w-full h-full object-contain rounded-full shadow-lg"
            />
          </div>
        </div>
      </main>

      {/* About Us Section */}
      <AboutUsSection />

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Featured Destinations (New Component for Home Page) */}
      <HomeDestinationsPreview />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Services Section */}
      <ServicesPageWithAnimation />

      {/* Video Showcase Section */}
      <VideoShowcase
        videoSrc={showcaseVideo}
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// Wrapper for ServicesPage with animation
const ServicesPageWithAnimation: React.FC = () => {
  // Specify HTMLDivElement as the generic type for useInView
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1, rootMargin: '-100px 0px' });
  return (
    <div
      // Apply the explicit cast here
      ref={ref as React.Ref<HTMLDivElement>}
      className={`transition-all duration-1000 ease-out
                           ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <ServicesPage />
    </div>
  );
};