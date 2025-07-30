import { useState } from 'react';
import { ChevronDown, ChevronRight, Code, Users, Shield, Settings, Brain, Eye } from 'lucide-react';

const SemanticEngineer = () => {
  const [currentView, setCurrentView] = useState<'evolution' | 'transformation'>('evolution');
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null);
  const [hoveredEra, setHoveredEra] = useState<string | null>(null);

  const eras = [
    {
      id: 'web',
      title: 'Web Era',
      period: '1990s - early 2000s',
      tech: 'Static Information',
      enterprise: 'Digital Publishing', 
      consumer: 'Content Readers',
      engineering: 'Monolithic Systems',
      complexity: { substance: 'Low', dynamic: 'Minimal' },
      color: '#9CA3AF, #4B5563'
    },
    {
      id: 'mobile',
      title: 'Mobile & Cloud',
      period: '2000s - early 2010s',
      tech: 'Interactive Applications',
      enterprise: 'Digital Channels',
      consumer: 'Digital Consumers', 
      engineering: 'Component-Based Systems',
      complexity: { substance: 'Medium', dynamic: 'Low' },
      color: '#60A5FA, #2563EB'
    },
    {
      id: 'platform',
      title: 'Platform Economies',
      period: '2010s - early 2020s',
      tech: 'Intelligent Systems',
      enterprise: 'Platform Businesses',
      consumer: 'Always-Connected Users',
      engineering: 'Distributed Architectures',
      complexity: { substance: 'High', dynamic: 'Medium' },
      color: '#A78BFA, #7C3AED'
    },
    {
      id: 'early-ai',
      title: 'Early AI',
      period: '2020s - 2023',
      tech: 'AI / ML / NLP / Gen AI',
      enterprise: 'Predictive Enterprises',
      consumer: 'AI Enhanced Users',
      engineering: 'AI-Augmented Systems',
      complexity: { substance: 'Very High', dynamic: 'High' },
      color: '#FB923C, #EA580C'
    },
    {
      id: 'agentic',
      title: 'Agentic AI',
      period: '2024 - 2030',
      tech: 'Autonomous Agents',
      enterprise: 'Autonomous Organizations',
      consumer: 'Task Delegators',
      engineering: 'Agentic Ecosystems',
      complexity: { substance: 'Extreme', dynamic: 'Very High' },
      color: '#F87171, #DC2626'
    }
  ];

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
      icon: <Eye className="w-6 h-6" />,
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

  const EraCard = ({ era }: { era: any, index: number }) => (
    <div 
      className={`relative p-6 rounded-xl transition-all duration-500 cursor-pointer ${
        hoveredEra === era.id ? 'scale-105 shadow-2xl z-10' : 'shadow-lg'
      }`}
      style={{
        background: `linear-gradient(135deg, ${era.color})`
      }}
      onMouseEnter={() => setHoveredEra(era.id)}
      onMouseLeave={() => setHoveredEra(null)}
    >
      <div className="text-white">
        <h3 className="font-bold text-lg mb-1">{era.title}</h3>
        <p className="text-sm opacity-90 mb-4">{era.period}</p>
        
        <div className="space-y-2 text-sm">
          <div><strong>Technology:</strong> {era.tech}</div>
          <div><strong>Enterprise:</strong> {era.enterprise}</div>
          <div><strong>Consumer:</strong> {era.consumer}</div>
          <div><strong>Engineering:</strong> {era.engineering}</div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex justify-between text-xs">
            <span>Complexity: {era.complexity.substance}</span>
            <span>Change: {era.complexity.dynamic}</span>
          </div>
        </div>
      </div>
      
      {hoveredEra === era.id && (
        <div className="absolute inset-0 bg-black/10 rounded-xl pointer-events-none" />
      )}
    </div>
  );

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

  const TransformationHeader = () => (
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
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
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
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
          <Brain className="w-6 h-6 text-purple-600" />
          <span className="font-bold text-purple-600">The Semantic Engineer</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Are Software Engineers Redundant?
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          As AI and autonomous agents reshape technology, software engineers face a critical question: adapt or become obsolete. 
          The answer lies in evolving from traditional coders to semantic engineers who orchestrate intelligent systems.
        </p>
        
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">The Evolution Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="font-bold text-gray-800">The Problem</h3>
              <p className="text-sm text-gray-600">
                Traditional software engineering roles are being automated by AI, making many skills redundant.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-bold text-gray-800">The Transition</h3>
              <p className="text-sm text-gray-600">
                Engineers must evolve across four key dimensions to remain relevant in an AI-driven world.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-800">The Solution</h3>
              <p className="text-sm text-gray-600">
                Become a semantic engineer who designs, orchestrates, and governs autonomous agent ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg p-2 shadow-lg">
          <button
            onClick={() => setCurrentView('evolution')}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              currentView === 'evolution' 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Era Evolution
          </button>
          <button
            onClick={() => setCurrentView('transformation')}
            className={`px-6 py-3 rounded-md font-medium transition-all ${
              currentView === 'transformation' 
                ? 'bg-purple-600 text-white shadow-md' 
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Transformation Dimensions
          </button>
        </div>
      </div>

      {currentView === 'evolution' ? (
        <div>
          {/* Era Evolution Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              The Evolution of Software Engineering
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
              Software engineering has evolved through five distinct eras, each marked by increasing complexity and faster rates of change. 
              Understanding this progression helps explain why the traditional software engineer role must transform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {eras.map((era, index) => (
                <EraCard key={era.id} era={era} index={index} />
              ))}
            </div>
          </div>

          {/* Complexity Chart */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Complexity Evolution Over Time
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg text-gray-700 mb-4">Substance Complexity</h4>
                <div className="space-y-3">
                  {eras.map((era, index) => (
                    <div key={era.id} className="flex items-center gap-3">
                      <div className="w-24 text-sm font-medium">{era.title}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div 
                          className="h-4 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${(index + 1) * 20}%`,
                            background: `linear-gradient(to right, ${era.color})`
                          }}
                        />
                      </div>
                      <div className="w-20 text-sm text-gray-600">{era.complexity.substance}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-700 mb-4">Dynamic Complexity</h4>
                <div className="space-y-3">
                  {eras.map((era, index) => (
                    <div key={era.id} className="flex items-center gap-3">
                      <div className="w-24 text-sm font-medium">{era.title}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div 
                          className="h-4 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${Math.min((index + 1) * 25, 100)}%`,
                            background: `linear-gradient(to right, ${era.color})`
                          }}
                        />
                      </div>
                      <div className="w-20 text-sm text-gray-600">{era.complexity.dynamic}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Evolution Conclusion */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 mb-12 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">The Pattern of Continuous Evolution</h3>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Throughout each era, software engineers have had to <strong>continuously evolve their skills and approaches</strong> to handle 
                ever-increasing levels of both substance complexity (feature count and scope) and dynamic complexity (rate of change).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-bold text-gray-800 mb-2">Substance Complexity</h4>
                  <p className="text-sm text-gray-600">From simple static websites to unbounded AI capabilities with global scope</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">⚡</div>
                  <h4 className="font-bold text-gray-800 mb-2">Dynamic Complexity</h4>
                  <p className="text-sm text-gray-600">From predictable patterns to continuous transformation with unexpected adaptations</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="font-bold text-gray-800 mb-2">Required Evolution</h4>
                  <p className="text-sm text-gray-600">Each era demanded new skills, tools, and fundamental shifts in thinking</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Now, as we enter the <strong>Agentic AI era</strong>, we face the most significant transformation yet. 
                The traditional software engineer role—focused on writing code and implementing features—is being automated away.
              </p>
              <div className="bg-red-100 p-4 rounded-lg border border-red-200">
                <p className="text-lg font-semibold text-red-800 mb-2">🎯 The Critical Question:</p>
                <p className="text-red-700">
                  How must software engineers transform to remain relevant when AI agents can autonomously handle coding, 
                  testing, deployment, and even system design?
                </p>
              </div>
              <div className="text-center mt-6">
                <button
                  onClick={() => setCurrentView('transformation')}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Discover the Four Transformation Dimensions
                  <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Transformation Header */}
          <TransformationHeader />

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
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Evolve?</h3>
        <p className="text-lg mb-6 opacity-90">
          The transformation from Software Engineer to Semantic Engineer is not just inevitable—it's already happening.
        </p>
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
          className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300"
        >
          Explore Our Process
        </a>
      </div>
    </div>
  );
};

export default SemanticEngineer;