import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10">
      <a className="break-words" aria-label="TailwindBlog" href="/">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="53.87" height="43.61" viewBox="344.564 330.278 111.737 91.218">
              <defs>
                <linearGradient id="logo_svg__b" x1="420.97" x2="420.97" y1="331.28" y2="418.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#67e8f9", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="logo_svg__d" x1="377.89" x2="377.89" y1="331.28" y2="418.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#67e8f9", stopOpacity: 1 }} />
                </linearGradient>
                <path id="logo_svg__a" d="M453.3 331.28v28.57l-64.66 58.65v-30.08z" />
                <path id="logo_svg__c" d="M410.23 331.28v28.57l-64.67 58.65v-30.08z" />
              </defs>
              <use xlinkHref="#logo_svg__a" fill="url(#logo_svg__b)" />
              <use xlinkHref="#logo_svg__c" fill="url(#logo_svg__d)" />
            </svg>
          </div>
          <div className="hidden h-6 text-2xl font-semibold sm:block">TailwindBlog</div>
        </div>
      </a>

      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className=" hidden max-w-40 items-center space-x-4  sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
          <a className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" href="/blog">
            Blog
          </a>
          <a className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" href="/tags">
            Tags
          </a>
          <a className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" href="/projects">
            Projects
          </a>
          <a className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" href="/about">
            About
          </a>
        </div>

        {/* Search Icon */}
        <button aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </button>

        {/* Dark Mode Toggle */}
        <div className="mr-5 flex items-center">
          <div className="relative inline-block text-left">
            <div className="flex items-center justify-center hover:text-primary-500 dark:hover:text-primary-400">
              <button
                aria-label="Theme switcher"
                type="button"
                onClick={toggleDarkMode}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group:hover:text-gray-100 h-6 w-6">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button aria-label="Toggle Menu" className="sm:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-950">
            <a className="block px-4 py-2 font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" href="/blog">Blog</a>
            <a className="block px-4 py-2 font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" href="/tags">Tags</a>
            <a className="block px-4 py-2 font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" href="/projects">Projects</a>
            <a className="block px-4 py-2 font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400" href="/about">About</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
