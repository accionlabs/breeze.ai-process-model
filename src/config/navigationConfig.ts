// Central navigation configuration for the entire application
export interface SubTopicItem {
  id: string;
  title: string;
  description?: string;
}

export interface TopicItem {
  id: string;
  title: string;
  subItems: SubTopicItem[];
}

export const navigationConfig: TopicItem[] = [
  {
    id: 'semantic-engineer',
    title: 'The Semantic Engineer',
    subItems: [
      { id: 'crisis', title: 'The Crisis', description: 'Are software engineers redundant?' },
      { id: 'evolution', title: 'Era Evolution', description: 'Historical progression and complexity' },
      { id: 'transformation', title: 'Four Dimensions', description: 'Transformation paradigms' }
    ]
  },
  {
    id: 'semantic-model',
    title: 'Semantic Model Structure',
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
    subItems: [
      { id: 'overview', title: 'Process Overview', description: 'Three-phase methodology introduction' },
      { id: 'phase1', title: 'Phase 1: Foundation', description: 'Semantic Engineering Foundation (15% Manual)' },
      { id: 'phase2', title: 'Phase 2: Evolution', description: 'Semantic Engineering Evolution (30% Manual)' },
      { id: 'phase3', title: 'Phase 3: Semantic First', description: 'Semantic First Engineering (5% Manual)' }
    ]
  }
];

// Helper functions for navigation
export const getCurrentPosition = (currentTopic: string, currentSubTopic: string) => {
  for (let topicIndex = 0; topicIndex < navigationConfig.length; topicIndex++) {
    const topic = navigationConfig[topicIndex];
    if (topic.id === currentTopic) {
      const subIndex = topic.subItems.findIndex(sub => sub.id === currentSubTopic);
      if (subIndex !== -1) {
        return { topicIndex, subIndex };
      }
    }
  }
  return null;
};

export const getPreviousItem = (currentTopic: string, currentSubTopic: string) => {
  const position = getCurrentPosition(currentTopic, currentSubTopic);
  if (!position) return null;

  const { topicIndex, subIndex } = position;
  
  if (subIndex > 0) {
    // Previous subtopic in same topic
    const prevSub = navigationConfig[topicIndex].subItems[subIndex - 1];
    return {
      topicId: navigationConfig[topicIndex].id,
      subTopicId: prevSub.id,
      title: prevSub.title
    };
  } else if (topicIndex > 0) {
    // Last subtopic of previous topic
    const prevTopic = navigationConfig[topicIndex - 1];
    const lastSub = prevTopic.subItems[prevTopic.subItems.length - 1];
    return {
      topicId: prevTopic.id,
      subTopicId: lastSub.id,
      title: lastSub.title
    };
  }
  return null;
};

export const getNextItem = (currentTopic: string, currentSubTopic: string) => {
  const position = getCurrentPosition(currentTopic, currentSubTopic);
  if (!position) return null;

  const { topicIndex, subIndex } = position;
  const currentTopicSubs = navigationConfig[topicIndex].subItems;
  
  if (subIndex < currentTopicSubs.length - 1) {
    // Next subtopic in same topic
    const nextSub = currentTopicSubs[subIndex + 1];
    return {
      topicId: navigationConfig[topicIndex].id,
      subTopicId: nextSub.id,
      title: nextSub.title
    };
  } else if (topicIndex < navigationConfig.length - 1) {
    // First subtopic of next topic
    const nextTopic = navigationConfig[topicIndex + 1];
    const firstSub = nextTopic.subItems[0];
    return {
      topicId: nextTopic.id,
      subTopicId: firstSub.id,
      title: firstSub.title
    };
  }
  return null;
};

export const getTopicByIds = (topicId: string, subTopicId?: string) => {
  const topic = navigationConfig.find(t => t.id === topicId);
  if (!topic) return { topic: null, subTopic: null };
  
  const subTopic = subTopicId ? topic.subItems.find(s => s.id === subTopicId) : null;
  return { topic, subTopic };
};