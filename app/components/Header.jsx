'use client';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { FiMessageCircle } from "react-icons/fi";
import { HomeContext } from '../home-context';

export default function Header() {
  const pathname = usePathname(); // Get the current pathname
  const [isOpen, setIsOpen] = useState(false);

  const { isHome, setIsHome } = useContext(HomeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the current page is active
  const isActive = (linkPath) => pathname === linkPath;

  // Update `isHome` based on the pathname
  useEffect(() => {
    if (pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathname, setIsHome]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={`${isHome ? 'bg-white/10 backdrop-blur-sm text-sky-600' : 'bg-sky-300'} shadow-md z-50`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className={`no-underline text-pink-500`}>
            Alex
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-8 ${isHome ? 'text-sky-700' : ' text-white'}`}>
          <Link
            href="/"
            className={`no-underline ${isActive('/') ? 'text-pink-500' : 'hover:scale-[1.02]'}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`no-underline ${isActive('/about') ? 'text-pink-500' : 'hover:scale-[1.02]'}`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`no-underline ${isActive('/projects') ? 'text-pink-500' : 'hover:scale-[1.02]'}`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`no-underline ${isActive('/contact') ? 'text-pink-500' : 'hover:scale-[1.02]'}`}
          >
            Contact
          </Link>
        </nav>

        {/* Hire me */}
        <Button
          onClick={handleDownload}
          className={`hidden md:flex gap-2 items-center w-48 group bg-transparent border border-sky-500 ${isHome ? 'text-sky-600 hover:text-white' : 'text-white'}`}
        >
          <FiMessageCircle className='h-5 w-5' fill='#7dd3fc' />
          <span className='flex-grow uppercase tracking-wide group-hover:tracking-wider group-hover:font-medium transition-all text-xs'>Resume download</span>
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
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
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <nav
          className={`absolute top-16 left-0 w-full bg-sky-300 md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
            }`}
          style={{ height: 'calc(100% - 65px)' }}
        >
          <ul className="h-full flex flex-col gap-6 space-y-4 p-4">
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                className={`no-underline text-4xl font-semibold ${isActive('/') ? 'text-pink-500' : 'hover:text-gray-500 text-white'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={toggleMenu}
                className={`no-underline text-4xl font-semibold ${isActive('/about') ? 'text-pink-500' : 'hover:text-gray-500 text-white'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={toggleMenu}
                className={`no-underline text-4xl font-semibold ${isActive('/projects') ? 'text-pink-500' : 'hover:text-gray-500 text-white'}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className={`no-underline text-4xl font-semibold ${isActive('/contact') ? 'text-pink-500' : 'hover:text-gray-500 text-white'}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
