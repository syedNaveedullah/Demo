import React from 'react';
import { Bot, Brain, Cpu, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Advanced AI Models',
    description: 'Access state-of-the-art AI models trained on diverse datasets.',
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'Natural Language Processing',
    description: 'Process and analyze text with human-like understanding.',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Real-time Processing',
    description: 'Get instant results with our optimized infrastructure.',
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Analytics Dashboard',
    description: 'Track and visualize your AI operations in real-time.',
  },
];

export function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Powerful Features for Modern AI Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform provides everything you need to leverage AI technology
            effectively in your business workflow.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}