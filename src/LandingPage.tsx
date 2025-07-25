import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onEnterProcess: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterProcess }) => {
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
          Transitioning from Manual Development to Semantic Engineering
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          This three-phase methodology leverages the Breeze.AI framework to transition software development from traditional human-driven processes to AI-augmented semantic engineering, maintaining quality through continuous validation and human oversight.
        </p>

        {/* CTA Button */}
        <button
          onClick={onEnterProcess}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Explore Process Flow
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};

export default LandingPage;