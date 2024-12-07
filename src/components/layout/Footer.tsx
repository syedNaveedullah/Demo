import React from 'react';
import { Brain, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AIforge</span>
            </div>
            <p className="mt-4 text-gray-600">
              Empowering businesses with advanced AI solutions for the modern world.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">API</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Security</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AIforge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}