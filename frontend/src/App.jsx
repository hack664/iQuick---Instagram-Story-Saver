import React, { useState, useEffect } from 'react';
import { Download, Shield, Zap, Lock, Package, Film, Check, Menu, X, ChevronDown } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    const year = new Date().getFullYear();
    document.getElementById('year').textContent = year;
  }, []);

  const handleDownload = () => {
    try {
      navigator.sendBeacon('/api/track', JSON.stringify({ event: 'download', ts: Date.now() }));
    } catch (e) {
      // Silent fail
    }
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: 'Fastest Story Saver for Instagram' },
    { icon: <Lock className="w-5 h-5" />, text: 'Anonymous Ghost Mode' },
    { icon: <Zap className="w-5 h-5" />, text: 'Batch Download' },
    { icon: <Zap className="w-5 h-5" />, text: 'Offline Sync' },
    { icon: <Film className="w-5 h-5" />, text: 'HD Reels & Video Downloader' },
    { icon: <Lock className="w-5 h-5" />, text: 'No Instagram Login Needed' },
    { icon: <Download className="w-5 h-5" />, text: '1-Tap Downloading' },
    { icon: <Package className="w-5 h-5" />, text: 'Lightweight (12 MB)' },
    { icon: <Shield className="w-5 h-5" />, text: 'Safe & Secure' },
  ];

  const screenshots = [
    'https://iquick.s3.eu-north-1.amazonaws.com/sc_2.jpg',
    'https://iquick.s3.eu-north-1.amazonaws.com/sc_3.jpg',
    'https://iquick.s3.eu-north-1.amazonaws.com/sc_4.jpg',
    'https://iquick.s3.eu-north-1.amazonaws.com/sc_5.jpg',
  ];

  const faqs = [
    {
      q: 'Is iQuick safe to use?',
      a: 'Yes, iQuick does not collect login passwords or store Instagram credentials.'
    },
    {
      q: 'Can I use iQuick without an Instagram account?',
      a: 'Yes — downloads work on publicly available content.'
    },
    {
      q: 'Is story downloading legal?',
      a: 'Downloads are for personal use only. Please comply with applicable copyright laws and Instagram terms.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Skip Link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg">
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 border-blue-100 shadow-md flex-shrink-0">
                <img 
                  src="https://iquick.s3.eu-north-1.amazonaws.com/icon.jpg" 
                  alt="iQuick Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">iQuick</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Story Saver</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" onClick={(e) => smoothScroll(e, '#features')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#install" onClick={(e) => smoothScroll(e, '#install')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Install</a>
              <a href="#faq" onClick={(e) => smoothScroll(e, '#faq')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">FAQ</a>
              <a 
                href="https://iquick.s3.eu-north-1.amazonaws.com/iquick_official.apk" 
                download
                onClick={handleDownload}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg text-sm font-semibold"
              >
                Download
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <a href="#features" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#install" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Install</a>
              <a href="#faq" className="block py-2 text-gray-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a 
                href="https://iquick.s3.eu-north-1.amazonaws.com/iquick_official.apk" 
                download
                onClick={handleDownload}
                className="block w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center font-semibold"
              >
                Download iQuick
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <section className="mb-12 lg:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                <Zap className="w-4 h-4" />
                Latest Version 1.2.4
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Instagram Story Saver & Profile Viewer
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Download stories, reels, highlights & photos instantly in HD – free & no login required.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">12.6 MB</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">No Login</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">HD Quality</span>
                </div>
              </div>

              {/* Download Button */}
              <div className="pt-4">
                <a 
                  href="https://iquick.s3.eu-north-1.amazonaws.com/iquick_official.apk" 
                  download
                  onClick={handleDownload}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition shadow-lg hover:shadow-xl text-lg font-bold group"
                >
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  Download iQuick
                </a>
                <p className="text-sm text-gray-500 mt-3">Updated Nov 2025 • Safe & Secure</p>
              </div>
            </div>

            {/* Right Content - Screenshots */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {screenshots.map((src, idx) => (
                  <div 
                    key={idx}
                    className={`relative rounded-2xl overflow-hidden shadow-xl transition-transform hover:scale-105 ${
                      idx === 0 ? 'col-span-2 sm:col-span-1' : ''
                    }`}
                  >
                    <img 
                      src={src} 
                      alt={`iQuick screenshot ${idx + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg border-4 border-blue-50">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-12 lg:mb-16 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose iQuick?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The most powerful and secure Instagram downloader with all the features you need
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                    {feature.icon}
                  </div>
                  <p className="text-gray-800 font-medium leading-snug pt-1">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Installation Section */}
        <section id="install" className="mb-12 lg:mb-16 scroll-mt-20">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">How to Install iQuick</h2>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Download</h3>
                  <p className="text-blue-100">Tap the Download iQuick button above</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Enable Installation</h3>
                  <p className="text-blue-100">Allow "Install Unknown Apps" in Android settings</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Install & Enjoy</h3>
                  <p className="text-blue-100">Open the file and start downloading stories</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12 lg:mb-16 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details 
                key={idx}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer hover:bg-gray-50 transition">
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition flex-shrink-0" />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Downloading?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust iQuick for their Instagram downloads
          </p>
          <a 
            href="https://iquick.s3.eu-north-1.amazonaws.com/iquick_official.apk" 
            download
            onClick={handleDownload}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition shadow-lg hover:shadow-xl text-lg font-bold"
          >
            <Download className="w-6 h-6" />
            Download Now - It's Free
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center space-y-4">
            <p className="text-sm">
              © <span id="year">2025</span> iQuick. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <a href="https://sites.google.com/view/iquick-privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a href="https://sites.google.com/view/iquick-terms-of-use" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Terms of Use
              </a>
              <span className="text-gray-600">•</span>
              <a href="https://sites.google.com/view/iquickrefundandcancellation" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Refund & Cancellation
              </a>
              <span className="text-gray-600">•</span>
              <a href="https://sites.google.com/view/iquickcontactus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}