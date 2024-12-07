import React from 'react';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business Operations',
    excerpt: 'Discover how artificial intelligence is revolutionizing business operations and what it means for your company.',
    date: new Date('2024-03-15'),
    author: 'Dr. Sarah Chen',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'AI Trends'
  },
  {
    id: 2,
    title: 'Implementing Machine Learning Models: Best Practices',
    excerpt: 'Learn the essential best practices for implementing machine learning models in your applications.',
    date: new Date('2024-03-12'),
    author: 'Michael Rodriguez',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Technical'
  },
  {
    id: 3,
    title: 'AI Ethics: Navigating the Challenges',
    excerpt: 'An in-depth look at the ethical considerations in AI development and deployment.',
    date: new Date('2024-03-10'),
    author: 'Dr. James Wilson',
    image: 'https://images.unsplash.com/photo-1502951682449-e5b93545d46e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Ethics'
  },
  // Add more blog posts as needed
];

export function BlogPage() {
  return (
    <div className="pt-16">
      <div className="bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">AIforge Blog</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Insights, tutorials, and updates from our team of AI experts
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 ml-4">
                    {format(post.date, 'MMM d, yyyy')}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <button className="text-indigo-600 hover:text-indigo-700 inline-flex items-center">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}