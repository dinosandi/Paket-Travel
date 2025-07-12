// src/routes/contact.tsx
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import Footer from '../components/Footer'; // Asumsi Anda punya komponen Footer

import Baground from '../assets/toba.jpg';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    console.log('Form Submitted:', formData);
    // Di sini Anda akan mengirim data ke backend Anda (misalnya API atau layanan email)
    // Contoh:
    /*
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    })
    .catch((error) => {
      console.error('Error:', error);
      setError('Failed to send message. Please try again later.');
    });
    */

    // For demonstration:
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="relative py-24 text-white text-center"
      style={{ backgroundImage: `url(${Baground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">Contact Us</h1>
          <p className="text-xl opacity-90 animate-fadeInUp delay-200">We'd love to hear from you!</p>
        </div>
      </header>

      <main className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-xl animate-slideInLeft">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">Send Us a Message</h2>
          {isSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline ml-2">Your message has been sent. We'll get back to you soon.</span>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline ml-2">{error}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Inquiry about tour packages"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-gray-800/70 via-blue-900/80 to-black/90 text-white p-8 rounded-lg shadow-xl animate-slideInRight">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">Our Contact Information</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                Address
              </h3>
              <p>Jl. Contoh No. 123, Kota Destinasi</p>
              <p>Provinsi XYZ, 12345, Indonesia</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 1.48a1 1 0 01-.542 1.31l-1.494.742a1 1 0 00-.58.744l.001.202.001.202A7.001 7.001 0 009 15.152l.202.001.202.001a1 1 0 00.744-.58l.742-1.494a1 1 0 011.31-.542l1.48.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                Phone
              </h3>
              <p>+62 812 3456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                Email
              </h3>
              <p>dinosandi05@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v8a1 1 0 001.555.832l6.25-4a1 1 0 000-1.664l-6.25-4z" clipRule="evenodd"></path></svg>
                Opening Hours
              </h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </main>

      {/* Optional: Map Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto animate-fadeIn delay-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2 text-center">Find Us on the Map</h2>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden h-96">
          {/* Replace with your actual Google Maps embed iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260352529!2d106.84560701476938!3d-6.195029395514603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4417b3a9e1d%3A0x6b772e7a3b3e2a0!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1678912345678!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}