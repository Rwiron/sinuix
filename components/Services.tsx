import React from 'react';
import { HardHat, PenTool, Monitor, Sun, Zap } from 'lucide-react';
import { SectionId, ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: 'construction',
    title: 'General Construction PM',
    description: 'Comprehensive project management for complex builds. We oversee every phase from groundbreaking to ribbon-cutting with precision.',
    icon: <HardHat className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'design',
    title: 'Interior & Exterior Design',
    description: 'Crafting elegant spaces. Our design philosophy merges modern aesthetics with functional luxury for both interiors and facades.',
    icon: <PenTool className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'software',
    title: 'Software & IT Services',
    description: 'Bespoke digital solutions. From enterprise software development to IT infrastructure management.',
    icon: <Monitor className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'energy',
    title: 'Renewable Energy',
    description: 'Sustainable power solutions. Implementing cutting-edge solar and wind energy systems for a greener tomorrow.',
    icon: <Sun className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'electrical',
    title: 'Electrical Equipment',
    description: 'Industrial-grade electrical supply and installation. Ensuring safety and efficiency in power distribution.',
    icon: <Zap className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-32 bg-siunex-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-siunex-gold font-semibold tracking-widest uppercase text-sm mb-3">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-siunex-dark">Integrated Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              className={`group bg-siunex-base p-6 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 border border-siunex-stone hover:border-siunex-gold ${index === 3 || index === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="p-3 bg-siunex-surface rounded-full text-siunex-gold group-hover:bg-siunex-gold group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-6xl font-serif text-siunex-surface group-hover:text-siunex-stone/20 transition-colors duration-300 select-none">
                  0{index + 1}
                </span>
              </div>
              
              <div className="relative overflow-hidden h-48 rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div>
                <h4 className="text-2xl font-serif font-bold text-siunex-dark mb-3 group-hover:text-siunex-gold transition-colors">{service.title}</h4>
                <p className="text-siunex-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;