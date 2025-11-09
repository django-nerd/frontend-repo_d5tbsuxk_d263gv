import React, { useEffect, useRef, useState } from 'react';

const photos = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
];

function PhotoSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Galeri Foto</h3>
            <p className="text-gray-600 mt-2">Slide foto dari momen terbaik.</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl ring-1 ring-black/10 shadow-lg">
          {photos.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Slide ${i + 1}`}
              className={`absolute inset-0 h-[260px] sm:h-[360px] w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
            />
          ))}
          <div className="relative h-[260px] sm:h-[360px]" />
          <div className="absolute bottom-3 right-3 flex gap-1.5 bg-white/70 backdrop-blur px-2 py-1 rounded-full ring-1 ring-black/10">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-gray-900' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoSlider;
