'use client';

import { useState } from 'react';
import { TfiMenu } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project', label: 'Project' },
  { href: '/contact', label: 'Timeline' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="p-4 fixed w-full z-40">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-3 border border-gray-200 px-2 py-1 rounded-md backdrop-blur-xs m-auto">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <li className="flex items-center px-3 py-2 border border-transparent hover:border-gray-100 rounded-md hover:bg-gray-100 hover:cursor-pointer transition-colors">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <TfiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <li
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-3 border border-transparent hover:border-gray-100 rounded-md hover:bg-gray-100 hover:cursor-pointer transition-colors"
              >
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
