'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">U</span>
          </div>
          <span className="text-xl font-bold text-gray-900">UniEdge</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {[
            { href: '/', label: 'home' },
            { href: '/about', label: 'about' },
            { href: '/services', label: 'services' },
            { href: '/contact', label: 'contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`capitalize transition-colors duration-200 ${
                path === item.href
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
