import { useState } from 'react';
import LandingPage from './LandingPage';
import InteractiveProcessDiagram from './InteractiveProcessDiagram';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'process'>('landing');

  const handleEnterProcess = () => {
    setCurrentPage('process');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  if (currentPage === 'landing') {
    return <LandingPage onEnterProcess={handleEnterProcess} />;
  }

  return (
    <div className="App">
      {/* Header with back button and title */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleBackToLanding}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <h1 className="text-xl font-bold text-gray-800">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Breeze.AI
            </span>
            {' '}- Agent Accelerated Software Engineering Process
          </h1>
          
          {/* Company Logo */}
          <div className="flex items-center">
            <img 
              src="/company-logo.png" 
              alt="Company Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                // Fallback to placeholder if company logo doesn't load
                e.currentTarget.style.display = 'none';
                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextElement) nextElement.style.display = 'block';
              }}
            />
            {/* Fallback placeholder */}
            <div className="h-10 px-3 bg-gray-200 rounded flex items-center justify-center text-gray-600 text-sm font-medium" style={{display: 'none'}}>
              Company
            </div>
          </div>
        </div>
      </div>
      
      <InteractiveProcessDiagram />
    </div>
  );
}

export default App;