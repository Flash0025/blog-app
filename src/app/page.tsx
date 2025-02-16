import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredPosts = [
    {
      title: "Getting Started with Next.js and TypeScript",
      excerpt:
        "Learn how to build modern web applications with Next.js and TypeScript",
      author: "John Doe",
      authorImage: "/avatars/john.jpg",
      date: "Feb 16, 2025",
      readTime: "5 min read",
      tags: ["Next.js", "TypeScript", "Web Development"],
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Best practices for building production-ready APIs using Node.js and Express",
      author: "Jane Smith",
      authorImage: "/avatars/jane.jpg",
      date: "Feb 15, 2025",
      readTime: "8 min read",
      tags: ["Node.js", "API", "Backend"],
    },
    {
      title: "React Performance Optimization",
      excerpt:
        "Tips and tricks to improve your React application's performance",
      author: "Mike Johnson",
      authorImage: "/avatars/mike.jpg",
      date: "Feb 14, 2025",
      readTime: "6 min read",
      tags: ["React", "Performance", "Frontend"],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate">
        {/* Background gradient */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Write, Share, and Grow with the Dev Community
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Start your developer blog, share your insights, and connect with
              millions of developers worldwide. Free and easy to use.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup"
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-blue-600 transition-all duration-200 hover:shadow-lg"
              >
                Start your blog
              </Link>
              <Link
                href="/explore"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200"
              >
                Explore blogs <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Background gradient */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Featured posts section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Posts
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn from the best in the developer community
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <article
                key={index}
                className="flex flex-col items-start justify-between group"
              >
                <div className="w-full bg-white rounded-2xl p-6 ring-1 ring-gray-200 ring-opacity-50 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="relative">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      <Link href="#">
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author}
                      </p>
                      <p className="text-gray-600">
                        {post.date} · {post.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
