import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-siunex-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-siunex-gold font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-siunex-dark mb-6">Start Your Project</h3>
            <p className="text-siunex-muted mb-12 text-lg font-light leading-relaxed">
              Ready to transform your vision into reality? Our team at SiuneX is prepared to manage your construction, IT, or design needs with unparalleled professionalism.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white shadow-md border border-siunex-stone/20 rounded-sm text-siunex-gold group-hover:bg-siunex-gold group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-siunex-dark font-serif font-bold text-lg">SiuneX HQ</h4>
                  <p className="text-siunex-muted">123 Innovation Blvd, Suite 500</p>
                  <p className="text-siunex-muted">Metropolis, USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white shadow-md border border-siunex-stone/20 rounded-sm text-siunex-gold group-hover:bg-siunex-gold group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-siunex-dark font-serif font-bold text-lg">Email</h4>
                  <p className="text-siunex-muted">info@siunex.com</p>
                  <p className="text-siunex-muted">projects@siunex.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-white shadow-md border border-siunex-stone/20 rounded-sm text-siunex-gold group-hover:bg-siunex-gold group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-siunex-dark font-serif font-bold text-lg">Phone</h4>
                  <p className="text-siunex-muted">+1 (555) 000-0000</p>
                  <p className="text-siunex-muted">Mon-Fri, 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-sm border border-siunex-stone shadow-2xl shadow-siunex-stone/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-siunex-muted">First Name</label>
                  <input type="text" className="w-full bg-siunex-base border border-siunex-stone rounded-sm px-4 py-3 text-siunex-dark focus:outline-none focus:border-siunex-gold transition-colors" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-siunex-muted">Last Name</label>
                  <input type="text" className="w-full bg-siunex-base border border-siunex-stone rounded-sm px-4 py-3 text-siunex-dark focus:outline-none focus:border-siunex-gold transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-siunex-muted">Email</label>
                <input type="email" className="w-full bg-siunex-base border border-siunex-stone rounded-sm px-4 py-3 text-siunex-dark focus:outline-none focus:border-siunex-gold transition-colors" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-siunex-muted">Service Required</label>
                <select className="w-full bg-siunex-base border border-siunex-stone rounded-sm px-4 py-3 text-siunex-dark focus:outline-none focus:border-siunex-gold transition-colors">
                  <option>General Construction</option>
                  <option>Interior & Exterior Design</option>
                  <option>Software & IT Services</option>
                  <option>Renewable Energy</option>
                  <option>Electrical Equipment</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-siunex-muted">Message</label>
                <textarea rows={4} className="w-full bg-siunex-base border border-siunex-stone rounded-sm px-4 py-3 text-siunex-dark focus:outline-none focus:border-siunex-gold transition-colors" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-siunex-dark hover:bg-siunex-gold text-white font-bold py-4 rounded-sm transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 shadow-lg">
                Submit Inquiry
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;