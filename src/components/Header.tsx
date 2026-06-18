import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Globe, User, Menu, X, Landmark } from 'lucide-react';
import payechoLogo from '../assets/payecho_logo.png';

interface HeaderProps {
  fontScale: 'sm' | 'md' | 'lg';
  setFontScale: (scale: 'sm' | 'md' | 'lg') => void;
}

export default function Header({ fontScale, setFontScale }: HeaderProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');

  const navLinks = [
    { path: '/', label: 'Home', labelHi: 'मुख्य पृष्ठ' },
    { path: '/about', label: 'About Us', labelHi: 'हमारे बारे में' },
    { path: '/products', label: 'Products & Services', labelHi: 'उत्पाद और सेवाएं' },
    { path: '/solution', label: 'Solution', labelHi: 'समाधान' },
    { path: '/channel-partner', label: 'Channel Partner', labelHi: 'चैनल पार्टनर' },
    { path: '/faq', label: 'FAQ\'s', labelHi: 'अक्सर पूछे जाने वाले प्रश्न' },
  ];

  const activeClass = (path: string) => {
    if (location.pathname === path) {
      return "border-b-4 border-gov-saffron text-white bg-gov-blue/50 font-semibold";
    }
    return "text-slate-100 hover:bg-gov-blue-dark hover:text-white transition-all";
  };

  return (
    <header className="w-full flex flex-col z-50 bg-white relative">
      {/* 1. Tricolor Top Stripe */}
      <div className="h-1.5 w-full tricolor-stripe"></div>

      {/* 2. Top Accessibility & Meta Bar */}
      <div className="bg-slate-900 text-slate-300 py-1.5 px-4 text-xs font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Indian Gov Info / Dual Lang Welcome */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-slate-400">Government of India | भारत सरकार</span>
            <span className="h-3 w-[1px] bg-slate-700 hidden sm:inline"></span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-gov-saffron shrink-0" />
              Toll-Free Helpline: <a href="tel:+917816046799" className="hover:text-white font-bold text-gov-saffron">+91 78160 46799</a>
            </span>
          </div>

          {/* Right: Accessibility controls, social, language */}
          <div className="flex items-center gap-4">
            {/* Screen Reader Access link */}
            <a href="#main-content" className="hover:text-white hidden md:inline text-slate-400">Screen Reader Access</a>
            <span className="h-3 w-[1px] bg-slate-700 hidden md:inline"></span>

            {/* Font Resize controls */}
            <div className="flex items-center gap-1 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
              <button 
                onClick={() => setFontScale('sm')} 
                className={`px-1.5 py-0.5 rounded text-[10px] hover:text-white ${fontScale === 'sm' ? 'bg-gov-saffron text-white font-bold' : ''}`}
                title="Decrease Text Size"
              >
                A-
              </button>
              <button 
                onClick={() => setFontScale('md')} 
                className={`px-1.5 py-0.5 rounded text-[10px] hover:text-white ${fontScale === 'md' ? 'bg-gov-saffron text-white font-bold' : ''}`}
                title="Normal Text Size"
              >
                A
              </button>
              <button 
                onClick={() => setFontScale('lg')} 
                className={`px-1.5 py-0.5 rounded text-[10px] hover:text-white ${fontScale === 'lg' ? 'bg-gov-saffron text-white font-bold' : ''}`}
                title="Increase Text Size"
              >
                A+
              </button>
            </div>
            
            <span className="h-3 w-[1px] bg-slate-700"></span>

            {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')} 
              className="flex items-center gap-1 hover:text-white text-gov-saffron font-bold transition-colors"
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              {lang === 'EN' ? 'हिन्दी' : 'English'}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Official Main Brand Header */}
      <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200 py-3 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Brand Left: National Emblem & Company Brand Logo */}
          <div className="flex items-center gap-3.5">
            {/* National Emblem Silhouette Representation */}
            <div className="flex flex-col items-center border-r border-slate-200 pr-3.5">
              <div className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-full border border-slate-200">
                {/* Ashoka Chakra vector shape representation */}
                <Landmark className="w-6 h-6 text-gov-blue" />
              </div>
              <span className="text-[8px] font-bold text-slate-500 uppercase mt-0.5 tracking-wider">GIGW Compliance</span>
            </div>

            {/* Main Brand Logo - PAYECHO */}
            <div className="flex items-center gap-3">
              <img src={payechoLogo} className="h-14 md:h-12 w-auto object-contain bg-white/30 p-0.5 rounded" alt="Payecho Logo" />
              <div className="h-10 w-[1.5px] bg-slate-300 hidden sm:block"></div>
              <div className="flex flex-col justify-center">
                <h1 className="text-sm md:text-base font-extrabold text-gov-blue tracking-tight leading-none uppercase">
                  {lang === 'EN' ? (
                    <>
                      <span className="text-sky-600">Payecho</span> Solutions
                    </>
                  ) : (
                    <>
                      <span className="text-sky-600">पेइको</span> सॉल्यूशंस
                    </>
                  )}
                </h1>
                <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-1 block leading-tight">
                  {lang === 'EN' ? 'Digital Financial Inclusivity Portal' : 'डिजिटल वित्तीय समावेशन पोर्टल'}
                </span>
              </div>
            </div>
          </div>

          {/* Right side: Digital India, Make in India, Atmanirbhar Bharat emblems */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right">
              <span className="text-[10px] text-slate-400 block font-semibold">An Initiative Under</span>
              <span className="text-xs font-bold text-gov-blue uppercase tracking-wider">Digital India & Swachh Bharat</span>
            </div>
            <div className="flex items-center gap-3">
              {/* Digital India Flag style emblem */}
              <div className="px-3 py-1.5 bg-sky-50 rounded border border-sky-100 flex items-center gap-2 shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
                <span className="text-xs font-extrabold text-sky-800 tracking-tight">Digital India</span>
              </div>
              {/* Make in India lion themed badge */}
              <div className="px-3 py-1.5 bg-amber-50 rounded border border-amber-100 flex items-center gap-2 shadow-2xs">
                <span className="text-xs font-extrabold text-amber-800 tracking-tight">Make In India</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-100 text-gov-blue focus:outline-none focus:ring-2 focus:ring-gov-saffron"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 4. Main Navigation Bar (Sticky/Full Width) */}
      <div className="bg-gov-blue border-b border-gov-blue-dark shadow-md sticky top-0 z-40 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-stretch">
          
          {/* Navigation Links */}
          <nav className="flex items-stretch text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 xl:px-5 py-3.5 flex items-center text-center ${activeClass(link.path)}`}
              >
                {lang === 'EN' ? link.label : link.labelHi}
              </Link>
            ))}
          </nav>

          {/* User Sign up & Login CTAs */}
          <div className="flex items-center gap-2.5 px-4">
            <Link 
              to="/signup" 
              className="text-white hover:text-gov-saffron text-xs font-bold border border-white/20 hover:border-gov-saffron/40 px-3 py-1.5 rounded transition-all flex items-center gap-1"
            >
              <User className="w-3.5 h-3.5" />
              {lang === 'EN' ? 'Sign up' : 'साइन अप'}
            </Link>
            <Link 
              to="/login" 
              className="bg-gov-saffron hover:bg-amber-600 text-white text-xs font-extrabold px-4 py-1.5 rounded shadow-sm hover:shadow-md transition-all flex items-center gap-1 border-b-2 border-amber-700"
            >
              <span>{lang === 'EN' ? 'Login' : 'लॉग इन'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 5. Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-gov-blue border-t border-slate-700 shadow-2xl z-40 animate-fadeIn duration-200">
          <nav className="flex flex-col p-3 border-b border-gov-blue-dark">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded text-sm mb-1 ${
                  location.pathname === link.path 
                    ? 'bg-gov-saffron text-white font-bold' 
                    : 'text-slate-100 hover:bg-slate-800'
                }`}
              >
                {lang === 'EN' ? link.label : link.labelHi}
              </Link>
            ))}
            <div className="h-px bg-slate-700 my-2"></div>
            <div className="flex items-center gap-3 p-2">
              <Link 
                to="/signup" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center text-white border border-slate-600 py-2 rounded font-bold text-xs"
              >
                {lang === 'EN' ? 'Sign up' : 'साइन अप'}
              </Link>
              <Link 
                to="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center bg-gov-saffron hover:bg-amber-600 text-white py-2 rounded font-bold text-xs"
              >
                {lang === 'EN' ? 'Login' : 'लॉग इन'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}








































 {/* <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-black tracking-tight text-gov-blue">Pay</span>
                  <span className="text-xl font-black tracking-tight text-gov-saffron">echo</span>
                </div> */}