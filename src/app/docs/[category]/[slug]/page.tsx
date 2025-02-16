'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import type { DocSection } from '@/types/doc';

export default function DocumentationPage() {
  const params = useParams();
  const [doc, setDoc] = useState<DocSection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch documentation data from API
    // For now, using mock data
    const mockDoc: DocSection = {
      id: '1',
      title: 'Getting Started with DevBlog',
      content: `# Getting Started with DevBlog

Welcome to DevBlog! This guide will help you get started with our platform and make the most of its features.

## Quick Setup

1. Create an account
2. Set up your profile
3. Write your first post

## Writing Posts

DevBlog supports Markdown formatting, making it easy to write beautiful and well-structured posts.

### Markdown Features

- **Bold** and *italic* text
- Code blocks with syntax highlighting
- Lists and tables
- Images and links
- Math equations

### Code Example

\`\`\`javascript
function hello() {
  console.log('Welcome to DevBlog!');
}
\`\`\`

## Best Practices

1. Use clear and descriptive titles
2. Add relevant tags
3. Include code examples when possible
4. Engage with comments
5. Share your posts

## Need Help?

Join our community Discord server or reach out to support@devblog.com for assistance.`,
      slug: 'getting-started',
      order: 1,
      category: 'basics',
      updatedAt: '2025-02-16T09:00:00.000Z',
      author: {
        name: 'DevBlog Team',
        image: '/avatars/team.jpg'
      }
    };

    setDoc(mockDoc);
    setLoading(false);
  }, [params.category, params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Documentation not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Main content */}
        <div className="flex-1">
          <main className="py-8">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <header className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{doc.title}</h1>
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center space-x-4">
                      <img
                        src={doc.author.image}
                        alt={doc.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm">
                          Last updated: {new Date(doc.updatedAt).toLocaleDateString()}
                        </p>
                        <p className="text-sm font-medium">{doc.author.name}</p>
                      </div>
                    </div>
                  </div>
                </header>

                <div className="prose max-w-none">
                  {/* Using a basic markdown renderer for now */}
                  <div dangerouslySetInnerHTML={{ __html: doc.content }} />
                </div>

                <footer className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <button className="text-gray-600 hover:text-gray-900">
                      Edit this page on GitHub
                    </button>
                    <div className="flex space-x-4">
                      <button className="text-gray-600 hover:text-gray-900">
                        Previous
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Next
                      </button>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
