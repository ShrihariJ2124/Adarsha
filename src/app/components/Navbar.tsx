import { useState, useEffect } from 'react';
import { Menu, X, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteImages } from '../data/siteImages';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'kn'>('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigateToSection = (id: string) => {
    const isCommunityDetailPage = window.location.hash.startsWith('#/community/');

    if (isCommunityDetailPage) {
      window.location.hash = id === 'home' ? '#home' : `#${id}`;
      setIsMobileMenuOpen(false);
      return;
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }

    scrollToSection(id);
  };

  const navLinks = [
    { label: language === 'en' ? 'Home' : 'ಮುಖಪುಟ', id: 'home' },
    { label: language === 'en' ? 'About' : 'ನಮ್ಮ ಬಗ್ಗೆ', id: 'about' },
    { label: language === 'en' ? 'Academics' : 'ಶೈಕ್ಷಣಿಕ', id: 'academics' },
    { label: language === 'en' ? 'Facilities' : 'ಸೌಲಭ್ಯಗಳು', id: 'facilities' },
    { label: language === 'en' ? 'Community' : 'Community', id: 'community' },
    { label: language === 'en' ? 'Gallery' : 'ಗ್ಯಾಲರಿ', id: 'gallery' },
    { label: language === 'en' ? 'Contact' : 'ಸಂಪರ್ಕಿಸಿ', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Logo and School Name */}
          <div className="flex items-center gap-3">
            <div className="w-[4.5rem] h-[4.5rem] lg:w-[5.25rem] lg:h-[5.25rem] rounded-xl bg-white shadow-lg border border-blue-100 p-1">
              <img
                src={siteImages.logo}
                alt="ADARSH HPS logo"
                className="w-full h-full rounded-lg object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#1e3a8a] text-sm sm:text-base lg:text-xl font-bold leading-tight">
                {language === 'en' ? 'ADARSH HPS' : 'ಆದರ್ಶ ಹಿ.ಪ್ರಾ.ಶಾಲೆ'}
              </h1>
              <p className="text-gray-600 text-[10px] sm:text-xs lg:text-sm">
                {language === 'en' ? 'Belakavadi' : 'ಬೇಲಕವಾಡಿ'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigateToSection(link.id)}
                className="text-gray-700 hover:text-[#1e3a8a] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ea580c] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Contact Info and Language Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                src={siteImages.swamiji.one}
                alt="Swamiji 1"
                className="h-24 lg:h-28 w-auto object-contain"
              />
              <img
                src={siteImages.swamiji.two}
                alt="Swamiji 2"
                className="h-24 lg:h-28 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white text-sm hover:shadow-lg transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1e3a8a]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1e3a8a]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => navigateToSection(link.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-2 px-4 py-2">
                  <img
                    src={siteImages.swamiji.one}
                    alt="Swamiji 1"
                    className="w-20 h-20 object-contain"
                  />
                  <img
                    src={siteImages.swamiji.two}
                    alt="Swamiji 2"
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <a
                  href="mailto:adarsh.hps@example.com"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#ea580c] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">adarsh.hps@example.com</span>
                </a>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'kn' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white hover:shadow-lg transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  {language === 'en' ? 'Switch to ಕನ್ನಡ' : 'Switch to English'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

