'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Bookmark } from '@/types/bookmark';

const MOCK_BOOKMARKS: Bookmark[] = [
  {
    id: '1',
    title: 'Building Scalable APIs with GraphQL',
    url: '/blog/building-scalable-apis-with-graphql',
    type: 'post',
    description: 'Learn how to build efficient and scalable APIs using GraphQL and Node.js',
    tags: ['GraphQL', 'API', 'Node.js'],
    createdAt: '2025-02-16T08:00:00.000Z',
    folder: 'Backend Development',
    note: 'Great resource for learning GraphQL basics'
  },
  {
    id: '2',
    title: 'Getting Started with Next.js',
    url: '/docs/basics/getting-started',
    type: 'doc',
    description: 'Official documentation for getting started with Next.js',
    tags: ['Next.js', 'React', 'Documentation'],
    createdAt: '2025-02-15T10:00:00.000Z',
    folder: 'Frontend Development'
  },
  // Add more mock bookmarks...
];

const FOLDERS = [
  'All Bookmarks',
  'Frontend Development',
  'Backend Development',
  'DevOps',
  'Tutorials',
  'Documentation',
  'Read Later'
];

export default function BookmarksPage() {
  const [selectedFolder, setSelectedFolder] = useState('All Bookmarks');
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'grid' | 'list'>('list');
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const filteredBookmarks = MOCK_BOOKMARKS.filter((bookmark) => {
    const matchesFolder = selectedFolder === 'All Bookmarks' || bookmark.folder === selectedFolder;
    const matchesSearch = bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFolder && matchesSearch;
  });

  const handleCreateFolder = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement folder creation
    setIsCreatingFolder(false);
    setNewFolderName('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Folders</h2>
                <button
                  onClick={() => setIsCreatingFolder(true)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {isCreatingFolder ? (
                <form onSubmit={handleCreateFolder} className="mb-4">
                  <input
                    type="text"
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    placeholder="Folder name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <div className="flex justify-end mt-2 space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsCreatingFolder(false)}
                      className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Create
                    </button>
                  </div>
                </form>
              ) : null}

              <nav className="space-y-1">
                {FOLDERS.map((folder) => (
                  <button
                    key={folder}
                    onClick={() => setSelectedFolder(folder)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      selectedFolder === folder
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="truncate">{folder}</span>
                    <span className="ml-auto text-xs text-gray-500">
                      {MOCK_BOOKMARKS.filter(b => 
                        folder === 'All Bookmarks' ? true : b.folder === folder
                      ).length}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Header */}
              <div className="border-b border-gray-200 p-4">
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center justify-between">
                  <h1 className="text-lg font-semibold text-gray-900">
                    {selectedFolder}
                  </h1>
                  <div className="flex space-x-4">
                    <input
                      type="search"
                      placeholder="Search bookmarks..."
                      className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="flex border border-gray-300 rounded-md">
                      <button
                        onClick={() => setView('grid')}
                        className={`p-2 ${
                          view === 'grid'
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setView('list')}
                        className={`p-2 ${
                          view === 'list'
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-500 hover:text-gray-900'
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bookmarks List/Grid */}
              <div className={`p-4 ${view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'space-y-4'}`}>
                {filteredBookmarks.map((bookmark) => (
                  <div
                    key={bookmark.id}
                    className={`bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200 ${
                      view === 'list' ? 'p-4' : 'p-6'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <Link
                          href={bookmark.url}
                          className="text-lg font-medium text-gray-900 hover:text-blue-600"
                        >
                          {bookmark.title}
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">
                          {bookmark.description}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {bookmark.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                      <span>{bookmark.folder}</span>
                      <span>{new Date(bookmark.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
