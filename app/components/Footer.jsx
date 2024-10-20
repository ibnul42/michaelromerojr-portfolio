'use client'; // Making this a client component

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-sky-300 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo / Name */}
                <div className="text-lg font-bold mb-4 md:mb-0">
                    <Link href="/" className="no-underline">
                        Alex
                    </Link>
                </div>

                {/* Links */}
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <Link href="/" className="hover:text-gray-400 no-underline">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-400 no-underline">
                        About
                    </Link>
                    <Link href="/projects" className="hover:text-gray-400 no-underline">
                        Projects
                    </Link>
                    <Link href="/contact" className="hover:text-gray-400 no-underline">
                        Contact
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-sm">
                    © {new Date().getFullYear()} YourName. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
