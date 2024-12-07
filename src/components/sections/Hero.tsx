import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 mb-8">
          <Sparkles className="h-4 w-4 text-indigo-600 mr-2" />
          <span className="text-sm font-medium text-indigo-600">New: AI Model v2.0 Released</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Transform Your Workflow with
          <span className="text-indigo-600"> AI-Powered</span> Intelligence
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Harness the power of artificial intelligence to automate tasks, gain insights,
          and scale your business with our cutting-edge AI platform.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
            Watch Demo
          </button>
        </div>
        
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="AI Platform Dashboard"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}