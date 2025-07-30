import { useState } from 'react';
import { ChevronRight, Menu, X, Brain, Workflow, Home, Database } from 'lucide-react';

interface NavigationItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  subItems?: {
    id: string;
    title: string;
    description?: string;
  }[];
}

interface NavigationProps {
  currentTopic: string;
  currentSubTopic?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  onHome: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentTopic, currentSubTopic, onNavigate, onHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set([currentTopic]));

  const navigationItems: NavigationItem[] = [
    {
      id: 'semantic-engineer',
      title: 'The Semantic Engineer',
      icon: <Brain className="w-5 h-5" />,
      subItems: [
        { id: 'crisis', title: 'The Crisis', description: 'Are software engineers redundant?' },
        { id: 'evolution', title: 'Era Evolution', description: 'Historical progression and complexity' },
        { id: 'transformation', title: 'Four Dimensions', description: 'Transformation paradigms' }
      ]
    },
    {
      id: 'semantic-model',
      title: 'Semantic Model Structure',
      icon: <Database className="w-5 h-5" />,
      subItems: [
        { id: 'overview', title: 'Framework Overview', description: 'Four interconnected ontologies' },
        { id: 'functional', title: 'Functional Ontology', description: 'Modality-agnostic user needs' },
        { id: 'design', title: 'Design Ontology', description: 'Physical UX implementation' },
        { id: 'architecture', title: 'Architecture Ontology', description: 'Logical technical design' },
        { id: 'code', title: 'Code Ontology', description: 'Physical implementation units' },
        { id: 'relationships', title: 'Cross-Ontology Relationships', description: 'Formal mappings and governance' },
        { id: 'agents-layer', title: 'Agents Layer Deep Dive', description: 'Intelligent orchestration and autonomous capabilities' }
      ]
    },
    {
      id: 'process-flow',
      title: 'Breeze.AI Process',
      icon: <Workflow className="w-5 h-5" />,
      subItems: [
        { id: 'overview', title: 'Process Overview', description: 'Three-phase methodology introduction' },
        { id: 'phase1', title: 'Phase 1: Foundation', description: 'Semantic Engineering Foundation (15% Manual)' },
        { id: 'phase2', title: 'Phase 2: Evolution', description: 'Semantic Engineering Evolution (30% Manual)' },
        { id: 'phase3', title: 'Phase 3: Semantic First', description: 'Semantic First Engineering (5% Manual)' }
      ]
    }
  ];

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const handleNavigate = (topicId: string, subTopicId?: string) => {
    onNavigate(topicId, subTopicId);
    setIsOpen(false);
  };

  const NavigationContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <button
          onClick={onHome}
          className="flex items-center gap-3 text-purple-600 hover:text-purple-700 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="font-bold">Breeze.AI</span>
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <div key={item.id}>
              {/* Main Item */}
              <button
                onClick={() => {
                  if (item.subItems) {
                    // If the topic is collapsed, expand it and navigate to first sub-topic
                    if (!expandedItems.has(item.id)) {
                      toggleExpanded(item.id);
                      const firstSubTopic = item.subItems[0];
                      if (firstSubTopic) {
                        handleNavigate(item.id, firstSubTopic.id);
                      }
                    } else {
                      // If already expanded, just toggle collapse
                      toggleExpanded(item.id);
                    }
                  } else {
                    // If no sub-items, navigate directly to the topic
                    handleNavigate(item.id);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                  currentTopic === item.id
                    ? 'bg-purple-100 text-purple-700 border border-purple-200'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </div>
                {item.subItems && (
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      expandedItems.has(item.id) ? 'rotate-90' : ''
                    }`}
                  />
                )}
              </button>

              {/* Sub Items */}
              {item.subItems && expandedItems.has(item.id) && (
                <div className="ml-4 mt-2 space-y-1">
                  {item.subItems.map((subItem) => {
                    const isCurrentSubTopic = currentTopic === item.id && currentSubTopic === subItem.id;
                    return (
                      <button
                        key={subItem.id}
                        onClick={() => handleNavigate(item.id, subItem.id)}
                        className={`w-full text-left p-2 rounded-md text-sm transition-colors ${
                          isCurrentSubTopic
                            ? 'bg-blue-100 text-blue-800 border border-blue-200'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                        }`}
                      >
                        <div className={`font-medium ${isCurrentSubTopic ? 'text-blue-900' : ''}`}>
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <div className={`text-xs mt-1 ${
                            isCurrentSubTopic ? 'text-blue-700' : 'text-gray-500'
                          }`}>
                            {subItem.description}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          © 2025 Accion Labs
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0 bg-white border-r border-gray-200 shadow-sm">
        <NavigationContent />
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl">
            <NavigationContent />
          </aside>
        </div>
      )}
    </>
  );
};

export default Navigation;