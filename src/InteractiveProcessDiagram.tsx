import { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { TEAM_X_POSITIONS, BOX_HEIGHTS, phases } from './phaseConfig';

const InteractiveProcessDiagram = () => {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});


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
        color: team === 'AD' ? 'text-blue-600' : 
               team === 'SE' ? 'text-purple-600' : 
               team === 'DE_AUTO' ? 'text-green-600' : 
               team === 'DE_MANUAL' ? 'text-orange-600' : 'text-gray-600'
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
               team === 'SE' ? 'bg-white/90 border-purple-300' : 
               team === 'DE_AUTO' ? 'bg-white/90 border-green-300' : 
               team === 'DE_MANUAL' ? 'bg-white/90 border-orange-300' : 'bg-white/90 border-gray-300',
        textColor: team === 'AD' ? 'text-blue-700' : 
                  team === 'SE' ? 'text-purple-700' : 
                  team === 'DE_AUTO' ? 'text-green-700' : 
                  team === 'DE_MANUAL' ? 'text-orange-700' : 'text-gray-700'
      };
    };

    const teamInfo = getTeamInfo(team);
    const topOffset = index * 50; // Reduced spacing
    
    return (
      <div 
        className={`absolute p-3 rounded-lg border ${teamInfo.color} shadow-sm z-20`}
        style={{ 
          left: `${teamInfo.position}%`,
          transform: 'translateX(-50%)',
          top: `${topOffset}px`,
          width: '22%'  // Approximately 1/4 of container width to match grid columns
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


  const currentPhaseData = (phases as any)[currentPhase];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Phase Navigation */}
      <div className="mb-8">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(phase => {
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
                  {(phases as any)[phase].manualOutput.percentage}% Manual, {(phases as any)[phase].automatedOutput.percentage}% Automated
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
        {/* Process Group Backgrounds - Only within phase container */}
        <div className="absolute inset-0 grid grid-cols-4 gap-2 pointer-events-none z-0 p-6" style={{ top: '140px', bottom: '216px' }}>
          <div className="bg-orange-200 rounded-lg opacity-30"></div>
          <div className="bg-green-200 rounded-lg opacity-30"></div>
          <div className="bg-purple-200 rounded-lg opacity-30"></div>
          <div className="bg-blue-200 rounded-lg opacity-30"></div>
        </div>
        
        {/* Phase Header */}
        <div className="relative text-center mb-6 z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentPhaseData.title}</h2>
        </div>

        {/* Process Group Headers */}
        <div className="relative mb-6 z-10">
          {/* Process Group Labels */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-3 text-center">
              <h3 className="font-bold text-orange-800 text-lg">Manual Process</h3>
            </div>
            <div className="col-span-3 bg-blue-100 border-2 border-blue-300 rounded-lg p-3 text-center">
              <h3 className="font-bold text-blue-800 text-lg">Automated Process</h3>
            </div>
          </div>
          
          {/* Team Headers */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white/90 border border-orange-300 rounded-lg p-3 text-center backdrop-blur-sm">
              <h3 className="font-bold text-orange-800 text-sm">Development Engineers</h3>
              <p className="text-xs text-orange-600 mt-1">DE</p>
            </div>
            <div className="bg-white/90 border border-green-300 rounded-lg p-3 text-center backdrop-blur-sm">
              <h3 className="font-bold text-green-800 text-sm">Human In Loop</h3>
              <p className="text-xs text-green-600 mt-1">HIL</p>
            </div>
            <div className="bg-white/90 border border-purple-300 rounded-lg p-3 text-center backdrop-blur-sm">
              <h3 className="font-bold text-purple-800 text-sm">Semantic Engineers</h3>
              <p className="text-xs text-purple-600 mt-1">SE</p>
            </div>
            <div className="bg-white/90 border border-blue-300 rounded-lg p-3 text-center backdrop-blur-sm">
              <h3 className="font-bold text-blue-800 text-sm">Agent Developers</h3>
              <p className="text-xs text-blue-600 mt-1">AD</p>
            </div>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="relative space-y-4 z-10">
          {currentPhaseData.sections.map((section: any) => (
            <div key={section.id} className="border rounded-lg bg-white/80 backdrop-blur-sm">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-4 text-center flex items-center justify-between hover:bg-opacity-80 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-center">{section.title}</h4>
                </div>
                {expandedSections[section.id] ? (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-4 pb-4">
                  {/* Sequenced Activities (grouped by sequence number) */}
                  {section.activities && (
                    <div className="space-y-4 mb-4">
                      {(() => {
                        // Group activities by sequence number
                        const sequenceGroups: Record<number, any[]> = {};
                        section.activities.forEach((activity: any) => {
                          const seq = activity.sequence || 0;
                          if (!sequenceGroups[seq]) sequenceGroups[seq] = [];
                          sequenceGroups[seq].push(activity);
                        });
                        
                        // Render each sequence group
                        return Object.keys(sequenceGroups)
                          .sort((a, b) => parseInt(a) - parseInt(b))
                          .map((seqKey) => {
                            const sequence = parseInt(seqKey);
                            const activities = sequenceGroups[sequence];
                            
                            return (
                              <div key={sequence} className="relative">
                                <div className="relative min-h-16">
                                  {activities.map((activity: any, idx: number) => {
                                    if (activity.type === 'flow') {
                                      return (
                                        <ArrowFlow 
                                          key={`${sequence}-${idx}`} 
                                          from={activity.from} 
                                          to={activity.to} 
                                          label={activity.label}
                                          bidirectional={activity.bidirectional}
                                        />
                                      );
                                    } else if (activity.type === 'selfDirected') {
                                      return (
                                        <SelfDirectedActivity 
                                          key={`${sequence}-${idx}`}
                                          team={activity.team}
                                          activities={activity.activities}
                                          index={0}
                                        />
                                      );
                                    }
                                    return null;
                                  })}
                                </div>
                              </div>
                            );
                          });
                      })()}
                    </div>
                  )}

                  {/* Legacy: Arrow Flows (for backward compatibility) */}
                  {section.flows && !section.activities && (
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

                  {/* Legacy: Self-Directed Activities (for backward compatibility) */}
                  {section.selfDirected && !section.activities && (
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

                </div>
              )}
            </div>
          ))}
        </div>

        {/* Phase Outputs */}
        <div className="relative mt-6 grid grid-cols-4 gap-2 z-10">
          {/* Manual Process Output - matches DE column */}
          <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 text-center">
            <h4 className="font-bold text-orange-800 mb-2">Manual Process Output</h4>
            <div className="bg-orange-200 rounded px-2 py-1 mb-2 inline-block">
              <span className="text-xs font-bold text-orange-800">
                {currentPhaseData.manualOutput.percentage}% of scope
              </span>
            </div>
            <p className="text-orange-700 text-sm">{currentPhaseData.manualOutput.deliverables}</p>
          </div>
          
          {/* Automated Process Output - spans 3 columns (HIL, SE, AD) */}
          <div className="col-span-3 bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
            <h4 className="font-bold text-blue-800 mb-2">Automated Process Output</h4>
            <div className="bg-blue-200 rounded px-2 py-1 mb-2 inline-block">
              <span className="text-xs font-bold text-blue-800">
                {currentPhaseData.automatedOutput.percentage}% of scope
              </span>
            </div>
            <p className="text-blue-700 text-sm">{currentPhaseData.automatedOutput.deliverables}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="print:hidden relative flex justify-between mt-6 z-10">
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
        <div className="print:hidden relative mt-4 text-center text-sm text-gray-500 z-10">
          Phase {currentPhase} of 3
        </div>
      </div>

      {/* Instructions */}
      <div className="print:hidden mt-6 bg-gray-50 rounded-lg p-4">
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