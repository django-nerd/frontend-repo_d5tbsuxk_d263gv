import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Agenda from './components/Agenda';
import PhotoSlider from './components/PhotoSlider';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <VideoSection />
      <Agenda />
      <PhotoSlider />
      <footer className="py-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} VisiTech. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
