'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-gradient">
                DevBlog
              </Link>
            </div>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8 items-center">
              <Link href="/explore" className="nav-link">
                Explore
              </Link>
              <Link href="/bookmarks" className="nav-link">
                Bookmarks
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link href="/write" className="nav-link">
              Write
            </Link>
            <Link href="/signin" className="nav-link">
              Sign in
            </Link>
            <Link href="/signup" className="btn-primary">
              Create Account
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/explore" className="nav-link block">
            Explore
          </Link>
          <Link href="/bookmarks" className="nav-link block">
            Bookmarks
          </Link>
          <Link href="/write" className="nav-link block">
            Write
          </Link>
          <Link href="/signin" className="nav-link block">
            Sign in
          </Link>
          <Link href="/signup" className="btn-primary mx-3 my-2">
            Create Account
          </Link>
        </div>
      </div>
    </nav>
  );
}
