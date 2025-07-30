import TopicCards from '../../components/TopicCards';
import Crisis from './Crisis';
import Evolution from './Evolution';
import Transformation from './Transformation';

interface SemanticEngineerProps {
  initialScreen?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  currentTopic: string;
  currentSubTopic?: string;
  onHome?: () => void;
}

const SemanticEngineer: React.FC<SemanticEngineerProps> = ({ 
  initialScreen = 'crisis',
  onNavigate,
  currentTopic,
  currentSubTopic,
  onHome
}) => {
  const cards = [
    { 
      id: 'crisis', 
      title: 'The Crisis', 
      description: 'Are software engineers redundant?',
      component: Crisis 
    },
    { 
      id: 'evolution', 
      title: 'Era Evolution', 
      description: 'Historical progression and complexity',
      component: Evolution 
    },
    { 
      id: 'transformation', 
      title: 'Four Dimensions', 
      description: 'Transformation paradigms',
      component: Transformation 
    }
  ];

  const handleComplete = () => {
    // Navigate to Process Flow when finished with Semantic Engineer
    onNavigate('process-flow', 'overview');
  };

  return (
    <TopicCards
      topicTitle="The Semantic Engineer"
      cards={cards}
      initialCard={initialScreen}
      onNavigate={onNavigate}
      onComplete={handleComplete}
      completionButtonText="Explore Process"
      currentTopic={currentTopic}
      currentSubTopic={currentSubTopic}
      onHome={onHome}
    />
  );
};

export default SemanticEngineer;