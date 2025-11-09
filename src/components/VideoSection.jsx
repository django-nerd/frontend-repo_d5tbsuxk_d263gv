import React from 'react';

function VideoSection() {
  return (
    <section id="video" className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Tayangan Video Utama</h3>
            <p className="mt-3 text-gray-600">Video promo acara dengan tema teknologi dan minimalis.</p>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm list-disc list-inside">
              <li>Streaming langsung atau rekaman highlight</li>
              <li>Dukungan mode layar penuh</li>
              <li>Kualitas HD</li>
            </ul>
          </div>
          <div className="aspect-video w-full rounded-xl overflow-hidden ring-1 ring-black/10 shadow-lg bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
