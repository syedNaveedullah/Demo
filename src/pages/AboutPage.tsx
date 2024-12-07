import React from 'react';
import { Users, Award, Target, Rocket } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-16">
      <div className="bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About AIforge</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            We're on a mission to democratize artificial intelligence and make it accessible
            to businesses of all sizes. Our team of experts is dedicated to pushing the
            boundaries of what's possible with AI.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">50+ Team Members</h3>
            <p className="text-gray-600">Experts in AI, ML, and Data Science</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">15+ Awards</h3>
            <p className="text-gray-600">Industry Recognition</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">99.9% Uptime</h3>
            <p className="text-gray-600">Reliable Infrastructure</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1M+ API Calls</h3>
            <p className="text-gray-600">Daily Processing</p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
            <div className="space-y-6">
              <p className="text-gray-600">
                Founded in 2020, AIforge began with a simple mission: to make artificial
                intelligence accessible to everyone. What started as a small team of
                passionate engineers has grown into a global company serving thousands
                of businesses worldwide.
              </p>
              <p className="text-gray-600">
                Our commitment to innovation and customer success has driven us to
                continuously improve our platform, making it more powerful and easier
                to use with each update.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be at the forefront of the AI revolution,
                helping businesses transform their operations and achieve unprecedented
                results through the power of artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}