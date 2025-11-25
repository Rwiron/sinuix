import React from 'react';
import { Layers, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-siunex-dark text-siunex-surface pt-20 pb-10 border-t border-siunex-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Layers className="w-6 h-6 text-siunex-gold" />
              <span className="text-2xl font-serif font-bold text-white">Siune<span className="text-siunex-gold">X</span></span>
            </div>
            <p className="text-siunex-stone text-sm leading-relaxed max-w-xs font-light">
              Excellence in Construction, Design, IT, and Renewable Energy. Building a sophisticated and sustainable future under the leadership of Joseph G. Dukuly.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm text-siunex-stone">
              <li className="hover:text-siunex-gold cursor-pointer transition-colors">General Construction</li>
              <li className="hover:text-siunex-gold cursor-pointer transition-colors">Interior & Exterior Design</li>
              <li className="hover:text-siunex-gold cursor-pointer transition-colors">Software & IT</li>
              <li className="hover:text-siunex-gold cursor-pointer transition-colors">Renewable Energy</li>
              <li className="hover:text-siunex-gold cursor-pointer transition-colors">Electrical Equipment</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm text-siunex-stone">
              <li className="hover:text-siunex-gold cursor-pointer transition-colors">About Joseph G. Dukuly</li>
              <li className="hover:text-siunex-gold cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-siunex-gold cursor-pointer transition-colors">News & Press</li>
              <li className="hover:text-siunex-gold cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-6 tracking-wide">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full text-siunex-stone hover:text-siunex-gold hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-siunex-stone hover:text-siunex-gold hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-siunex-stone hover:text-siunex-gold hover:bg-white/10 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-siunex-stone hover:text-siunex-gold hover:bg-white/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-siunex-stone/10 flex flex-col md:flex-row justify-between items-center text-siunex-muted text-xs">
          <p>&copy; {new Date().getFullYear()} SiuneX Inc. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-medium text-siunex-stone">Founder: Joseph G. Dukuly</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;