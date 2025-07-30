import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onEnterProcess: () => void;
  onEnterSemantic: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterSemantic }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 flex items-center justify-center p-6">
      {/* Company Logo - Top Right */}
      <div className="absolute top-6 right-6 z-10">
        <img 
          src="/breeze.ai-process-model/company-logo.png" 
          alt="Company Logo" 
          className="h-12 w-auto object-contain"
          onError={(e) => {
            // Fallback to placeholder if company logo doesn't load
            e.currentTarget.style.display = 'none';
            const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
            if (nextElement) nextElement.style.display = 'block';
          }}
        />
        {/* Fallback placeholder */}
        <div className="h-12 px-4 bg-gray-200 rounded flex items-center justify-center text-gray-600 text-sm font-medium" style={{display: 'none'}}>
          Company
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Logo Container */}
        <div className="mb-8">
          {/* Breeze.AI Video Logo */}
          <video 
            src="/breeze.ai-process-model/breeze-ai-logo.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto mb-4 rounded-2xl shadow-lg"
            onError={(e) => {
              // Fallback to placeholder if video doesn't load
              e.currentTarget.style.display = 'none';
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextElement) nextElement.style.display = 'flex';
            }}
          >
            Your browser does not support the video tag.
          </video>
          {/* Fallback placeholder */}
          <div className="mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg" style={{display: 'none', width: '200px', height: '200px'}}>
            <span className="text-white font-bold text-3xl">B.AI</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Breeze.AI
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
          The Future of Software Engineering
        </h2>

        {/* Storyline Overview */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Journey Ahead</h3>
            
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-red-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">The Crisis: Are Software Engineers Redundant?</h4>
                  <p className="text-gray-600">
                    AI systems can now code, test, deploy, and even design architectures. Traditional software engineering roles face unprecedented disruption. 
                    The question is no longer "if" but "how" engineers must evolve to remain relevant.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">The Evolution: From Code Writers to Semantic Engineers</h4>
                  <p className="text-gray-600">
                    Throughout history, each era automated the previous era's work. Now it's happening again. 
                    Engineers must transform across four dimensions and evolve into semantic engineers who orchestrate intelligent systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">The Model: A Unified Semantic Framework</h4>
                  <p className="text-gray-600">
                    Four interconnected ontologies provide comprehensive governance across application portfolios: 
                    Functional (what users want), Design (how it looks), Architecture (technical structure), and Code (what actually runs).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">The Process: Three-Phase Transformation</h4>
                  <p className="text-gray-600">
                    A practical methodology that transitions teams from manual development (15% manual) through balanced collaboration (30% manual) 
                    to full semantic engineering (5% manual) while maintaining quality and control.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how to navigate this transformation and position yourself at the forefront of software engineering's next evolution.
            </p>
            
            <button
              onClick={onEnterSemantic}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-2xl">🚀</span>
              Begin the Journey
              <ArrowRight className="w-6 h-6" />
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              Start with understanding the crisis facing software engineers today
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;