import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VittoLogoWhite = () => (
  <Link to="/" className="flex items-center gap-1.5 no-underline">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0L16.5 11.5L28 14L16.5 16.5L14 28L11.5 16.5L0 14L11.5 11.5L14 0Z" fill="#E8194B" />
      <path d="M14 5L15.5 12.5L23 14L15.5 15.5L14 23L12.5 15.5L5 14L12.5 12.5L14 5Z" fill="#FF6B6B" />
    </svg>
    <span className="text-xl font-extrabold tracking-tight text-white">Vitto</span>
  </Link>
);

const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'AI-First Platform', to: '/platform' },
  { label: 'Lending Lifecycle', to: '/lending-lifecycle' },
  { label: 'Collections Intelligence', to: '/collections-intelligence' },
  { label: 'Why Vitto?', to: '/#why-vitto' },
  { label: 'Contact', to: '/#contact' },
];

const platformLinks = [
  { label: 'AI-First Platform', to: '/platform' },
  { label: 'Lending Lifecycle', to: '/lending-lifecycle' },
  { label: 'Collections Intelligence', to: '/collections-intelligence' },
  { label: 'Agentic AI', to: null },
  { label: 'API Infrastructure', to: null },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Subscribe */}
          <div className="lg:col-span-1">
            <VittoLogoWhite />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              AI-First Infrastructure for Modern Financial Services. Purpose-built decisioning and automation.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6">
              <label className="text-xs text-gray-400 font-medium mb-2 block">Stay updated</label>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2.5 bg-white/10 border border-white/20 rounded-l-lg text-sm text-white placeholder-gray-500 outline-none focus:border-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-r-lg hover:bg-primary-hover transition-colors cursor-pointer border-none"
                >
                  →
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Pages</h4>
            <ul className="space-y-3 list-none p-0">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 no-underline hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3 list-none p-0">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 no-underline hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-gray-600">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 no-underline hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow us on LinkedIn
            </a>
            <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="bg-white/10 rounded-lg h-32 flex items-center justify-center">
                <span className="text-xs text-gray-500">Social Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Vitto. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-500 no-underline hover:text-gray-300 transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="text-xs text-primary no-underline hover:text-secondary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
