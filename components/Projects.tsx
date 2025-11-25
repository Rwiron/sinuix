import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionId, Project } from '../types';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const projects: Project[] = [
    { 
      id: 1, 
      title: "The Meridian Loft", 
      category: "Interior Design", 
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      description: "A complete renovation of a 5,000 sq ft industrial space into a luxury residence. Features include smart lighting systems, custom joinery, and sustainable material sourcing.",
      client: "Private Client",
      completionDate: "October 2023",
      news: [
        { id: 'n1', date: 'Oct 2023', title: 'Project Completion', excerpt: 'Final handover completed successfully with zero defects.' },
        { id: 'n2', date: 'Aug 2023', title: 'Design Award Nomination', excerpt: 'Meridian Loft nominated for Best Interior Retrofit 2023.' }
      ]
    },
    { 
      id: 2, 
      title: "Solar Array Alpha", 
      category: "Renewable Energy", 
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
      description: "Installation of a 2MW solar farm providing sustainable energy to the local industrial park. Integrated with smart grid technology for optimal efficiency.",
      client: "EcoTech Industries",
      completionDate: "January 2024",
      news: [
        { id: 'n3', date: 'Jan 2024', title: 'Grid Connection Live', excerpt: 'The array is now fully operational and feeding into the grid.' },
        { id: 'n4', date: 'Dec 2023', title: 'Efficiency Testing', excerpt: 'Initial tests show 15% higher output than projected.' }
      ]
    },
    { 
      id: 3, 
      title: "Apex Enterprise System", 
      category: "Software & IT", 
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      description: "Development of a custom ERP solution for a multinational logistics firm. Included cloud migration, AI-driven analytics, and mobile app interface.",
      client: "Global Logistics Corp",
      completionDate: "Ongoing",
      news: [
        { id: 'n5', date: 'Mar 2024', title: 'Module 3 Rollout', excerpt: 'Logistics tracking module deployed to European centers.' },
        { id: 'n6', date: 'Feb 2024', title: 'AI Integration', excerpt: 'Predictive maintenance algorithms now active.' }
      ]
    },
    { 
      id: 4, 
      title: "Substation Delta", 
      category: "Electrical Equipment", 
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
      description: "Supply and installation of high-voltage switchgear for a new metropolitan substation. Ensured compliance with all safety and environmental regulations.",
      client: "City Power Authority",
      completionDate: "November 2023",
      news: [
        { id: 'n7', date: 'Nov 2023', title: 'Safety Certification', excerpt: 'Site achieved 100% safety rating during inspection.' }
      ]
    },
  ];

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-siunex-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-siunex-stone pb-8">
          <div>
            <h2 className="text-siunex-gold font-semibold tracking-widest uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-siunex-dark">Selected Works</h3>
          </div>
          <div className="hidden md:block text-siunex-muted italic font-serif">
            Click on a project to view updates
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => onProjectSelect(project)}
              className="group relative overflow-hidden cursor-pointer bg-white shadow-lg rounded-sm"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-siunex-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
                <span className="text-siunex-gold text-sm font-bold uppercase tracking-widest mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.category}
                </span>
                <h4 className="text-3xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 mb-6">
                  {project.title}
                </h4>
                <span className="text-white border border-white/30 px-6 py-2 rounded-full text-sm hover:bg-siunex-gold hover:border-siunex-gold transition-all translate-y-4 group-hover:translate-y-0 duration-500 delay-300 flex items-center gap-2">
                  View Project News <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;