import { useState } from 'react';
import { ChevronDown, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { TEAM_X_POSITIONS, BOX_HEIGHTS, phases } from './phaseConfig';

const InteractiveProcessDiagram = () => {
  const [currentPhase, setCurrentPhase] = useState<number | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(true);


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
               team === 'HIL' ? 'text-green-600' : 
               team === 'DE' ? 'text-orange-600' : 'text-gray-600'
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
               team === 'HIL' ? 'bg-white/90 border-green-300' : 
               team === 'DE' ? 'bg-white/90 border-orange-300' : 'bg-white/90 border-gray-300',
        textColor: team === 'AD' ? 'text-blue-700' : 
                  team === 'SE' ? 'text-purple-700' : 
                  team === 'HIL' ? 'text-green-700' : 
                  team === 'DE' ? 'text-orange-700' : 'text-gray-700'
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
          width: '21%'  // Properly sized to fit within grid columns
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


  const currentPhaseData = currentPhase ? (phases as any)[currentPhase] : null;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Phase Navigation */}
      <div className="print:hidden mb-8">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map(phase => {
            const isActive = currentPhase === phase;
            return (
              <button
                key={phase}
                onClick={() => setCurrentPhase(phase)}
                className={`relative p-6 rounded-xl border-2 text-left transition-all duration-300 transform hover:scale-105 h-40 flex flex-col ${
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
                
                <h3 className={`font-bold text-sm mb-2 flex-grow ${
                  isActive ? 'text-blue-900' : 'text-gray-800'
                }`}>
                  Phase {phase}: {(phases as any)[phase].title}
                </h3>
                
                <p className={`text-xs mt-auto ${
                  isActive ? 'text-blue-700' : 'text-gray-600'
                }`}>
                  {(phases as any)[phase].manualOutput.percentage} Manual, {(phases as any)[phase].automatedOutput.percentage} Automated
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Phase Content */}
      {currentPhase && (
      <div className="relative border-2 rounded-lg p-6 bg-white/80 backdrop-blur-sm">
        {/* Phase Header */}
        <div className="relative text-center mb-6 z-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-gray-800">Phase {currentPhase}: {currentPhaseData.title}</h2>
            {currentPhaseData.description && (
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="print:hidden text-gray-600 hover:text-gray-800 transition-colors"
              >
                {isDescriptionExpanded ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
          {currentPhaseData.description && isDescriptionExpanded && (
            <div className="max-w-5xl mx-auto text-sm text-gray-600 leading-relaxed text-left">
              <ul className="space-y-2">
                {currentPhaseData.description.split('. ').filter((sentence: string) => sentence.trim()).map((sentence: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{sentence.trim()}{sentence.endsWith('.') ? '' : '.'}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Process Container with Column Backgrounds */}
        <div className="relative">
          {/* Process Group Backgrounds */}
          <div className="absolute inset-0 grid grid-cols-4 gap-2 pointer-events-none z-0">
            <div className="bg-orange-200 rounded-lg opacity-30"></div>
            <div className="bg-green-200 rounded-lg opacity-30"></div>
            <div className="bg-purple-200 rounded-lg opacity-30"></div>
            <div className="bg-blue-200 rounded-lg opacity-30"></div>
          </div>

        {/* Process Group Headers */}
        <div className="relative mb-6 z-10">
          {/* Process Group Labels */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-3 text-center">
              <h3 className="font-bold text-orange-800 text-lg">Manual Process</h3>
            </div>
            <div className="col-span-3 bg-blue-100 border-2 border-blue-300 rounded-lg p-3 text-center">
              <h3 className="font-bold text-blue-800 text-lg">Semantic Engineering Process</h3>
            </div>
          </div>
          
          {/* Team Headers */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gradient-to-b from-orange-50 to-orange-100 border-2 border-orange-400 rounded-xl p-4 text-center shadow-md">
              <h3 className="font-semibold text-orange-900 text-base mb-1">Development Engineers</h3>
              <div className="bg-orange-200 rounded-full px-3 py-1 inline-block">
                <p className="text-xs font-bold text-orange-800">DE</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-green-50 to-green-100 border-2 border-green-400 rounded-xl p-4 text-center shadow-md">
              <h3 className="font-semibold text-green-900 text-base mb-1">Human In Loop</h3>
              <div className="bg-green-200 rounded-full px-3 py-1 inline-block">
                <p className="text-xs font-bold text-green-800">HIL</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-purple-50 to-purple-100 border-2 border-purple-400 rounded-xl p-4 text-center shadow-md">
              <h3 className="font-semibold text-purple-900 text-base mb-1">Semantic Engineers</h3>
              <div className="bg-purple-200 rounded-full px-3 py-1 inline-block">
                <p className="text-xs font-bold text-purple-800">SE</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 border-2 border-blue-400 rounded-xl p-4 text-center shadow-md">
              <h3 className="font-semibold text-blue-900 text-base mb-1">Agent Developers</h3>
              <div className="bg-blue-200 rounded-full px-3 py-1 inline-block">
                <p className="text-xs font-bold text-blue-800">AD</p>
              </div>
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
                <div className="print:hidden">
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  )}
                </div>
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
                                    } else if (activity.type === 'self') {
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
                  {currentPhaseData.manualOutput.percentage} of scope
                </span>
              </div>
              <p className="text-orange-700 text-sm">{currentPhaseData.manualOutput.deliverables}</p>
            </div>
            
            {/* Automated Process Output - spans 3 columns (HIL, SE, AD) */}
            <div className="col-span-3 bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
              <h4 className="font-bold text-blue-800 mb-2">Semantic Engineering Output</h4>
              <div className="bg-blue-200 rounded px-2 py-1 mb-2 inline-block">
                <span className="text-xs font-bold text-blue-800">
                  {currentPhaseData.automatedOutput.percentage} of scope
                </span>
              </div>
              <p className="text-blue-700 text-sm">{currentPhaseData.automatedOutput.deliverables}</p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="print:hidden relative flex justify-between mt-6 z-10">
          <button
            onClick={() => setCurrentPhase(Math.max(1, (currentPhase || 1) - 1))}
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
            onClick={() => setCurrentPhase(Math.min(3, (currentPhase || 1) + 1))}
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
      )}

      {/* Instructions */}
      <div className="print:hidden mt-6 bg-gray-50 rounded-lg p-4">
        <h4 className="font-bold text-gray-700 mb-2">How to Use:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Use the phase tabs to navigate between the three development phases</li>
          <li>• Click on any section header to expand/collapse detailed activities</li>
          <li>• Arrows show communication flow between teams (AD = Agent Developers, SE = Semantic Engineers, HIL = Humans in Loop, DE = Development Engineers)</li>
          <li>• Acitivities in boxes show self-directed work within each team</li>
        </ul>
      </div>
    </div>
  );
};

export default InteractiveProcessDiagram;