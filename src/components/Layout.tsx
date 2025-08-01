import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  currentTopic: string;
  currentSubTopic?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  onHome: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentTopic, currentSubTopic, onNavigate, onHome }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 print:bg-white">
      {/* Navigation - Hidden in print */}
      <div className="print:hidden">
        <Navigation 
          currentTopic={currentTopic}
          currentSubTopic={currentSubTopic}
          onNavigate={onNavigate}
          onHome={onHome}
        />
      </div>

      {/* Main Content */}
      <main className="lg:pl-80 print:pl-0">
        <div className="min-h-screen print:min-h-0">
          {/* Header Space for Mobile Menu - Hidden in print */}
          <div className="lg:hidden h-16 print:hidden" />
          
          {/* Content */}
          <div className="p-6 print:p-4">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;