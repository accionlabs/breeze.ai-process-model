import { useState } from 'react';
import { ChevronDown, ChevronRight, Code, Users, Shield, Settings, Brain } from 'lucide-react';

interface TransformationProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Transformation: React.FC<TransformationProps> = () => {
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null);

  const transformations = [
    {
      id: 'coders',
      title: 'Coders to Orchestrators',
      icon: <Code className="w-6 h-6" />,
      color: 'bg-blue-500',
      paradigms: [
        { level: 'Old', text: 'Writing code to implementing specific functionality', color: 'bg-blue-100 text-blue-800' },
        { level: 'New', text: 'Defining goals and acceptance criteria for AI to generate the code', color: 'bg-blue-200 text-blue-900' },
        { level: 'Emerging', text: 'Designing orchestration ecosystems of autonomous agents', color: 'bg-blue-300 text-blue-900' }
      ]
    },
    {
      id: 'applications',
      title: 'Applications to Experiences',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-orange-500',
      paradigms: [
        { level: 'Old', text: 'Designing applications that solve specific problems', color: 'bg-orange-100 text-orange-800' },
        { level: 'New', text: 'Designing seamless experiences that address a set of problems', color: 'bg-orange-200 text-orange-900' },
        { level: 'Emerging', text: 'Designing dynamic experiences that address entire problem domains', color: 'bg-orange-300 text-orange-900' }
      ]
    },
    {
      id: 'security',
      title: 'Security to Ethics',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-cyan-500',
      paradigms: [
        { level: 'Old', text: 'Implementing secure features for well-defined risks', color: 'bg-cyan-100 text-cyan-800' },
        { level: 'New', text: 'Designing flexible and secure guardrails within which agents can operate safely', color: 'bg-cyan-200 text-cyan-900' },
        { level: 'Emerging', text: 'Creating adaptive ethical frameworks that secure dynamic agent ecosystems', color: 'bg-cyan-300 text-cyan-900' }
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance to Governance',
      icon: <Settings className="w-6 h-6" />,
      color: 'bg-teal-500',
      paradigms: [
        { level: 'Old', text: 'Maintaining solutions for changing requirements', color: 'bg-teal-100 text-teal-800' },
        { level: 'New', text: 'Managing agents that automatically adapt to evolving needs', color: 'bg-teal-200 text-teal-900' },
        { level: 'Emerging', text: 'Creating governance frameworks that regulate entire agent ecosystems', color: 'bg-teal-300 text-teal-900' }
      ]
    }
  ];

  const TransformationCard = ({ transformation }: { transformation: any }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-fit">
      <div 
        className={`${transformation.color} text-white p-4 cursor-pointer transition-all duration-300 hover:shadow-lg`}
        onClick={() => setSelectedDimension(selectedDimension === transformation.id ? null : transformation.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {transformation.icon}
            <h3 className="font-bold text-lg">{transformation.title}</h3>
          </div>
          {selectedDimension === transformation.id ? 
            <ChevronDown className="w-5 h-5" /> : 
            <ChevronRight className="w-5 h-5" />
          }
        </div>
      </div>
      
      {selectedDimension === transformation.id && (
        <div className="p-6 space-y-4">
          {transformation.paradigms.map((paradigm: any, index: number) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{paradigm.level} Paradigm</span>
              </div>
              <div className={`p-4 rounded-lg ${paradigm.color}`}>
                <p className="text-sm leading-relaxed">{paradigm.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8 border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-gray-800 mb-3">The Answer: Four Transformation Dimensions</h3>
          <p className="text-gray-700 leading-relaxed">
            Just as software engineers adapted through previous eras, survival in the Agentic AI era requires transformation 
            across four fundamental dimensions. This evolution from <strong>Software Engineer</strong> to <strong>Semantic Engineer</strong> 
            is not optional—it's essential.
          </p>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">The Semantic Engineer</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Click on each dimension below to explore the specific paradigm shifts required for this critical evolution.
        </p>
        
        {/* Visual Transformation */}
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-full p-4 text-white">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-purple-600">→</div>
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-4 text-white">
              <Brain className="w-8 h-8" />
            </div>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-600">
            <span>Software Engineer</span>
            <span>Semantic Engineer</span>
          </div>
        </div>
      </div>

      {/* Transformation Cards */}
      <div className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-max">
          {transformations.map((transformation) => (
            <div key={transformation.id} className="self-start">
              <TransformationCard transformation={transformation} />
            </div>
          ))}
        </div>
      </div>

      {/* Summary and Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
        <p className="text-lg mb-6 opacity-90">
          The transformation from Software Engineer to Semantic Engineer is not just inevitable—it's already happening. 
          Those who evolve will thrive; those who don't will be left behind.
        </p>
        <p className="text-sm opacity-80">
          Discover how Breeze.AI provides the framework and methodology to implement these concepts in practice.
        </p>
      </div>
    </div>
  );
};

export default Transformation;