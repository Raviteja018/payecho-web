import React, { useState } from 'react';
import Header from '../components/Header';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [fontScale, setFontScale] = useState<'sm' | 'md' | 'lg'>('md');

  const scaleClass = () => {
    switch (fontScale) {
      case 'sm': return 'font-scale-sm';
      case 'lg': return 'font-scale-lg';
      default: return '';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 antialiased ${scaleClass()}`}>
      {/* Government-style bilingual header & accessibility tools */}
      <Header fontScale={fontScale} setFontScale={setFontScale} />
      
      {/* Alert and news ticker bar */}
      <Marquee />
      
      {/* Main page content area */}
      <main id="main-content" className="flex-1 flex flex-col focus:outline-none">
        {children}
      </main>
      
      {/* Deep footer with links and download triggers */}
      <Footer />
    </div>
  );
}
