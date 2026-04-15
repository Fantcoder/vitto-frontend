import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const VittoLogo = ({ white = false }) => (
  <Link to="/" className="flex items-center gap-1.5 no-underline">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0L16.5 11.5L28 14L16.5 16.5L14 28L11.5 16.5L0 14L11.5 11.5L14 0Z" fill="#E8194B" />
      <path d="M14 5L15.5 12.5L23 14L15.5 15.5L14 23L12.5 15.5L5 14L12.5 12.5L14 5Z" fill="#FF6B6B" />
    </svg>
    <span className={`text-xl font-extrabold tracking-tight ${white ? 'text-white' : 'text-text-primary'}`}>
      Vitto
    </span>
  </Link>
);

const platformLinks = [
  { label: 'AI-First Platform', to: '/platform' },
  { label: 'Lending Lifecycle', to: '/lending-lifecycle' },
  { label: 'Collections Intelligence', to: '/collections-intelligence' },
  { label: 'Agentic AI', to: null, comingSoon: true },
  { label: 'API Infrastructure', to: null, comingSoon: true },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Platform', to: null, dropdown: true },
  { label: 'Why Vitto?', to: '/#why-vitto' },
  { label: 'Contact', to: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.08)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <VittoLogo />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer bg-transparent border-none ${
                        ['/platform', '/lending-lifecycle', '/collections-intelligence'].some(p => isActive(p))
                          ? 'text-primary'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {link.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 transition-all duration-200 ${
                        dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 py-2">
                        {platformLinks.map((item) =>
                          item.comingSoon ? (
                            <div
                              key={item.label}
                              className="px-4 py-2.5 text-sm text-gray-300 cursor-not-allowed flex items-center justify-between"
                            >
                              {item.label}
                              <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full font-medium">
                                Soon
                              </span>
                            </div>
                          ) : (
                            <Link
                              key={item.label}
                              to={item.to}
                              className={`block px-4 py-2.5 text-sm no-underline transition-colors ${
                                isActive(item.to)
                                  ? 'text-primary bg-red-50'
                                  : 'text-text-primary hover:bg-gray-50 hover:text-primary'
                              }`}
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`text-sm font-medium no-underline transition-colors ${
                      isActive(link.to)
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button variant="primary" size="sm" rightArrow>
                Get in touch
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: '64px' }}
      >
        <div className="flex flex-col p-6 h-full overflow-y-auto">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="border-b border-gray-100">
                <button
                  className="w-full flex items-center justify-between py-4 text-lg font-semibold text-text-primary bg-transparent border-none cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {link.label}
                  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${dropdownOpen ? 'max-h-80 pb-2' : 'max-h-0'}`}>
                  {platformLinks.map((item) =>
                    item.comingSoon ? (
                      <div key={item.label} className="py-2.5 pl-4 text-sm text-gray-300 flex items-center gap-2">
                        {item.label}
                        <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">Soon</span>
                      </div>
                    ) : (
                      <Link
                        key={item.label}
                        to={item.to}
                        className="block py-2.5 pl-4 text-sm text-text-secondary no-underline hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="block py-4 text-lg font-semibold text-text-primary no-underline border-b border-gray-100 hover:text-primary"
              >
                {link.label}
              </Link>
            )
          )}
          <div className="mt-8">
            <Button variant="primary" size="lg" rightArrow className="w-full">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export { VittoLogo };
