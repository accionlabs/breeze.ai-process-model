import { useState } from 'react';

interface EvolutionProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Evolution: React.FC<EvolutionProps> = () => {
  const [selectedEra, setSelectedEra] = useState<string>('web');
  const eras = [
    {
      id: 'web',
      title: 'Web Era',
      period: '1990s - early 2000s',
      tech: 'Static Information',
      enterprise: 'Digital Publishing', 
      consumer: 'Content Readers',
      engineering: 'Monolithic Systems',
      role: 'Code Writers',
      roleDescription: 'Focus on HTML, CSS, basic scripting',
      complexity: 1,
      color: 'bg-gray-100 border-gray-300'
    },
    {
      id: 'mobile',
      title: 'Mobile & Cloud',
      period: '2000s - early 2010s',
      tech: 'Interactive Applications',
      enterprise: 'Digital Channels',
      consumer: 'Digital Consumers', 
      engineering: 'Component-Based Systems',
      role: 'Application Developers',
      roleDescription: 'Full-stack development, API integration',
      complexity: 2,
      color: 'bg-blue-100 border-blue-300'
    },
    {
      id: 'platform',
      title: 'Platform Economies',
      period: '2010s - early 2020s',
      tech: 'Intelligent Systems',
      enterprise: 'Platform Businesses',
      consumer: 'Always-Connected Users',
      engineering: 'Distributed Architectures',
      role: 'System Architects',
      roleDescription: 'Microservices, cloud architecture, DevOps',
      complexity: 3,
      color: 'bg-purple-100 border-purple-300'
    },
    {
      id: 'early-ai',
      title: 'Early AI',
      period: '2020s - 2023',
      tech: 'AI / ML / NLP / Gen AI',
      enterprise: 'Predictive Enterprises',
      consumer: 'AI Enhanced Users',
      engineering: 'AI-Augmented Systems',
      role: 'AI-Assisted Engineers',
      roleDescription: 'ML integration, AI-powered development',
      complexity: 4,
      color: 'bg-orange-100 border-orange-300'
    },
    {
      id: 'agentic',
      title: 'Agentic AI',
      period: '2024 - 2030',
      tech: 'Autonomous Agents',
      enterprise: 'Autonomous Organizations',
      consumer: 'Task Delegators',
      engineering: 'Agentic Ecosystems',
      role: 'Semantic Engineers',
      roleDescription: 'Agent orchestration, intent specification',
      complexity: 5,
      color: 'bg-red-100 border-red-300'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          The Evolution of Software Engineering
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
          Software engineering has evolved through five distinct eras. Each era brought increasing complexity 
          and required engineers to fundamentally transform their role and skills.
        </p>
      </div>

      {/* Interactive Evolution Visualization */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Interactive Evolution of Software Engineering
        </h3>
        
        <div className="space-y-6">
          <p className="text-gray-600 text-center max-w-4xl mx-auto mb-8">
            Click on each era to explore how increasing complexity drove automation of previous work, 
            forcing software engineers to evolve to higher-level roles.
          </p>

          {/* Era Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {eras.map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedEra === era.id
                    ? `${era.color} border-2 ${era.color.replace('bg-', 'border-').replace('-100', '-400')} shadow-md`
                    : 'bg-gray-100 border-2 border-gray-200 hover:bg-gray-200 text-gray-700'
                }`}
              >
                <div className="text-sm font-bold">{era.title}</div>
                <div className="text-xs opacity-80">{era.period}</div>
              </button>
            ))}
          </div>

          {/* Selected Era Details */}
          {(() => {
            const era = eras.find(e => e.id === selectedEra);
            if (!era) return null;

            const automationContext = {
              'web': null,
              'mobile': 'Basic HTML/CSS coding became automated through templates and CMSs',
              'platform': 'Simple app development was automated by frameworks and low-code platforms',
              'early-ai': 'System architecture was automated through cloud services and infrastructure-as-code',
              'agentic': 'AI-assisted development is being automated by autonomous coding agents'
            };

            return (
              <div className={`p-8 rounded-xl border-2 ${era.color.replace('bg-', 'border-').replace('-100', '-200')} ${era.color}`}>
                {/* Era Header */}
                <div className="text-center mb-8">
                  <h4 className="text-3xl font-bold text-gray-900 mb-2">{era.title}</h4>
                  <p className="text-lg text-gray-700 mb-4">{era.period}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-600">Complexity Level:</span>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded-full ${
                            i < era.complexity 
                              ? era.color.includes('gray') ? 'bg-gray-500' :
                                era.color.includes('blue') ? 'bg-blue-500' :
                                era.color.includes('purple') ? 'bg-purple-500' :
                                era.color.includes('orange') ? 'bg-orange-500' :
                                'bg-red-500'
                              : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-700">{era.complexity}/5</span>
                  </div>
                </div>

                {/* Era Context Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h5 className="font-bold text-gray-800 mb-4">Technology & Business Context</h5>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-gray-600">Technology Focus:</span>
                        <div className="text-gray-800">{era.tech}</div>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-600">Business Model:</span>
                        <div className="text-gray-800">{era.enterprise}</div>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-600">User Type:</span>
                        <div className="text-gray-800">{era.consumer}</div>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-600">Engineering Approach:</span>
                        <div className="text-gray-800">{era.engineering}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h5 className="font-bold text-gray-800 mb-4">Engineer Role Evolution</h5>
                    <div className="space-y-3">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="font-bold text-green-800 text-lg">{era.role}</div>
                        <div className="text-sm text-green-700 mt-1">{era.roleDescription}</div>
                      </div>
                      
                      {automationContext[era.id as keyof typeof automationContext] && (
                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <div className="text-xs font-semibold text-orange-600 mb-2">Previous Era Work Automated:</div>
                          <div className="text-sm text-orange-700">{automationContext[era.id as keyof typeof automationContext]}</div>
                        </div>
                      )}
                      
                      {!automationContext[era.id as keyof typeof automationContext] && (
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="text-xs font-semibold text-blue-600 mb-2">Starting Era:</div>
                          <div className="text-sm text-blue-700">No previous automation - engineers manually coded everything</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Evolution Flow Visualization */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h5 className="font-bold text-gray-800 mb-4 text-center">The Evolution Flow</h5>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    
                    {/* Complexity */}
                    <div className="text-center p-4 bg-gray-50 rounded-lg flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-600 mb-2">System Complexity</div>
                      <div className="flex justify-center space-x-1 mb-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                              i < era.complexity 
                                ? era.color.includes('gray') ? 'bg-gray-500' :
                                  era.color.includes('blue') ? 'bg-blue-500' :
                                  era.color.includes('purple') ? 'bg-purple-500' :
                                  era.color.includes('orange') ? 'bg-orange-500' :
                                  'bg-red-500'
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-gray-600">Level {era.complexity}/5</div>
                    </div>

                    {/* Arrow */}
                    <div className="text-gray-400 text-2xl">→</div>

                    {/* Automation */}
                    <div className="text-center p-4 bg-orange-50 rounded-lg flex-1 min-w-0">
                      <div className="text-sm font-semibold text-orange-600 mb-2">Previous Work Automated</div>
                      <div className="text-xs text-gray-700">
                        {automationContext[era.id as keyof typeof automationContext] || 'Starting Era'}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="text-gray-400 text-2xl">→</div>

                    {/* Role Evolution */}
                    <div className="text-center p-4 bg-green-50 rounded-lg flex-1 min-w-0">
                      <div className="text-sm font-semibold text-green-600 mb-2">Engineer Role</div>
                      <div className="font-bold text-green-800">{era.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Evolution Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-lg p-6 border-l-4 border-red-400 mt-8">
            <h4 className="font-bold text-gray-800 mb-3 text-center">The Automation-Driven Evolution Pattern</h4>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-700 mb-4">
              <span className="px-3 py-1 bg-gray-200 rounded-full">Code Writers</span>
              <span>→</span>
              <span className="px-3 py-1 bg-blue-200 rounded-full">App Developers</span>
              <span>→</span>
              <span className="px-3 py-1 bg-purple-200 rounded-full">System Architects</span>
              <span>→</span>
              <span className="px-3 py-1 bg-orange-200 rounded-full">AI-Assisted Engineers</span>
              <span>→</span>
              <span className="px-3 py-1 bg-red-200 rounded-full font-bold">Semantic Engineers</span>
            </div>
            <p className="text-gray-700 text-center">
              <strong>The Pattern:</strong> Each era automated the previous era's core work, forcing engineers to evolve to higher-level roles. 
              This cycle has repeated throughout history and is happening again now with AI agents.
            </p>
          </div>
        </div>
      </div>

      {/* The Current Crisis */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border-l-4 border-red-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">The Current Transformation Crisis</h3>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            We're now entering the <strong>Agentic AI era</strong> – the most disruptive transformation yet. 
            For the first time, the core activities that defined software engineering are being automated:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
              <h4 className="font-bold text-red-800 mb-2">🤖 What AI Agents Can Now Do:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Write complex code autonomously</li>
                <li>• Debug and test applications</li>
                <li>• Deploy and monitor systems</li>
                <li>• Design architectures</li>
                <li>• Learn and adapt continuously</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">🎯 What Humans Must Do:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Define business intent and goals</li>
                <li>• Orchestrate agent interactions</li>
                <li>• Ensure ethical and quality outcomes</li>
                <li>• Bridge business and technical domains</li>
                <li>• Govern autonomous systems</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 p-4 rounded-lg border border-red-200">
            <p className="text-lg font-semibold text-red-800 mb-2">🎯 The Critical Question:</p>
            <p className="text-red-700">
              How must software engineers transform to remain relevant when AI agents can autonomously handle coding, 
              testing, deployment, and even system design?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evolution;