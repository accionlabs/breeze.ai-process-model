import TopicCards from '../../components/TopicCards';
import Overview from './Overview';
import FunctionalOntology from './FunctionalOntology';
import DesignOntology from './DesignOntology';
import ArchitectureOntology from './ArchitectureOntology';
import CodeOntology from './CodeOntology';
import Relationships from './Relationships';
import AgentsLayer from './AgentsLayer';

interface SemanticModelProps {
  initialScreen?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  currentTopic: string;
  currentSubTopic?: string;
  onHome?: () => void;
}

const cards = [
  {
    id: 'overview',
    title: 'Framework Overview',
    description: 'Four interconnected ontologies for comprehensive software engineering governance',
    component: Overview
  },
  {
    id: 'functional',
    title: 'Functional Ontology',
    description: 'Modality-agnostic representation of user needs and behaviors',
    component: FunctionalOntology
  },
  {
    id: 'design',
    title: 'Design Ontology',
    description: 'Physical implementation of user experience for specific modalities',
    component: DesignOntology
  },
  {
    id: 'architecture',
    title: 'Architecture Ontology',
    description: 'Logical technical design - services, layers, and system organization',
    component: ArchitectureOntology
  },
  {
    id: 'code',
    title: 'Code Ontology',
    description: 'Physical implementation units - executable code that realizes functionality',
    component: CodeOntology
  },
  {
    id: 'relationships',
    title: 'Cross-Ontology Relationships',
    description: 'Formal mappings enabling traceability and governance analytics',
    component: Relationships
  },
  {
    id: 'agents-layer',
    title: 'Agents Layer Deep Dive',
    description: 'Intelligent orchestration and autonomous agent capabilities',
    component: AgentsLayer
  }
];

const SemanticModel: React.FC<SemanticModelProps> = ({ 
  initialScreen, 
  onNavigate, 
  currentTopic, 
  currentSubTopic, 
  onHome 
}) => {
  return (
    <TopicCards 
      topicTitle="Semantic Model Structure"
      cards={cards}
      initialCard={initialScreen}
      onNavigate={onNavigate}
      currentTopic={currentTopic}
      currentSubTopic={currentSubTopic}
      onHome={onHome}
    />
  );
};

export default SemanticModel;