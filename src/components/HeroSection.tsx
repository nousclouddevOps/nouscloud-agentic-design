
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-primary min-h-screen flex items-center justify-center text-white overflow-hidden pt-16">
      {/* Enhanced AI Network Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neural Network Nodes - Larger and more visible */}
          <circle cx="100" cy="150" r="6" fill="currentColor" className="animate-pulse" />
          <circle cx="300" cy="100" r="8" fill="currentColor" />
          <circle cx="500" cy="200" r="6" fill="currentColor" className="animate-pulse" />
          <circle cx="700" cy="120" r="7" fill="currentColor" />
          <circle cx="900" cy="180" r="6" fill="currentColor" className="animate-pulse" />
          <circle cx="1100" cy="140" r="8" fill="currentColor" />
          
          <circle cx="150" cy="350" r="7" fill="currentColor" />
          <circle cx="350" cy="300" r="6" fill="currentColor" className="animate-pulse" />
          <circle cx="550" cy="400" r="8" fill="currentColor" />
          <circle cx="750" cy="320" r="6" fill="currentColor" className="animate-pulse" />
          <circle cx="950" cy="380" r="7" fill="currentColor" />
          <circle cx="1050" cy="340" r="6" fill="currentColor" />
          
          <circle cx="200" cy="550" r="8" fill="currentColor" className="animate-pulse" />
          <circle cx="400" cy="500" r="6" fill="currentColor" />
          <circle cx="600" cy="600" r="7" fill="currentColor" className="animate-pulse" />
          <circle cx="800" cy="520" r="6" fill="currentColor" />
          <circle cx="1000" cy="580" r="8" fill="currentColor" className="animate-pulse" />
          
          {/* Connection Lines - More visible */}
          <line x1="100" y1="150" x2="300" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="300" y1="100" x2="500" y2="200" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="500" y1="200" x2="700" y2="120" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="700" y1="120" x2="900" y2="180" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="900" y1="180" x2="1100" y2="140" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          
          <line x1="150" y1="350" x2="350" y2="300" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="350" y1="300" x2="550" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="550" y1="400" x2="750" y2="320" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="750" y1="320" x2="950" y2="380" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="950" y1="380" x2="1050" y2="340" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          
          <line x1="200" y1="550" x2="400" y2="500" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="400" y1="500" x2="600" y2="600" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="600" y1="600" x2="800" y2="520" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <line x1="800" y1="520" x2="1000" y2="580" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          
          {/* Vertical connections - More visible */}
          <line x1="100" y1="150" x2="150" y2="350" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="300" y1="100" x2="350" y2="300" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="500" y1="200" x2="550" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="700" y1="120" x2="750" y2="320" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="900" y1="180" x2="950" y2="380" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          
          <line x1="150" y1="350" x2="200" y2="550" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="350" y1="300" x2="400" y2="500" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="550" y1="400" x2="600" y2="600" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="750" y1="320" x2="800" y2="520" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="950" y1="380" x2="1000" y2="580" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          
          {/* Additional AI-style elements */}
          <rect x="50" y="50" width="80" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <rect x="1070" y="680" width="80" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <rect x="580" y="50" width="80" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          
          {/* Data flow indicators */}
          <path d="M100 150 L110 140 L110 160 Z" fill="currentColor" opacity="0.7" />
          <path d="M500 200 L510 190 L510 210 Z" fill="currentColor" opacity="0.7" />
          <path d="M900 180 L910 170 L910 190 Z" fill="currentColor" opacity="0.7" />
        </svg>
      </div>
      
      {/* Floating AI elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
      </div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-inter mb-6 leading-tight">
            From Prompt to Pipeline
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Transforming Enterprises with Agentic AI
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
