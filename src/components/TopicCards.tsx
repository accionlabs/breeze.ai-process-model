import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface TopicCard {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType<any>;
}

interface TopicCardsProps {
  topicTitle: string;
  cards: TopicCard[];
  initialCard?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  onComplete?: () => void;
  completionButtonText?: string;
  currentTopic: string;
  currentSubTopic?: string;
  onHome?: () => void;
}

const TopicCards: React.FC<TopicCardsProps> = ({ 
  topicTitle,
  cards,
  initialCard,
  onNavigate,
  onComplete,
  completionButtonText = "Continue",
  currentTopic,
  currentSubTopic,
  onHome
}) => {
  const [currentCardId, setCurrentCardId] = useState(initialCard || cards[0]?.id);

  // Sync internal state when initialCard prop changes (from external navigation)
  useEffect(() => {
    if (initialCard && initialCard !== currentCardId) {
      setCurrentCardId(initialCard);
    }
  }, [initialCard, currentCardId]);

  // Scroll to top when subtopic changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSubTopic]);

  // Define the full navigation structure
  const navigationStructure = [
    {
      id: 'semantic-engineer',
      title: 'The Semantic Engineer',
      subItems: [
        { id: 'crisis', title: 'The Crisis' },
        { id: 'evolution', title: 'Era Evolution' },
        { id: 'transformation', title: 'Four Dimensions' }
      ]
    },
    {
      id: 'semantic-model',
      title: 'Semantic Model Structure',
      subItems: [
        { id: 'overview', title: 'Framework Overview' },
        { id: 'functional', title: 'Functional Ontology' },
        { id: 'design', title: 'Design Ontology' },
        { id: 'architecture', title: 'Architecture Ontology' },
        { id: 'code', title: 'Code Ontology' },
        { id: 'relationships', title: 'Cross-Ontology Relationships' },
        { id: 'agents-layer', title: 'Agents Layer Deep Dive' }
      ]
    },
    {
      id: 'process-flow',
      title: 'Breeze.AI Process',
      subItems: [
        { id: 'overview', title: 'Process Overview' },
        { id: 'phase1', title: 'Phase 1: Foundation' },
        { id: 'phase2', title: 'Phase 2: Evolution' },
        { id: 'phase3', title: 'Phase 3: Semantic First' }
      ]
    }
  ];

  const currentIndex = cards.findIndex(card => card.id === currentCardId);
  const currentCard = cards[currentIndex];
  const CurrentComponent = currentCard?.component;

  // Get previous/next navigation info
  const getCurrentPosition = () => {
    for (let topicIndex = 0; topicIndex < navigationStructure.length; topicIndex++) {
      const topic = navigationStructure[topicIndex];
      const subIndex = topic.subItems.findIndex(sub => sub.id === currentSubTopic);
      if (subIndex !== -1) {
        return { topicIndex, subIndex };
      }
    }
    return null;
  };

  const getPreviousItem = () => {
    const position = getCurrentPosition();
    if (!position) return null;

    const { topicIndex, subIndex } = position;
    
    if (subIndex > 0) {
      // Previous subtopic in same topic
      const prevSub = navigationStructure[topicIndex].subItems[subIndex - 1];
      return {
        topicId: navigationStructure[topicIndex].id,
        subTopicId: prevSub.id,
        title: prevSub.title
      };
    } else if (topicIndex > 0) {
      // Last subtopic of previous topic
      const prevTopic = navigationStructure[topicIndex - 1];
      const lastSub = prevTopic.subItems[prevTopic.subItems.length - 1];
      return {
        topicId: prevTopic.id,
        subTopicId: lastSub.id,
        title: lastSub.title
      };
    }
    return null;
  };

  const getNextItem = () => {
    const position = getCurrentPosition();
    if (!position) return null;

    const { topicIndex, subIndex } = position;
    const currentTopicSubs = navigationStructure[topicIndex].subItems;
    
    if (subIndex < currentTopicSubs.length - 1) {
      // Next subtopic in same topic
      const nextSub = currentTopicSubs[subIndex + 1];
      return {
        topicId: navigationStructure[topicIndex].id,
        subTopicId: nextSub.id,
        title: nextSub.title
      };
    } else if (topicIndex < navigationStructure.length - 1) {
      // First subtopic of next topic
      const nextTopic = navigationStructure[topicIndex + 1];
      const firstSub = nextTopic.subItems[0];
      return {
        topicId: nextTopic.id,
        subTopicId: firstSub.id,
        title: firstSub.title
      };
    }
    return null;
  };

  const goToCard = (cardId: string) => {
    setCurrentCardId(cardId);
    // Get the current topic from the parent component
    // Since we can't reliably extract from URL, we'll need to pass it down
    // For now, we'll determine it based on the topicTitle
    const topicId = topicTitle === 'The Semantic Engineer' ? 'semantic-engineer' : 
                   topicTitle === 'Semantic Model Structure' ? 'semantic-model' : 
                   'process-flow';
    onNavigate(topicId, cardId);
  };

  const goToPrevious = () => {
    const prevItem = getPreviousItem();
    if (prevItem) {
      onNavigate(prevItem.topicId, prevItem.subTopicId);
    }
  };

  const goToNext = () => {
    const nextItem = getNextItem();
    if (nextItem) {
      onNavigate(nextItem.topicId, nextItem.subTopicId);
    } else if (onComplete) {
      onComplete();
    }
  };


  // Get current topic and subtopic info for breadcrumbs
  const getCurrentTopicInfo = () => {
    const topic = navigationStructure.find(t => t.id === currentTopic);
    const subTopic = topic?.subItems.find(s => s.id === currentSubTopic);
    return { topic, subTopic };
  };

  const { topic, subTopic } = getCurrentTopicInfo();

  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <div className="flex items-center space-x-2 text-sm">
          {/* Home */}
          {onHome && (
            <button
              onClick={onHome}
              className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
          )}
          
          {/* Separator */}
          {onHome && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
          
          {/* Current Topic */}
          <button
            onClick={() => topic && onNavigate(topic.id, topic.subItems[0]?.id)}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            {topic?.title}
          </button>
          
          {/* Separator */}
          {subTopic && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
          
          {/* Current Subtopic */}
          {subTopic && (
            <span className="text-gray-900 font-medium">
              {subTopic.title}
            </span>
          )}
        </div>
      </nav>

      {/* Current Card Content */}
      <div className="mb-8">
        {CurrentComponent && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <CurrentComponent 
              onNavigate={goToCard} 
              onNext={goToNext}
              onPrevious={goToPrevious}
            />
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center py-6 border-t border-gray-200">
        {(() => {
          const prevItem = getPreviousItem();
          return (
            <button
              onClick={goToPrevious}
              disabled={!prevItem}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                !prevItem
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <div className="text-left">
                {prevItem && (
                  <>
                    <div className="text-xs text-gray-500">Previous</div>
                    <div className="text-sm font-medium">{prevItem.title}</div>
                  </>
                )}
              </div>
            </button>
          );
        })()}

        <div className="flex-1"></div>

        {(() => {
          const nextItem = getNextItem();
          return (
            <button
              onClick={goToNext}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              <div className="text-right">
                {nextItem ? (
                  <>
                    <div className="text-xs text-blue-200">Next</div>
                    <div className="text-sm font-medium">{nextItem.title}</div>
                  </>
                ) : (
                  <div className="text-sm font-medium">{completionButtonText}</div>
                )}
              </div>
              <ChevronRight className="w-5 h-5" />
            </button>
          );
        })()}
      </div>
    </div>
  );
};

export default TopicCards;