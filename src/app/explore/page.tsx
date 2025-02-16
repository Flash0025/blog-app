'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Post } from '@/types/post';

const CATEGORIES = [
  'All',
  'Frontend',
  'Backend',
  'DevOps',
  'Mobile',
  'AI/ML',
  'Blockchain',
  'Security',
];

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Building Scalable APIs with GraphQL',
    excerpt: 'Learn how to build efficient and scalable APIs using GraphQL and Node.js',
    slug: 'building-scalable-apis-with-graphql',
    author: {
      name: 'Sarah Johnson',
      image: '/avatars/sarah.jpg',
      username: 'sarahj'
    },
    publishedAt: '2025-02-16T08:00:00.000Z',
    tags: ['GraphQL', 'API', 'Node.js'],
    readingTime: '8 min read',
    likes: 234,
    views: 1892,
    content: ''
  },
  // Add more mock posts...
];

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Developer Content
          </h1>
          <p className="text-xl text-gray-600">
            Discover insightful articles, tutorials, and documentation from the developer community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <input
                type="search"
                placeholder="Search articles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">{post.readingTime}</span>
                  <span className="mr-4">{post.views} views</span>
                  <span>{post.likes} likes</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
