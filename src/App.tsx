import { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import Layout from './components/Layout';
import SemanticEngineer from './topics/SemanticEngineer';
import ProcessFlow from './topics/ProcessFlow';
import SemanticModel from './topics/SemanticModel';
import { parseUrlHash, updateUrlHash, getInitialRouteState } from './utils/urlRouter';

function App() {
  // Initialize state from URL
  const initialState = getInitialRouteState();
  const [currentPage, setCurrentPage] = useState<'landing' | 'topic'>(initialState.page);
  const [currentTopic, setCurrentTopic] = useState<string>(initialState.topic || 'semantic-engineer');
  const [currentSubTopic, setCurrentSubTopic] = useState<string | undefined>(initialState.subTopic);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const routeState = parseUrlHash();
      setCurrentPage(routeState.page);
      setCurrentTopic(routeState.topic || 'semantic-engineer');
      setCurrentSubTopic(routeState.subTopic);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleEnterProcess = () => {
    const newPage = 'topic';
    const newTopic = 'process-flow';
    const newSubTopic = 'overview';
    
    setCurrentPage(newPage);
    setCurrentTopic(newTopic);
    setCurrentSubTopic(newSubTopic);
    updateUrlHash(newPage, newTopic, newSubTopic);
  };

  const handleEnterSemantic = () => {
    const newPage = 'topic';
    const newTopic = 'semantic-engineer';
    const newSubTopic = 'crisis';
    
    setCurrentPage(newPage);
    setCurrentTopic(newTopic);
    setCurrentSubTopic(newSubTopic);
    updateUrlHash(newPage, newTopic, newSubTopic);
  };

  const handleBackToLanding = () => {
    const newPage = 'landing';
    
    setCurrentPage(newPage);
    setCurrentTopic('semantic-engineer');
    setCurrentSubTopic(undefined);
    updateUrlHash(newPage);
  };

  const handleNavigate = (topicId: string, subTopicId?: string) => {
    const newPage = 'topic';
    
    setCurrentPage(newPage);
    setCurrentTopic(topicId);
    setCurrentSubTopic(subTopicId);
    updateUrlHash(newPage, topicId, subTopicId);
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