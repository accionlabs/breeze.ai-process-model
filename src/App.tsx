import { useState } from 'react';
import LandingPage from './LandingPage';
import Layout from './components/Layout';
import SemanticEngineer from './topics/SemanticEngineer';
import ProcessFlow from './topics/ProcessFlow';
import SemanticModel from './topics/SemanticModel';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'topic'>('landing');
  const [currentTopic, setCurrentTopic] = useState<string>('semantic-engineer');
  const [currentSubTopic, setCurrentSubTopic] = useState<string | undefined>(undefined);

  const handleEnterProcess = () => {
    setCurrentPage('topic');
    setCurrentTopic('process-flow');
    setCurrentSubTopic('overview');
  };

  const handleEnterSemantic = () => {
    setCurrentPage('topic');
    setCurrentTopic('semantic-engineer');
    setCurrentSubTopic('crisis');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    setCurrentTopic('semantic-engineer');
    setCurrentSubTopic(undefined);
  };

  const handleNavigate = (topicId: string, subTopicId?: string) => {
    setCurrentPage('topic');
    setCurrentTopic(topicId);
    setCurrentSubTopic(subTopicId);
  };

  if (currentPage === 'landing') {
    return <LandingPage onEnterProcess={handleEnterProcess} onEnterSemantic={handleEnterSemantic} />;
  }

  const renderCurrentTopic = () => {
    switch (currentTopic) {
      case 'semantic-engineer':
        return (
          <SemanticEngineer 
            initialScreen={currentSubTopic || 'crisis'}
            onNavigate={handleNavigate}
            currentTopic={currentTopic}
            currentSubTopic={currentSubTopic}
            onHome={handleBackToLanding}
          />
        );
      case 'process-flow':
        return (
          <ProcessFlow 
            initialScreen={currentSubTopic || 'overview'}
            onNavigate={handleNavigate}
            currentTopic={currentTopic}
            currentSubTopic={currentSubTopic}
            onHome={handleBackToLanding}
          />
        );
      case 'semantic-model':
        return (
          <SemanticModel 
            initialScreen={currentSubTopic || 'overview'}
            onNavigate={handleNavigate}
            currentTopic={currentTopic}
            currentSubTopic={currentSubTopic}
            onHome={handleBackToLanding}
          />
        );
      default:
        return (
          <SemanticEngineer 
            initialScreen="crisis"
            onNavigate={handleNavigate}
            currentTopic={currentTopic}
            currentSubTopic={currentSubTopic}
            onHome={handleBackToLanding}
          />
        );
    }
  };

  return (
    <Layout
      currentTopic={currentTopic}
      currentSubTopic={currentSubTopic}
      onNavigate={handleNavigate}
      onHome={handleBackToLanding}
    >
      {renderCurrentTopic()}
    </Layout>
  );
}

export default App;