
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-primary min-h-screen flex items-center justify-center text-white overflow-hidden pt-16">
      {/* AI Network Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Neural Network Nodes */}
          <circle cx="100" cy="150" r="4" fill="currentColor" />
          <circle cx="300" cy="100" r="4" fill="currentColor" />
          <circle cx="500" cy="200" r="4" fill="currentColor" />
          <circle cx="700" cy="120" r="4" fill="currentColor" />
          <circle cx="900" cy="180" r="4" fill="currentColor" />
          <circle cx="1100" cy="140" r="4" fill="currentColor" />
          
          <circle cx="150" cy="350" r="4" fill="currentColor" />
          <circle cx="350" cy="300" r="4" fill="currentColor" />
          <circle cx="550" cy="400" r="4" fill="currentColor" />
          <circle cx="750" cy="320" r="4" fill="currentColor" />
          <circle cx="950" cy="380" r="4" fill="currentColor" />
          <circle cx="1050" cy="340" r="4" fill="currentColor" />
          
          <circle cx="200" cy="550" r="4" fill="currentColor" />
          <circle cx="400" cy="500" r="4" fill="currentColor" />
          <circle cx="600" cy="600" r="4" fill="currentColor" />
          <circle cx="800" cy="520" r="4" fill="currentColor" />
          <circle cx="1000" cy="580" r="4" fill="currentColor" />
          
          {/* Connection Lines */}
          <line x1="100" y1="150" x2="300" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="300" y1="100" x2="500" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="500" y1="200" x2="700" y2="120" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="700" y1="120" x2="900" y2="180" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="900" y1="180" x2="1100" y2="140" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          
          <line x1="150" y1="350" x2="350" y2="300" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="350" y1="300" x2="550" y2="400" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="550" y1="400" x2="750" y2="320" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="750" y1="320" x2="950" y2="380" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="950" y1="380" x2="1050" y2="340" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          
          <line x1="200" y1="550" x2="400" y2="500" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="400" y1="500" x2="600" y2="600" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="600" y1="600" x2="800" y2="520" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <line x1="800" y1="520" x2="1000" y2="580" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          
          {/* Vertical connections */}
          <line x1="100" y1="150" x2="150" y2="350" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="300" y1="100" x2="350" y2="300" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="500" y1="200" x2="550" y2="400" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="700" y1="120" x2="750" y2="320" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="900" y1="180" x2="950" y2="380" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          
          <line x1="150" y1="350" x2="200" y2="550" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="350" y1="300" x2="400" y2="500" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="550" y1="400" x2="600" y2="600" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="750" y1="320" x2="800" y2="520" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <line x1="950" y1="380" x2="1000" y2="580" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>
      
      <div className="absolute inset-0 bg-black/10"></div>
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
