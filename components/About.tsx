import React from 'react';
import { Quote } from 'lucide-react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 relative bg-siunex-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <h2 className="text-siunex-gold font-semibold tracking-widest uppercase text-sm mb-3">Our Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-siunex-dark mb-8">
              Leadership & <br />
              <span className="italic text-siunex-muted">Vision</span>
            </h3>

            <div className="space-y-6 text-siunex-muted leading-relaxed text-lg font-light">
              <p>
                SiuneX was established by <strong>Joseph G. Dukuly</strong> to bridge the divide between physical infrastructure and digital innovation. We are more than a construction firm; we are architects of the future.
              </p>
              <p>
                From deploying complex IT networks to managing large-scale renewable energy projects, our multidisciplinary approach ensures that every client receives a holistic solution that is elegant, efficient, and enduring.
              </p>
            </div>

            <div className="mt-10 relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-siunex-stone opacity-50" />
              <div className="pl-6 border-l-2 border-siunex-gold pt-2 pb-2">
                <p className="text-xl font-serif italic text-siunex-dark">
                  "True elegance is found in the seamless integration of technology and design. We build not just for today, but for generations to come."
                </p>
                <p className="mt-4 text-sm font-bold text-siunex-goldDark uppercase tracking-wide">— Joseph G. Dukuly, Founder</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 border-2 border-siunex-gold rounded-sm transform translate-x-6 translate-y-6 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4" />
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto overflow-hidden rounded-sm shadow-xl">
              <img
                src="/assets/head.webp"
                alt="Joseph G. Dukuly"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;