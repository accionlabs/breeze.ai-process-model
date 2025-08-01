import { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import Layout from './components/Layout';
import Challenge from './topics/Challenge';
import Architecture from './topics/Architecture';
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
    const newTopic = 'challenge';
    const newSubTopic = 'manual-translation-tax';
    
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
      case 'challenge':
        return (
          <Challenge 
            initialScreen={currentSubTopic || 'manual-translation-tax'}
            onNavigate={handleNavigate}
            currentTopic={currentTopic}
            currentSubTopic={currentSubTopic}
            onHome={handleBackToLanding}
          />
        );
      case 'architecture':
        return (
          <Architecture 
            initialScreen={currentSubTopic || 'overview'}
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
          <Challenge 
            initialScreen="manual-translation-tax"
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