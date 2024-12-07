import React from 'react';
import { ArrowRight, BarChart, Users, Zap } from 'lucide-react';

const caseStudies = [
  {
    company: 'TechCorp International',
    title: 'Automating Customer Support with AI',
    metrics: [
      { label: 'Response Time', value: '90%', suffix: 'faster' },
      { label: 'Customer Satisfaction', value: '95%', suffix: 'increase' },
      { label: 'Cost Savings', value: '$2M', suffix: 'annually' }
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: <BarChart className="h-8 w-8 text-indigo-600" />
  },
  {
    company: 'Global Retail Solutions',
    title: 'AI-Powered Inventory Management',
    metrics: [
      { label: 'Stock Accuracy', value: '99.9%', suffix: '' },
      { label: 'Waste Reduction', value: '60%', suffix: 'decrease' },
      { label: 'Revenue Impact', value: '$5M', suffix: 'increase' }
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: <Users className="h-8 w-8 text-indigo-600" />
  },
  {
    company: 'FinTech Solutions',
    title: 'Fraud Detection Enhancement',
    metrics: [
      { label: 'Fraud Prevention', value: '98%', suffix: 'accuracy' },
      { label: 'False Positives', value: '75%', suffix: 'reduction' },
      { label: 'Processing Time', value: '0.1s', suffix: 'per transaction' }
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    logo: <Zap className="h-8 w-8 text-indigo-600" />
  }
];

export function CaseStudiesPage() {
  return (
    <div className="pt-16">
      <div className="bg-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Discover how leading companies are transforming their businesses with AIforge
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-6">
                  {study.logo}
                  <h2 className="text-2xl font-bold ml-4">{study.company}</h2>
                </div>
                <h3 className="text-3xl font-bold mb-8">{study.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {metric.label}
                        {metric.suffix && <span className="block">{metric.suffix}</span>}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={study.image}
                  alt={study.company}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}