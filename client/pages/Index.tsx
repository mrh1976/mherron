import { useState } from "react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/42415debce8e00ddf92bfd6b5bede46b12554bf6?width=512"
              alt="Mike Herron"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-16">
            <a
              href="#about"
              className="text-gray-900 font-medium text-sm transition relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left transition-transform duration-300"></span>
            </a>
            <a
              href="#resume"
              className="text-gray-900 font-medium text-sm transition relative group"
            >
              Resume
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left transition-transform duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-900 font-medium text-sm transition relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange transform origin-left transition-transform duration-300"></span>
            </a>
          </nav>

          {/* LinkedIn Icon */}
          <div className="flex items-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-orange transition"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Profile Image */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div className="flex flex-col justify-start pt-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
                <span className="text-gray-900">Executive Leadership</span>
                <br />
                <span className="text-gray-400">That Turns </span>
                <span className="text-gray-600">Complex Ideas</span>
                <br />
                <span className="text-gray-400">Into Clear </span>
                <span className="text-gray-600">Growth</span>
                <span className="text-orange">.</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 mb-16">
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium text-sm transition">
                  Let's Chat
                </button>
                <button className="border border-gray-900 hover:bg-gray-50 text-gray-900 px-6 py-2 rounded-full font-medium text-sm transition">
                  Services
                </button>
              </div>

              {/* Want to learn more section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Want to learn more<span className="text-orange">?</span>
                </h3>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-medium text-sm transition">
                  Subscribe on LinkedIn
                </button>
              </div>
            </div>

            {/* Right Content - Profile Image and Newsletter Card */}
            <div className="relative flex flex-col items-center justify-start">
              {/* Profile Image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/92d0abb246b5692237e32af1bd0d4710c3895465?width=2096"
                alt="Mike Herron"
                className="w-full max-w-md lg:max-w-lg object-cover mb-8"
              />

              {/* Newsletter Card - positioned to overlap */}
              <div className="w-full max-w-md bg-black rounded-2xl p-6 flex items-center gap-6 -mt-12 relative z-10 shadow-lg">
                {/* Logo/Icon */}
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-orange to-orange/80 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white font-bold text-2xl">Df</div>
                    <div className="text-white/60 text-xs mt-1">Marketing</div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <div className="text-orange text-xs font-semibold tracking-wider mb-1">
                    LINKEDIN NEWSLETTER
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-1">Dear Founders</h3>
                  <p className="text-gray-400 text-sm">Marketing clarity for the modern entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
