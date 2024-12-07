import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { DocsPage } from './pages/DocsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;