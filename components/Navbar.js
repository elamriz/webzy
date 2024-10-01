'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="bg-black dark:bg-white py-6 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-4xl font-bold text-salmon dark:text-purple-blue">
          <Link href="/">Prodream</Link>
        </div>

        {/* Theme Toggle Button (outside the hamburger menu) */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white dark:text-black focus:outline-none ml-4"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              // Close icon
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="text-xl text-white dark:text-black hover:text-purple-blue dark:hover:text-salmon transition duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-black dark:bg-white text-white dark:text-black absolute inset-x-0 transition-all duration-500 ease-in-out transform overflow-hidden rounded-b-xl shadow-lg ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          top: '100%',
        }}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <span
                onClick={() => setMobileOpen(false)}
                className="block text-2xl font-semibold text-white dark:text-black hover:text-purple-blue dark:hover:text-salmon transition duration-300"
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
