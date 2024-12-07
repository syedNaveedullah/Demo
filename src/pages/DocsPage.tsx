import React from 'react';
import { Code, Book, Terminal, FileText } from 'lucide-react';

export function DocsPage() {
  return (
    <div className="pt-16">
      <div className="bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Documentation</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Everything you need to know about integrating and using AIforge's powerful features
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <Code className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Quick Start Guide</h2>
            <p className="text-gray-600 mb-6">
              Get up and running with AIforge in minutes. Learn the basics and make your first API call.
            </p>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              Start Learning →
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <Terminal className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">API Reference</h2>
            <p className="text-gray-600 mb-6">
              Comprehensive API documentation with examples in multiple programming languages.
            </p>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              View API Docs →
            </button>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Popular Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Book className="h-6 w-6 text-indigo-600 mb-3" />
                <h3 className="font-semibold mb-2">Authentication</h3>
                <p className="text-gray-600">Learn how to authenticate your API requests</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileText className="h-6 w-6 text-indigo-600 mb-3" />
                <h3 className="font-semibold mb-2">Error Handling</h3>
                <p className="text-gray-600">Best practices for handling API errors</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Terminal className="h-6 w-6 text-indigo-600 mb-3" />
                <h3 className="font-semibold mb-2">Webhooks</h3>
                <p className="text-gray-600">Setting up and managing webhooks</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-gray-100">
                <code>{`// Initialize the AIforge client
const aiforge = new AIforge({
  apiKey: 'your-api-key'
});

// Make a prediction
const result = await aiforge.predict({
  model: 'text-analysis',
  input: 'Your text here'
});

console.log(result);`}</code>
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}