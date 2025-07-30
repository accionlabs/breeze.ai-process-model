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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <Navigation 
        currentTopic={currentTopic}
        currentSubTopic={currentSubTopic}
        onNavigate={onNavigate}
        onHome={onHome}
      />

      {/* Main Content */}
      <main className="lg:pl-80">
        <div className="min-h-screen">
          {/* Header Space for Mobile Menu */}
          <div className="lg:hidden h-16" />
          
          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;