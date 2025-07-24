
// CONFIGURABLE COORDINATES - Edit these to adjust arrow positions
// 4-column grid: DE (12.5%), HIL (37.5%), SE (62.5%), AD (87.5%)
export const TEAM_X_POSITIONS = {
  DE: 12.5,           // Development Engineers (DE) - center of first column
  HIL: 37.5,          // Human In Loop (HIL) - center of second column
  SE: 62.5,           // Semantic Engineers - center of third column  
  AD: 87.5            // Agent Developers - center of fourth column
};

// CONFIGURABLE BOX HEIGHTS - Edit these to adjust activity group container heights
export const BOX_HEIGHTS = {
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

// PHASE DATA CONFIGURATION - Edit this to modify phase content
export const phases = {
  1: {
    title: "Phase 1: Agent Foundation",
    color: "bg-red-50 border-red-200",
    sections: [
      {
        id: "collaboration1",
        title: "Semantic Context & Agent Architecture",
        color: "bg-pink-50",
        activities: [
          { sequence: 1, type: 'flow', from: 'HIL', to: 'SE', label: 'Share existing engineering context' },
          { sequence: 1, type: 'self', team: 'DE', activities: ['Begin manual development planning', 'Set up traditional development workflows'] },
          { sequence: 2, type: 'flow', from: 'HIL', to: 'SE', label: 'Provide insights on current pain points' },
          { sequence: 2, type: 'flow', from: 'AD', to: 'SE', label: 'Share agent architecture plans' },
          { sequence: 3, type: 'self', team: 'DE', activities: ['Continue baseline manual development'] },
          { sequence: 3, type: 'flow', from: 'SE', to: 'AD', label: 'Provide semantic model context' }
        ]
      },
      {
        id: "integration1",
        title: "Early Integration Testing",
        color: "bg-green-50",
        activities: [
          { sequence: 1, type: 'flow', from: 'HIL', to: 'SE', label: 'Share requirements and manual estimates' },
          { sequence: 1, type: 'self', team: 'DE', activities: ['Continue primary manual development work', 'Maintain existing development processes'] },
          { sequence: 2, type: 'flow', from: 'AD', to: 'SE', label: 'Share initial agent prototypes' },
          { sequence: 2, type: 'flow', from: 'SE', to: 'AD', label: 'Validate agents against semantic model context' },
          { sequence: 3, type: 'self', team: 'DE', activities: ['Provide baseline comparison metrics'] },
          { sequence: 3, type: 'flow', from: 'SE', to: 'HIL', label: 'Present early agent outputs for evaluation' },
          { sequence: 4, type: 'flow', from: 'HIL', to: 'SE', label: 'Provide feedback on agent-generated deliverables' },
          { sequence: 4, type: 'flow', from: 'HIL', to: 'AD', label: 'Report on agent effectiveness vs manual process' }
        ]
      }
    ],
    automatedOutput: {
      percentage: 20,
      deliverables: "Agent foundation + Context framework + Early agent deliverables"
    },
    manualOutput: {
      percentage: 80,
      deliverables: "Baseline manual development + Traditional processes + Comparison metrics"
    }
  },
  2: {
    title: "Phase 2: Agent Integration - Balanced Automation", 
    color: "bg-blue-50 border-blue-200",
    sections: [
      {
        id: "deployment2",
        title: "Agent Deployment & Initial Production Use",
        color: "bg-blue-50",
        flows: [
          { from: 'HIL', to: 'SE', label: 'Share requirements and manual estimates' },
          { from: 'SE', to: 'AD', label: 'Configure semantic context for agents' },
          { from: 'AD', to: 'SE', label: 'Deploy agents for execution' },
          { from: 'SE', to: 'HIL', label: 'Submit agent outputs for validation' },
          { from: 'HIL', to: 'SE', label: 'Provide HIL feedback' }
        ]
      },
      {
        id: "collaboration2",
        title: "Active Collaboration Loop - Continuous Refinement Cycle",
        color: "bg-orange-50",
        activities: [
          { sequence: 1, type: 'flow', from: 'SE', to: 'AD', label: 'Monitor agent performance metrics' },
          { sequence: 1, type: 'self', team: 'DE', activities: ['Continue manual development of complex features', 'Handle critical path development work'] },
          { sequence: 2, type: 'flow', from: 'AD', to: 'SE', label: 'Enhanced agent capabilities' },
          { sequence: 2, type: 'self', team: 'HIL', activities: ['Provide manual vs automated comparison data'] },
          { sequence: 3, type: 'self', team: 'SE', activities: ['Fine-tune contextual models based on outputs'] },
          { sequence: 3, type: 'self', team: 'DE', activities: ['Continue parallel manual work streams'] },
          { sequence: 4, type: 'flow', from: 'SE', to: 'HIL', label: 'Deliver context-validated agent deliverables' },
          { sequence: 4, type: 'flow', from: 'HIL', to: 'SE', label: 'Provide quality feedback & acceptance criteria' },
          { sequence: 4, type: 'self', team: 'HIL', activities: ['Review agent-generated code & specs'] },
          { sequence: 5, type: 'flow', from: 'HIL', to: 'AD', label: 'Report on agent vs manual development comparison' },
          { sequence: 5, type: 'self', team: 'AD', activities: ['Improve agents based on development feedback'] }
        ]
      },
    ],
    automatedOutput: {
      percentage: 50,
      deliverables: "Reliable agent deliverables + Proven context models + Validated automation workflow"
    },
    manualOutput: {
      percentage: 50,
      deliverables: "Complex manual features + Integration architecture + Quality assurance processes"
    }
  },
  3: {
    title: "Phase 3: Automated Maturity - Optimized Efficiency",
    color: "bg-green-50 border-green-200",
    sections: [
      {
        id: "pipeline3",
        title: "Streamlined Automated Pipeline",
        color: "bg-green-50",
        flows: [
          { from: 'AD', to: 'SE', label: 'Advanced optimized agents' },
          { from: 'SE', to: 'HIL', label: 'High-confidence automated deliverables' }
        ],
        selfDirected: [
          { team: 'SE', activities: ['Mature contextual models with predictive capabilities'] },
          { team: 'HIL', activities: ['Focus on acceptance testing & deployment decisions'] },
          { team: 'DE', activities: ['Handle edge cases and complex integration', 'Provide final quality oversight', 'Manage critical production issues'] }
        ]
      },
      {
        id: "optimization3",
        title: "Continuous Optimization Loop - Mature Process Cycle", 
        color: "bg-orange-50",
        flows: [
          { from: 'SE', to: 'HIL', label: 'Context-validated automated deliverables' },
          { from: 'HIL', to: 'SE', label: 'Acceptance test results & deployment feedback' },
          { from: 'SE', to: 'AD', label: 'Performance optimization requests' },
          { from: 'AD', to: 'SE', label: 'Enhanced agent capabilities & efficiency improvements' }
        ],
        selfDirected: [
          { team: 'SE', activities: ['Continuous model refinement'] },
          { team: 'DE', activities: ['Minimal oversight and exception handling'] }
        ]
      },
      {
        id: "feedback3",
        title: "Feedback & Continuous Improvement",
        color: "bg-green-100",
        flows: [
          { from: 'HIL', to: 'SE', label: 'Production performance data' },
          { from: 'SE', to: 'AD', label: 'Model improvement opportunities' }
        ],
        selfDirected: [
          { team: 'AD', activities: ['Agent performance optimization'] },
          { team: 'SE', activities: ['Predictive model enhancement'] },
          { team: 'DE', activities: ['Strategic oversight and planning'] }
        ]
      }
    ],
    automatedOutput: {
      percentage: 80,
      deliverables: "Highly automated pipeline + Minimal cycle time + Production-ready deliverables"
    },
    manualOutput: {
      percentage: 20,
      deliverables: "Strategic oversight + Exception handling + Critical deployment decisions"
    }
  }
};