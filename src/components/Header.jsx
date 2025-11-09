import React from 'react';

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-md ring-1 ring-black/10 flex items-center justify-center text-white font-bold">
            V
          </div>
          {/* Title */}
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              VisiTech Event Hub
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">Interactive • Tech • Futuristic</p>
          </div>
        </div>
        <a
          href="#agenda"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors"
        >
          View Agenda
        </a>
      </div>
    </header>
  );
}

export default Header;
