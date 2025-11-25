import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id={SectionId.HOME}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-siunex-base"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-siunex-surface skew-x-12 translate-x-1/3 opacity-70 z-0" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-siunex-stone rounded-tr-[100px] opacity-20 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Side */}
        <div className="text-left animate-fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-siunex-gold/10 border border-siunex-gold/20 text-siunex-goldDark text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-siunex-gold" />
            <span className="hidden sm:inline">Joseph G. Dukuly — Founder</span>
            <span className="sm:hidden">Joseph G. Dukuly</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight text-siunex-dark mb-4 sm:mb-6 leading-[1.1]">
            Building the <br />
            <span className="text-siunex-gold italic">Future</span> of IT & Design.
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-siunex-muted mb-6 sm:mb-10 leading-relaxed font-light">
            SiuneX delivers integrated excellence in Software Development, Construction Management, Interior Design, and Renewable Energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <button
              onClick={() => scrollToSection(SectionId.PROJECTS)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-siunex-gold hover:bg-siunex-goldDark text-white rounded-sm font-medium transition-all transform hover:translate-x-1 flex items-center justify-center gap-3 shadow-xl shadow-siunex-gold/20 text-sm sm:text-base"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() => scrollToSection(SectionId.CONTACT)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-siunex-stone hover:border-siunex-goldDark text-siunex-dark hover:text-siunex-goldDark rounded-sm font-medium transition-all text-sm sm:text-base"
            >
              Consult With Us
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative lg:h-[600px] hidden lg:block animate-fade-in delay-200">
          <div className="absolute inset-0 bg-siunex-gold/20 rounded-tl-[100px] rounded-br-[100px] transform translate-x-4 translate-y-4" />
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
            alt="Modern Corporate Architecture"
            className="relative w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl filter brightness-105"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => scrollToSection(SectionId.ABOUT)}>
        <span className="text-xs uppercase tracking-widest text-siunex-muted">Discover</span>
        <div className="w-px h-12 bg-siunex-stone relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-siunex-gold animate-[drop_2s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;