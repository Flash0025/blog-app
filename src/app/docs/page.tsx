'use client';

import { useState } from 'react';
import Link from 'next/link';

const documentationSections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '#introduction' },
      { title: 'Quick Start', href: '#quick-start' },
      { title: 'Installation', href: '#installation' },
    ],
  },
  {
    title: 'Features',
    items: [
      { title: 'Writing Posts', href: '#writing-posts' },
      { title: 'Markdown Support', href: '#markdown' },
      { title: 'Code Highlighting', href: '#code' },
    ],
  },
  {
    title: 'Advanced',
    items: [
      { title: 'API Reference', href: '#api' },
      { title: 'Customization', href: '#customization' },
      { title: 'Deployment', href: '#deployment' },
    ],
  },
];

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 pt-16 pb-4">
          <nav className="h-full overflow-y-auto" aria-label="Directory">
            <div className="px-6 py-4">
              <input
                type="search"
                placeholder="Search documentation..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {documentationSections.map((section) => (
              <div key={section.title} className="px-6 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul role="list" className="mt-2 space-y-2">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="lg:pl-64 flex flex-col flex-1">
          <main className="flex-1 pb-8 pt-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <section id="introduction">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h1>
                  <p className="text-gray-600 mb-6">
                    Welcome to DevBlog, a modern blogging platform designed specifically for developers.
                    This documentation will help you get started and make the most of our platform.
                  </p>
                </section>

                <section id="quick-start" className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
                  <p className="text-gray-600 mb-4">
                    Get started with DevBlog in just a few minutes. Follow these simple steps:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-600">
                    <li>Create an account or sign in</li>
                    <li>Set up your profile</li>
                    <li>Write your first post</li>
                    <li>Share with the community</li>
                  </ol>
                </section>

                <section id="writing-posts" className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Writing Posts</h2>
                  <p className="text-gray-600 mb-4">
                    DevBlog supports Markdown for writing posts. You can include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Code blocks with syntax highlighting</li>
                    <li>Images and diagrams</li>
                    <li>Mathematical equations</li>
                    <li>Interactive components</li>
                  </ul>
                </section>

                {/* Add more documentation sections here */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
