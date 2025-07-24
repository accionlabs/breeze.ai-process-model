import { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';

const InteractiveProcessDiagram = () => {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // CONFIGURABLE COORDINATES - Edit these to adjust arrow positions
  // These values represent the center of each team column in the 3-column grid (percentage from left)
  const TEAM_X_POSITIONS = {
    AD: 16.67,  // Agent Developers - should align with first column center
    SE: 50,     // Semantic Engineers - should align with middle column center
    DE: 83.33   // Development Engineers - should align with third column center
  };

  // CONFIGURABLE BOX HEIGHTS - Edit these to adjust activity group container heights
  const BOX_HEIGHTS = {
    // Phase 1
    collaboration1: 120,
    parallel1: 100,
    integration1: 120,
    
    // Phase 2  
    deployment2: 100,
    collaboration2: 140,
    parallel2: 100,
    
    // Phase 3
    pipeline3: 100,
    optimization3: 50,
    automated3: 100,
    feedback3: 100
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const ArrowFlow = ({ from, to, label, bidirectional = false }: { from: string, to: string, label: string, bidirectional?: boolean }) => {
    const getTeamPosition = (team: string) => {
      return { 
        x: (TEAM_X_POSITIONS as any)[team] || 50, 
        color: team === 'AD' ? 'text-blue-600' : team === 'SE' ? 'text-purple-600' : 'text-green-600'
      };
    };

    const fromPos = getTeamPosition(from);
    const toPos = getTeamPosition(to);
    
    return (
      <div className="relative h-16 mb-2">
        <svg className="absolute inset-0 w-full h-full">
          {/* Horizontal arrow line connecting team box centers */}
          <line 
            x1={`${fromPos.x}%`} 
            y1="8" 
            x2={`${toPos.x}%`} 
            y2="8" 
            stroke="#6b7280" 
            strokeWidth="1.6"
            markerEnd="url(#arrowhead)"
          />
          {bidirectional && (
            <line 
              x1={`${toPos.x}%`} 
              y1="10" 
              x2={`${fromPos.x}%`} 
              y2="10" 
              stroke="#6b7280" 
              strokeWidth="1.6"
              markerEnd="url(#arrowhead)"
            />
          )}
          <defs>
            <marker id="arrowhead" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
              <polygon points="0 0, 12 4, 0 8" fill="#6b7280"/>
            </marker>
          </defs>
        </svg>
        <div 
          className="absolute top-9 text-xs font-medium bg-white px-2 py-1 rounded border shadow-sm z-10"
          style={{ 
            left: `${Math.min(fromPos.x, toPos.x) + Math.abs(toPos.x - fromPos.x) / 2}%`,
            transform: 'translateY(-70%) translateX(-50%)'
          }}
        >
          {label}
        </div>
      </div>
    );
  };

  const SelfDirectedActivity = ({ team, activities, index = 0 }: { team: string, activities: string[], index?: number }) => {
    const getTeamInfo = (team: string) => {
      return { 
        position: (TEAM_X_POSITIONS as any)[team] || 50, 
        color: team === 'AD' ? 'bg-white/90 border-blue-300' : 
               team === 'SE' ? 'bg-white/90 border-purple-300' : 'bg-white/90 border-green-300',
        textColor: team === 'AD' ? 'text-blue-700' : 
                  team === 'SE' ? 'text-purple-700' : 'text-green-700'
      };
    };

    const teamInfo = getTeamInfo(team);
    const topOffset = index * 50; // Reduced spacing
    
    return (
      <div 
        className={`absolute w-72 p-3 rounded-lg border ${teamInfo.color} shadow-sm z-20`}
        style={{ 
          left: `${teamInfo.position}%`,
          transform: 'translateX(-50%)',
          top: `${topOffset}px`
        }}
      >
        <ul className="space-y-1">
          {activities.map((activity: string, idx: number) => (
            <li key={idx} className={`text-xs ${teamInfo.textColor} flex items-start gap-1`}>
              <span className="w-1 h-1 bg-current rounded-full mt-1.5 flex-shrink-0"></span>
              {activity}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const phases = {
    1: {
      title: "Phase 1: Parallel Development - Foundation Building",
      subtitle: "80% Manual, 20% Automated",
      color: "bg-red-50 border-red-200",
      sections: [
        {
          id: "collaboration1",
          title: "Initial Collaboration & Knowledge Sharing",
          color: "bg-pink-50",
          flows: [
            { from: 'DE', to: 'SE', label: 'Share existing engineering context' },
            { from: 'DE', to: 'SE', label: 'Provide insights on current pain points' },
            { from: 'AD', to: 'SE', label: 'Share agent architecture plans' },
            { from: 'SE', to: 'AD', label: 'Provide semantic model context' }
          ]
        },
        {
          id: "parallel1",
          title: "Parallel Development Streams",
          color: "bg-blue-50",
          outputs: [
            {
              title: "Agent Foundation Building",
              items: [
                "Build requirement → specification agents",
                "Create UI wireframe generators", 
                "Develop initial code generation agents",
                "Build test case automation",
                "Create deployment script generators"
              ]
            },
            {
              title: "Semantic Context Development",
              items: [
                "Map enterprise architecture constraints",
                "Build dependency relationship models",
                "Define quality validation frameworks",
                "Create contextual constraint engine"
              ]
            },
            {
              title: "Manual Development (Primary Path)",
              items: [
                "Write application code manually",
                "Create comprehensive test suites", 
                "Handle deployment processes",
                "Conduct code reviews & quality assurance"
              ]
            }
          ]
        },
        {
          id: "integration1",
          title: "Early Integration Testing",
          color: "bg-green-50",
          flows: [
            { from: 'DE', to: 'SE', label: 'Share requirements and manual estimates' },
            { from: 'AD', to: 'SE', label: 'Share initial agent prototypes' },
            { from: 'SE', to: 'AD', label: 'Validate agents against semantic model context' },
            { from: 'SE', to: 'DE', label: 'Present early agent outputs for evaluation' },
            { from: 'DE', to: 'SE', label: 'Provide feedback on agent-generated deliverables' },
            { from: 'DE', to: 'AD', label: 'Report on agent effectiveness vs manual process' }
          ]
        }
      ],
      output: "Agent foundation + Context framework + Early Agent deliverables + Manual deliverables"
    },
    2: {
      title: "Phase 2: Agent Integration - Balanced Automation", 
      subtitle: "50% Manual, 50% Automated",
      color: "bg-blue-50 border-blue-200",
      sections: [
        {
          id: "deployment2",
          title: "Agent Deployment & Initial Production Use",
          color: "bg-blue-50",
          flows: [
            { from: 'DE', to: 'SE', label: 'Share requirements and manual estimates' },
            { from: 'SE', to: 'AD', label: 'Configure semantic context for agents' },
            { from: 'AD', to: 'SE', label: 'Deploy agents for execution' },
            { from: 'SE', to: 'DE', label: 'Submit agent outputs for validation' },
            { from: 'DE', to: 'SE', label: 'Provide HIL feedback' }
          ]
        },
        {
          id: "collaboration2",
          title: "Active Collaboration Loop - Continuous Refinement Cycle",
          color: "bg-orange-50",
          flows: [
            { from: 'SE', to: 'AD', label: 'Monitor agent performance metrics' },
            { from: 'AD', to: 'SE', label: 'Enhanced agent capabilities' },
            { from: 'SE', to: 'DE', label: 'Deliver context-validated agent deliverables' },
            { from: 'DE', to: 'SE', label: 'Provide quality feedback & acceptance criteria' },
            { from: 'DE', to: 'AD', label: 'Report on agent vs manual development comparison' }
          ],
          selfDirected: [
            { team: 'SE', activities: ['Fine-tune contextual models based on outputs'] },
            { team: 'DE', activities: ['Review agent-generated code & specs'] },
            { team: 'AD', activities: ['Improve agents based on development feedback'] }
          ]
        },
        {
          id: "parallel2",
          title: "Parallel Development Streams",
          color: "bg-green-50",
          outputs: [
            {
              title: "Agent-Generated Work",
              items: [
                "Automated specifications & user stories",
                "Generated UI wireframes & prototypes",
                "Automated code components", 
                "Generated test cases & scripts"
              ]
            },
            {
              title: "Semantic Validation",
              items: [
                "Context-validated deliverables",
                "Constraint compliance feedback",
                "Update models based on real-world usage"
              ]
            },
            {
              title: "Manual Development Work",
              items: [
                "Complex feature development",
                "Integration work & system architecture",
                "Quality assurance & acceptance testing"
              ]
            }
          ]
        }
      ],
      output: "Reliable agent deliverables + Proven context models + Hybrid workflow"
    },
    3: {
      title: "Phase 3: Automated Maturity - Optimized Efficiency",
      subtitle: "20% Manual, 80% Automated", 
      color: "bg-green-50 border-green-200",
      sections: [
        {
          id: "pipeline3",
          title: "Streamlined Automated Pipeline",
          color: "bg-green-50",
          flows: [
            { from: 'AD', to: 'SE', label: 'Advanced optimized agents' },
            { from: 'SE', to: 'DE', label: 'High-confidence automated deliverables' }
          ],
          selfDirected: [
            { team: 'SE', activities: ['Mature contextual models with predictive capabilities'] },
            { team: 'DE', activities: ['Focus on acceptance testing & deployment decisions'] }
          ]
        },
        {
          id: "optimization3",
          title: "Continuous Optimization Loop - Mature Process Cycle", 
          color: "bg-orange-50",
          flows: [
            { from: 'SE', to: 'DE', label: 'Context-validated automated deliverables' },
            { from: 'DE', to: 'SE', label: 'Acceptance test results & deployment feedback' },
            { from: 'SE', to: 'AD', label: 'Performance optimization requests' },
            { from: 'AD', to: 'SE', label: 'Enhanced agent capabilities & efficiency improvements' }
          ],
          selfDirected: [
            { team: 'SE', activities: ['Continuous model refinement'] }
          ]
        },
        {
          id: "automated3",
          title: "Automated Development Flow",
          color: "bg-blue-50",
          outputs: [
            {
              title: "Primary Automated Stream → DE",
              items: [
                "Complete feature specifications",
                "Production-ready UI components",
                "Tested code implementations",
                "Automated test suites", 
                "Ready deployment packages"
              ]
            },
            {
              title: "Semantic Quality Assurance → DE",
              items: [
                "Enterprise compliance validation",
                "Dependency conflict resolution",
                "Quality framework enforcement"
              ]
            },
            {
              title: "Human Oversight (Minimal)",
              items: [
                "Final acceptance review",
                "Deployment authorization",
                "Production monitoring setup"
              ]
            }
          ]
        },
        {
          id: "feedback3",
          title: "Feedback & Continuous Improvement",
          color: "bg-green-100",
          flows: [
            { from: 'DE', to: 'SE', label: 'Production performance data' },
            { from: 'SE', to: 'AD', label: 'Model improvement opportunities' }
          ],
          selfDirected: [
            { team: 'AD', activities: ['Agent performance optimization'] },
            { team: 'SE', activities: ['Predictive model enhancement'] }
          ]
        }
      ],
      output: "Highly automated pipeline + Minimal cycle time + Human oversight focus"
    }
  };

  const currentPhaseData = (phases as any)[currentPhase];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Phase Navigation */}
      <div className="mb-8">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(phase => {
            const phaseData = (phases as any)[phase];
            const isActive = currentPhase === phase;
            return (
              <button
                key={phase}
                onClick={() => setCurrentPhase(phase)}
                className={`relative p-6 rounded-xl border-2 text-left transition-all duration-300 transform hover:scale-105 ${
                  isActive 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    isActive 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {phase}
                  </div>
                  {isActive && (
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  )}
                </div>
                
                <h3 className={`font-bold text-lg mb-2 ${
                  isActive ? 'text-blue-900' : 'text-gray-800'
                }`}>
                  Phase {phase}
                </h3>
                
                <p className={`text-sm mb-3 ${
                  isActive ? 'text-blue-700' : 'text-gray-600'
                }`}>
                  {phaseData.subtitle}
                </p>
                
                <div className={`text-xs font-medium ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {phase === 1 && 'Foundation Building'}
                  {phase === 2 && 'Balanced Integration'}  
                  {phase === 3 && 'Optimized Automation'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Phase Content */}
      <div className="relative border-2 rounded-lg p-6 bg-white/80 backdrop-blur-sm">
        {/* Team Column Backgrounds - Only within phase container */}
        <div className="absolute inset-0 grid grid-cols-3 gap-4 pointer-events-none z-0 p-6" style={{ top: '91px', bottom: '216px' }}>
          <div className="bg-blue-200 rounded-lg opacity-40"></div>
          <div className="bg-purple-200 rounded-lg opacity-40"></div>
          <div className="bg-green-200 rounded-lg opacity-40"></div>
        </div>
        
        {/* Phase Header */}
        <div className="relative text-center mb-6 z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentPhaseData.title}</h2>
          <p className="text-lg text-gray-600">{currentPhaseData.subtitle}</p>
        </div>

        {/* Team Headers */}
        <div className="relative grid grid-cols-3 gap-4 mb-6 z-10">
          <div className="bg-white/90 border border-blue-300 rounded-lg p-3 text-center backdrop-blur-sm">
            <h3 className="font-bold text-blue-800">Agent Developers</h3>
            <p className="text-xs text-blue-600 mt-1">AD</p>
          </div>
          <div className="bg-white/90 border border-purple-300 rounded-lg p-3 text-center backdrop-blur-sm">
            <h3 className="font-bold text-purple-800">Semantic Engineers</h3>
            <p className="text-xs text-purple-600 mt-1">SE</p>
          </div>
          <div className="bg-white/90 border border-green-300 rounded-lg p-3 text-center backdrop-blur-sm">
            <h3 className="font-bold text-green-800">Development Engineers / HIL</h3>
            <p className="text-xs text-green-600 mt-1">DE / HIL</p>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="relative space-y-4 z-10">
          {currentPhaseData.sections.map((section: any) => (
            <div key={section.id} className="border rounded-lg bg-white/80 backdrop-blur-sm">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-opacity-80 transition-colors"
              >
                <h4 className="font-bold text-gray-800">{section.title}</h4>
                {expandedSections[section.id] ? (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-4 pb-4">
                  {/* Arrow Flows */}
                  {section.flows && (
                    <div className="space-y-2 mb-4">
                      {section.flows.map((flow: any, idx: number) => (
                        <ArrowFlow 
                          key={idx} 
                          from={flow.from} 
                          to={flow.to} 
                          label={flow.label}
                          bidirectional={flow.bidirectional}
                        />
                      ))}
                    </div>
                  )}

                  {/* Self-Directed Activities */}
                  {section.selfDirected && (
                    <div className="relative mb-4" style={{ minHeight: `${(BOX_HEIGHTS as any)[section.id] || 100}px` }}>
                      {section.selfDirected.map((teamWork: any, idx: number) => (
                        <SelfDirectedActivity 
                          key={idx}
                          team={teamWork.team}
                          activities={teamWork.activities}
                          index={idx}
                        />
                      ))}
                    </div>
                  )}

                  {/* Output Streams */}
                  {section.outputs && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {section.outputs.map((output: any, idx: number) => {
                        // Align to team columns: left (AD), center (SE), right (DE)
                        const alignmentClasses = ['justify-self-start', 'justify-self-center', 'justify-self-end'];
                        return (
                          <div key={idx} className={`bg-white p-3 rounded border border-gray-200 ${alignmentClasses[idx] || ''}`}>
                            <h5 className="font-semibold text-sm mb-2 text-gray-700">{output.title}</h5>
                            <ul className="space-y-1">
                              {output.items.map((item: string, itemIdx: number) => (
                                <li key={itemIdx} className="text-xs text-gray-600 flex items-start gap-1">
                                  <ArrowRight className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Phase Output */}
        <div className="relative mt-6 bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 text-center z-10">
          <h4 className="font-bold text-yellow-800 mb-2">Phase Output</h4>
          <p className="text-yellow-700">{currentPhaseData.output}</p>
        </div>

        {/* Navigation Arrows */}
        <div className="relative flex justify-between mt-6 z-10">
          <button
            onClick={() => setCurrentPhase(Math.max(1, currentPhase - 1))}
            disabled={currentPhase === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
              currentPhase === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Phase
          </button>
          
          <button
            onClick={() => setCurrentPhase(Math.min(3, currentPhase + 1))}
            disabled={currentPhase === 3}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
              currentPhase === 3 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Next Phase
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="relative mt-4 text-center text-sm text-gray-500 z-10">
          Phase {currentPhase} of 3
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h4 className="font-bold text-gray-700 mb-2">How to Use:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Use the phase tabs to navigate between the three development phases</li>
          <li>• Click on any section header to expand/collapse detailed activities</li>
          <li>• Arrows show communication flow between teams (AD = Agent Developers, SE = Semantic Engineers, DE = Development Engineers)</li>
          <li>• Colored boxes show self-directed work within each team</li>
        </ul>
      </div>
    </div>
  );
};

export default InteractiveProcessDiagram;