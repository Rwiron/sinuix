import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, User, Newspaper } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-siunex-base animate-scale-in">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-siunex-base/90 backdrop-blur border-b border-siunex-stone py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-siunex-muted hover:text-siunex-gold transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-siunex-dark/90 via-siunex-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 mb-4 bg-siunex-gold text-white text-xs font-bold uppercase tracking-widest rounded-sm">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              {project.title}
            </h1>
          </div>
        </div>
      </header>

      {/* Details & News */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-sm border border-siunex-stone shadow-sm">
              <h3 className="font-serif font-bold text-xl text-siunex-dark mb-4 pb-2 border-b border-siunex-stone">Project Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-siunex-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-siunex-muted uppercase tracking-wider">Client</p>
                    <p className="text-siunex-dark font-medium">{project.client || 'Confidential'}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-siunex-gold mt-0.5" />
                  <div>
                    <p className="text-xs text-siunex-muted uppercase tracking-wider">Completion</p>
                    <p className="text-siunex-dark font-medium">{project.completionDate || 'Ongoing'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-stone">
              <h3 className="font-serif font-bold text-xl text-siunex-dark">Overview</h3>
              <p className="text-siunex-muted leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Right Column: News */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Newspaper className="w-6 h-6 text-siunex-gold" />
              <h2 className="text-3xl font-serif font-bold text-siunex-dark">Project News & Updates</h2>
            </div>

            {project.news && project.news.length > 0 ? (
              <div className="space-y-6">
                {project.news.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-sm border-l-4 border-siunex-gold shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-siunex-dark">{item.title}</h4>
                      <span className="text-sm text-siunex-gold font-medium bg-siunex-surface px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">{item.date}</span>
                    </div>
                    <p className="text-siunex-muted">{item.excerpt}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-siunex-surface rounded-sm text-center border border-dashed border-siunex-stone">
                <p className="text-siunex-muted italic">No recent updates available for this project.</p>
              </div>
            )}
            
            <div className="mt-12 p-8 bg-siunex-dark text-white rounded-sm">
              <h3 className="text-2xl font-serif mb-2">Interested in a similar project?</h3>
              <p className="text-siunex-stone mb-6">Contact our team to discuss how we can bring your vision to life.</p>
              <button 
                onClick={onBack} // Ideally this scrolls to contact, but for now back to main view
                className="bg-siunex-gold hover:bg-siunex-goldDark text-white px-6 py-3 rounded-sm font-medium transition-colors"
              >
                Return to Contact
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;