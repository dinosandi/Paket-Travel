// src/components/Footer.tsx
import React from 'react';
import LogoFooter from '../assets/logo1.png'; // Pastikan path ini benar

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 text-center md:text-left">
        {/* Kolom 1: Logo */}
        <div className="col-span-1 flex flex-col items-center md:items-start"> {/* flex-col untuk tumpuk logo dan about us (jika digabung) */}
          <img src={LogoFooter} alt="Daily Travel Logo" className="h-60 w-auto object-contain mb-4" /> {/* Ukuran logo disesuaikan */}
          <p className="text-gray-400">
            Providing unforgettable travel experiences around the globe. Your adventure starts here.
          </p>
        </div>

        {/* Kolom 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Home</a></li>
            <li><a href="#destination" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Destinations</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Services</a></li>
            {/* Mengganti #video-destinations dengan #video-showcase sesuai ID di home.tsx */}
            <li><a href="#video-showcase" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Videos</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Booking</a></li>
          </ul>
        </div>

        {/* Kolom 3: Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400">
            123 Travel Lane, Wanderlust City<br />
            Email: dinosandi05@gmail.com<br />
            Phone: 083119500298
          </p>
        </div>

        {/* Kolom 4: Follow Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c1.88 0 3.73-.5 5.37-1.488 1.63-.988 3.06-2.378 4.19-4.088 1.13-1.71 1.76-3.64 1.76-5.65 0-.16-.01-.33-.02-.49.19-.17.38-.34.56-.52.26-.26.49-.55.7-.85-.82.37-1.71.6-2.6.72.94-.56 1.65-1.45 1.99-2.52-.88.52-1.85.89-2.88 1.09-.83-.89-2.02-1.45-3.35-1.45-2.54 0-4.6 2.06-4.6 4.6 0 .36.04.7.11 1.04-3.82-.19-7.2-2.02-9.47-4.82-.4.69-.64 1.5-.64 2.37 0 1.59.81 3 2.05 3.82-.76-.02-1.48-.23-2.1-.58v.06c0 2.23 1.59 4.1 3.7 4.54-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08.59 1.84 2.31 3.19 4.35 3.23-.97.76-2.2 1.22-3.52 1.22-.23 0-.46-.01-.69-.04 1.25.8 2.72 1.27 4.3 1.27" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.792.01 3.71.053 1.006.045 1.79.215 2.404.457.656.254 1.21.593 1.774 1.157.564.564.903 1.118 1.157 1.774.242.614.412 1.398.457 2.404.043.918.053 1.279.053 3.71s-.01 2.792-.053 3.71c-.045 1.006-.215 1.79-.457 2.404-.254.656-.593 1.21-1.157 1.774-.564.564-1.118.903-1.774 1.157-.614.242-1.398.412-2.404.457-.918.043-1.279.053-3.71.053s-2.792-.01-3.71-.053c-1.006-.045-1.79-.215-2.404-.457-.656-.254-1.21-.593-1.774-1.157-.564-.564-.903-1.118-1.157-1.774-.242-.614-.412-1.398-.457-2.404-.043-.918-.053-1.279-.053-3.71s.01-2.792.053-3.71c.045-1.006.215-1.79.457-2.404.254-.656.593-1.21 1.157-1.774.564-.564 1.118-.903 1.774-1.157.614-.242 1.398-.412 2.404-.457.918-.043 1.279-.053 3.71-.053zm0 2.163c-2.027 0-2.288.009-3.04.042-.787.037-1.26.16-1.574.288-.348.137-.62.316-.89.585-.27.27-.45.542-.585.89-.128.314-.25.787-.288 1.574-.033.752-.042 1.013-.042 3.04s.009 2.288.042 3.04c.037.787.16 1.26.288 1.574.137.348.316.62.585.89.27.27.542.45.89.585.314.128.787.25 1.574.288.752.033 1.013.042 3.04.042s2.288-.009 3.04-.042c-.787-.037-1.26-.16-1.574-.288-.137-.348-.316-.62-.585-.89-.27-.27-.45-.542-.585-.89-.128-.314-.25-.787-.288-1.574-.033-.752-.042-1.013-.042-3.04s-.009-2.288-.042-3.04c-.037-.787-.16-1.26-.288-1.574-.137-.348-.316-.62-.585-.89-.27-.27-.45-.542-.585-.89-.128-.314-.25-.787-.288-1.574-.033-.752-.042-1.013-.042-3.04zm0 4.887a3.613 3.613 0 100 7.226 3.613 3.613 0 000-7.226zM12.315 15.344a3.029 3.029 0 110-6.058 3.029 3.029 0 010 6.058zm5.33-6.057a1.096 1.096 0 100 2.192 1.096 1.096 0 000-2.192z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} DinoSandi
      </div>
    </footer>
  );
};

export default Footer;