'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import type { Post } from '@/types/post';

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch post data from API
    // For now, using mock data
    const mockPost: Post = {
      id: '1',
      title: 'Understanding React Server Components',
      content: `# Understanding React Server Components

React Server Components (RSC) represent a paradigm shift in how we build React applications. They allow components to run on the server, reducing the JavaScript bundle sent to the client and improving performance.

## Key Benefits

1. Reduced Client-side JavaScript
2. Improved Performance
3. Better SEO
4. Direct Backend Access

## Code Example

\`\`\`jsx
// server-component.jsx
async function ServerComponent() {
  const data = await db.query('SELECT * FROM posts');
  
  return (
    <div>
      {data.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}
\`\`\`

## When to Use Server Components

- Data fetching
- Access to backend resources
- Large dependencies
- SEO requirements`,
      excerpt: 'Learn about React Server Components and how they can improve your application performance.',
      slug: 'understanding-react-server-components',
      author: {
        name: 'John Doe',
        image: '/avatars/john.jpg',
        username: 'johndoe'
      },
      publishedAt: '2025-02-16T09:00:00.000Z',
      tags: ['React', 'JavaScript', 'Web Development'],
      readingTime: '5 min read',
      likes: 42,
      views: 1337
    };

    setPost(mockPost);
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
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

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center justify-between text-gray-600">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{post.author.name}</p>
                  <p className="text-sm">
                    {new Date(post.publishedAt).toLocaleDateString()} · {post.readingTime}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span>{post.views} views</span>
                <span>{post.likes} likes</span>
              </div>
            </div>
          </header>

          <div className="prose max-w-none">
            {/* Using a basic markdown renderer for now */}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
