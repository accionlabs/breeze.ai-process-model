import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onEnterProcess: () => void;
  onEnterSemantic: () => void;
  onEnterArchitecture: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterSemantic, onEnterArchitecture }) => {
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
          Semantic Engineering Framework
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Eliminate the "Manual Translation Tax" with machine-readable knowledge graphs that automate 95% of development 
          while preserving complete human control over business logic and architecture.
        </p>

        {/* Storyline Overview */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Transforming Software Engineering</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* The Challenge */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-3">The Challenge</h4>
                <p className="text-gray-600 text-sm mb-4">
                  The "Manual Translation Tax" - massive costs from translating human requirements into code, 
                  causing specification drift, technical debt, and project failures.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div>• Manual Translation Tax Crisis</div>
                  <div>• Why Traditional Approaches Fail</div>
                  <div>• Legacy System Transformation</div>
                </div>
              </div>

              {/* The Solution */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-3">The Solution</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Machine-readable semantic knowledge graphs that eliminate ambiguity and enable 
                  perfect traceability from requirements to code.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div>• Revolutionary Capabilities</div>
                  <div>• Competitive Advantages</div>
                  <div>• System Architecture</div>
                </div>
              </div>

              {/* The Framework */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-3">The Framework</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Four interconnected ontologies (Functional, Design, Architecture, Code) with 
                  three-phase transformation methodology.
                </p>
                <div className="space-y-2 text-xs text-gray-500">
                  <div>• Semantic Model Structure</div>
                  <div>• Process Flow Methodology</div>
                  <div>• Cross-Ontology Relationships</div>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200 text-center">
              <h4 className="font-bold text-gray-800 mb-3">Why This Matters Now</h4>
              <p className="text-gray-700 text-lg mb-4">
                <strong>95% automation</strong> of software development while maintaining <strong>complete human control </strong> 
                over business logic and architectural decisions
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Zero specification drift</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Perfect traceability</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Automatic change propagation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🎯</span>
                Quick Start: Understanding the Problem
              </h4>
              <p className="text-gray-600 mb-4">
                Begin with the core challenge facing software engineering today and see how Breeze.AI provides a breakthrough solution.
              </p>
              <button
                onClick={onEnterSemantic}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Start with The Challenge
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">🏛️</span>
                Deep Dive: System Architecture
              </h4>
              <p className="text-gray-600 mb-4">
                Explore the technical architecture, core components, and engineering principles behind the Breeze.AI platform.
              </p>
              <button
                onClick={onEnterArchitecture}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Explore Architecture
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Features Highlight */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl text-center">
            <h4 className="font-bold mb-3 flex items-center justify-center gap-2">
              <span className="text-xl">🎪</span>
              Interactive Presentation Mode
            </h4>
            <p className="mb-4 opacity-90">
              This guide features an interactive slide mode - perfect for presentations, training, or focused learning. 
              Toggle between document and slide views anytime!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <span>📖</span>
                <span>Document Mode</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <span>🖼️</span>
                <span>Slide Mode</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <span>⌨️</span>
                <span>Keyboard Navigation</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <span>🖨️</span>
                <span>Print Friendly</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;