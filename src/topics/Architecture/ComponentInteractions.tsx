interface ComponentInteractionsProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const ComponentInteractions: React.FC<ComponentInteractionsProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Component Interactions
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          How Breeze.AI components communicate and collaborate through event-driven architecture, 
          shared semantic understanding, and intelligent orchestration patterns.
        </p>
      </div>

      {/* Interaction Architecture Overview */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Interaction Architecture Overview</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Breeze.AI uses an event-driven, semantic-aware interaction model where components 
          communicate through well-defined interfaces while maintaining shared context.
        </p>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-6 text-center">Component Interaction Flow</h4>
          
          <div className="relative w-full h-96 mx-auto">
            {/* SVG for connection lines - positioned behind components */}
            <svg className="absolute inset-0 w-full h-96 z-0" viewBox="0 0 600 384">
              {/* Connection lines */}
              {/* Specification Engine to Knowledge Graph */}
              <line x1="300" y1="80" x2="300" y2="130" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowYellow)"/>
              
              {/* Agent Platform to Knowledge Graph */}
              <line x1="120" y1="192" x2="220" y2="192" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowRed)"/>
              
              {/* Knowledge Graph to Generation Engine */}
              <line x1="380" y1="192" x2="480" y2="192" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrowGreen)"/>
              
              {/* Quality Engine to Knowledge Graph */}
              <line x1="300" y1="304" x2="300" y2="255" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowIndigo)"/>
              
              {/* Arrow markers */}
              <defs>
                <marker id="arrowYellow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/>
                </marker>
                <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/>
                </marker>
                <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#22c55e"/>
                </marker>
                <marker id="arrowIndigo" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#6366f1"/>
                </marker>
              </defs>
            </svg>
            
            {/* Components positioned absolutely with z-index above lines */}
            {/* Specification Engine - Top */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-yellow-100 p-4 rounded-lg text-center border-2 border-yellow-300 shadow-md w-48">
                <h5 className="font-bold text-yellow-800 text-sm">Specification Engine</h5>
                <p className="text-xs text-yellow-600">Requirements → Semantics</p>
              </div>
            </div>
            
            {/* Agent Platform - Left */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
              <div className="bg-red-100 p-4 rounded-lg text-center border-2 border-red-300 shadow-md w-44">
                <h5 className="font-bold text-red-800 text-sm">Agent Platform</h5>
                <p className="text-xs text-red-600">Task Orchestration</p>
              </div>
            </div>
            
            {/* Knowledge Graph - Center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-blue-600 text-white p-6 rounded-full text-center shadow-lg w-32 h-32 flex flex-col items-center justify-center">
                <h5 className="font-bold text-sm mb-1">Knowledge Graph</h5>
                <p className="text-xs opacity-90">Central Truth Source</p>
              </div>
            </div>
            
            {/* Generation Engine - Right */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
              <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-300 shadow-md w-44">
                <h5 className="font-bold text-green-800 text-sm">Generation Engine</h5>
                <p className="text-xs text-green-600">Semantics → Code</p>
              </div>
            </div>
            
            {/* Quality Engine - Bottom */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-indigo-100 p-4 rounded-lg text-center border-2 border-indigo-300 shadow-md w-48">
                <h5 className="font-bold text-indigo-800 text-sm">Quality Engine</h5>
                <p className="text-xs text-indigo-600">Validation & Compliance</p>
              </div>
            </div>
          </div>
          
          {/* Flow Direction Labels */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
            <div className="bg-white/80 p-3 rounded-lg border border-yellow-200">
              <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-yellow-700 font-semibold">Requirements Flow</p>
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-red-200">
              <div className="w-4 h-4 bg-red-400 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-red-700 font-semibold">Agent Coordination</p>
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-green-200">
              <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-green-700 font-semibold">Implementation Flow</p>
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-indigo-200">
              <div className="w-4 h-4 bg-indigo-400 rounded-full mx-auto mb-2"></div>
              <p className="text-xs text-indigo-700 font-semibold">Quality Feedback</p>
            </div>
          </div>
        </div>
      </div>

      {/* Event-Driven Communication */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Event-Driven Communication</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Components communicate through semantic events that carry rich contextual information, 
          enabling intelligent routing and processing decisions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-3">Semantic Event Structure</h4>
              <div className="bg-white p-4 rounded border border-purple-200 font-mono text-sm">
                <div className="text-purple-600">
                  <span className="text-gray-500">// Event Example</span><br/>
                  <span className="text-blue-600">event</span>: <span className="text-green-600">"requirement.updated"</span><br/>
                  <span className="text-blue-600">source</span>: <span className="text-green-600">"specification.engine"</span><br/>
                  <span className="text-blue-600">ontology</span>: <span className="text-green-600">"functional"</span><br/>
                  <span className="text-blue-600">entity</span>: <span className="text-green-600">"user-story-123"</span><br/>
                  <span className="text-blue-600">changes</span>: [<span className="text-green-600">"acceptance-criteria"</span>]<br/>
                  <span className="text-blue-600">impact</span>: [<span className="text-green-600">"design", "architecture"</span>]
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">Event Categories</h4>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• <strong>Knowledge Events:</strong> Ontology updates, validation results</li>
                <li>• <strong>Process Events:</strong> Task completion, workflow state changes</li>
                <li>• <strong>Quality Events:</strong> Validation failures, compliance alerts</li>
                <li>• <strong>User Events:</strong> Approval decisions, manual overrides</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4 text-center">Event Flow Example</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800">Requirement Change</h5>
                  <p className="text-xs text-gray-600">User updates acceptance criteria in specification engine</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800">Impact Analysis</h5>
                  <p className="text-xs text-gray-600">Knowledge graph identifies affected design and code elements</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800">Agent Orchestration</h5>
                  <p className="text-xs text-gray-600">Relevant agents receive update tasks with full context</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800">Synchronized Update</h5>
                  <p className="text-xs text-gray-600">All affected components update simultaneously</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Coordination Patterns */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Agent Coordination Patterns</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Specialized AI agents work together through sophisticated coordination patterns 
          that ensure consistent, high-quality outcomes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-4">Sequential Coordination</h4>
            <p className="text-yellow-700 text-sm mb-4">
              Agents work in predefined sequences where output from one agent becomes input for the next.
            </p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 text-sm">Example: Code Generation</h5>
                <div className="text-xs text-yellow-600 mt-1">
                  Specification Agent → Design Agent → Implementation Agent → Test Agent
                </div>
              </div>
              <div className="bg-white p-3 rounded border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 text-sm">Benefits:</h5>
                <ul className="text-xs text-yellow-600 mt-1 space-y-1">
                  <li>• Guaranteed consistency</li>
                  <li>• Clear dependency management</li>
                  <li>• Predictable execution flow</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">Parallel Coordination</h4>
            <p className="text-green-700 text-sm mb-4">
              Multiple agents work simultaneously on different aspects of the same semantic specification.
            </p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 text-sm">Example: Multi-Layer Generation</h5>
                <div className="text-xs text-green-600 mt-1">
                  Frontend Agent || Backend Agent || Database Agent || Test Agent
                </div>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 text-sm">Benefits:</h5>
                <ul className="text-xs text-green-600 mt-1 space-y-1">
                  <li>• Faster execution time</li>
                  <li>• Resource optimization</li>
                  <li>• Independent validation</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">Collaborative Coordination</h4>
            <p className="text-blue-700 text-sm mb-4">
              Agents actively communicate and negotiate to resolve conflicts and optimize outcomes.
            </p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-blue-200">
                <h5 className="font-semibold text-blue-800 text-sm">Example: Architecture Optimization</h5>
                <div className="text-xs text-blue-600 mt-1">
                  Performance Agent ↔ Security Agent ↔ Cost Agent
                </div>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <h5 className="font-semibold text-blue-800 text-sm">Benefits:</h5>
                <ul className="text-xs text-blue-600 mt-1 space-y-1">
                  <li>• Optimal trade-offs</li>
                  <li>• Conflict resolution</li>
                  <li>• Adaptive behavior</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow and State Management */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Data Flow and State Management</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-3">Centralized Knowledge State</h4>
              <p className="text-indigo-700 text-sm mb-4">
                The knowledge graph serves as the single source of truth, with all components 
                maintaining consistent views of the current state.
              </p>
              <ul className="text-indigo-600 text-sm space-y-2">
                <li>• <strong>Version Control:</strong> All changes tracked with full history</li>
                <li>• <strong>Consistency Guarantees:</strong> ACID properties for critical updates</li>
                <li>• <strong>Event Sourcing:</strong> State reconstructable from event log</li>
                <li>• <strong>Conflict Resolution:</strong> Automatic and manual resolution strategies</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-3">Distributed Caching</h4>
              <p className="text-teal-700 text-sm mb-4">
                Components maintain local caches of relevant knowledge subsets for 
                performance while ensuring consistency.
              </p>
              <ul className="text-teal-600 text-sm space-y-2">
                <li>• <strong>Smart Invalidation:</strong> Cache updates based on semantic dependencies</li>
                <li>• <strong>Prefetching:</strong> Anticipate data needs based on workflow patterns</li>
                <li>• <strong>Eventual Consistency:</strong> Balanced performance and consistency</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-teal-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4 text-center">State Synchronization Flow</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-indigo-200">
                <h5 className="font-semibold text-indigo-800 mb-2">1. State Change Detection</h5>
                <p className="text-xs text-indigo-600">
                  Knowledge graph detects semantic changes and calculates impact scope
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">2. Dependency Analysis</h5>
                <p className="text-xs text-blue-600">
                  System identifies all components affected by the change
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">3. Coordinated Update</h5>
                <p className="text-xs text-green-600">
                  All affected components receive updates in dependency order
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-teal-200">
                <h5 className="font-semibold text-teal-800 mb-2">4. Validation & Confirmation</h5>
                <p className="text-xs text-teal-600">
                  Components validate changes and confirm successful update
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Assurance Interactions */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Quality Assurance Interactions</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Quality validation is deeply integrated into component interactions, 
          ensuring standards are maintained throughout all processes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-3">Continuous Validation</h4>
              <p className="text-red-700 text-sm mb-4">
                Quality checks occur at every interaction point, not just at final stages.
              </p>
              <ul className="text-red-600 text-sm space-y-2">
                <li>• <strong>Pre-flight Checks:</strong> Validate inputs before processing</li>
                <li>• <strong>In-process Monitoring:</strong> Real-time quality metrics during execution</li>
                <li>• <strong>Post-processing Validation:</strong> Comprehensive output verification</li>
                <li>• <strong>Rollback Capabilities:</strong> Automatic reversion on quality failures</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-3">Quality Gates</h4>
              <p className="text-orange-700 text-sm mb-4">
                Mandatory quality checkpoints that must pass before proceeding to next stages.
              </p>
              <ul className="text-orange-600 text-sm space-y-2">
                <li>• <strong>Specification Gates:</strong> Requirements completeness and consistency</li>
                <li>• <strong>Design Gates:</strong> Architecture compliance and usability standards</li>
                <li>• <strong>Implementation Gates:</strong> Code quality and security standards</li>
                <li>• <strong>Deployment Gates:</strong> Performance and reliability requirements</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4 text-center">Quality Interaction Pattern</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">📝</div>
                <div className="flex-1 bg-white p-2 rounded border border-blue-200">
                  <h5 className="font-semibold text-blue-800 text-sm">Component Action</h5>
                  <p className="text-xs text-blue-600">Agent performs development task</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">✓</div>
                <div className="flex-1 bg-white p-2 rounded border border-red-200">
                  <h5 className="font-semibold text-red-800 text-sm">Quality Validation</h5>
                  <p className="text-xs text-red-600">Quality engine validates output</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</div>
                <div className="flex-1 bg-white p-2 rounded border border-green-200">
                  <h5 className="font-semibold text-green-800 text-sm">Pass: Continue</h5>
                  <p className="text-xs text-green-600">Validation passes, next component proceeds</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">⚠</div>
                <div className="flex-1 bg-white p-2 rounded border border-orange-200">
                  <h5 className="font-semibold text-orange-800 text-sm">Fail: Remediate</h5>
                  <p className="text-xs text-orange-600">Validation fails, automatic retry or human intervention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Human-in-the-Loop Integration */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Human-in-the-Loop Integration</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Human stakeholders are seamlessly integrated into component interactions at strategic 
          decision points without disrupting automated workflows.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-4">Strategic Decision Points</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• <strong>Requirement Ambiguity:</strong> Clarification requests to stakeholders</li>
              <li>• <strong>Architecture Trade-offs:</strong> Performance vs. cost decisions</li>
              <li>• <strong>Design Alternatives:</strong> UX approach selection</li>
              <li>• <strong>Quality Exceptions:</strong> Standards deviation approvals</li>
            </ul>
            <div className="mt-4 bg-white p-3 rounded border border-purple-200">
              <p className="text-xs text-purple-600">
                <strong>Integration Pattern:</strong> Components pause at decision points, 
                present options to humans, and resume with selected choice.
              </p>
            </div>
          </div>
          
          <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
            <h4 className="font-bold text-pink-800 mb-4">Approval Workflows</h4>
            <ul className="text-pink-700 text-sm space-y-2">
              <li>• <strong>Specification Reviews:</strong> Product owner approvals</li>
              <li>• <strong>Architecture Reviews:</strong> Technical architect sign-offs</li>
              <li>• <strong>Design Reviews:</strong> UX designer validations</li>
              <li>• <strong>Security Reviews:</strong> Security team approvals</li>
            </ul>
            <div className="mt-4 bg-white p-3 rounded border border-pink-200">
              <p className="text-xs text-pink-600">
                <strong>Integration Pattern:</strong> Automatic routing to appropriate 
                reviewers with context and deadline management.
              </p>
            </div>
          </div>
          
          <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
            <h4 className="font-bold text-cyan-800 mb-4">Collaborative Refinement</h4>
            <ul className="text-cyan-700 text-sm space-y-2">
              <li>• <strong>Iterative Improvement:</strong> Human feedback incorporation</li>
              <li>• <strong>Knowledge Enhancement:</strong> Domain expert input</li>
              <li>• <strong>Exception Handling:</strong> Edge case resolution</li>
              <li>• <strong>Learning Integration:</strong> Pattern improvement</li>
            </ul>
            <div className="mt-4 bg-white p-3 rounded border border-cyan-200">
              <p className="text-xs text-cyan-600">
                <strong>Integration Pattern:</strong> Bi-directional communication 
                enabling humans to guide and improve agent behavior.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interaction Benefits */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-8 border-l-4 border-purple-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Interaction Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-purple-800 mb-4">Technical Benefits</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• <strong>Consistency:</strong> Shared semantic understanding ensures alignment</li>
              <li>• <strong>Efficiency:</strong> Event-driven architecture minimizes unnecessary work</li>
              <li>• <strong>Scalability:</strong> Components can scale independently based on demand</li>
              <li>• <strong>Reliability:</strong> Built-in error handling and recovery mechanisms</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-pink-800 mb-4">Business Benefits</h4>
            <ul className="text-pink-700 text-sm space-y-2">
              <li>• <strong>Quality Assurance:</strong> Continuous validation throughout processes</li>
              <li>• <strong>Traceability:</strong> Complete audit trail of all interactions</li>
              <li>• <strong>Flexibility:</strong> Components can evolve without breaking interactions</li>
              <li>• <strong>Human Empowerment:</strong> Strategic decision-making preserved for humans</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Understanding Integration Points</h3>
        <p className="text-lg mb-6 opacity-90">
          These interaction patterns enable Breeze.AI to integrate seamlessly with existing 
          development tools, infrastructure, and organizational processes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Tool Integration</h4>
            <p className="text-sm">IDEs, CI/CD pipelines, project management tools</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Infrastructure Integration</h4>
            <p className="text-sm">Cloud platforms, databases, monitoring systems</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Process Integration</h4>
            <p className="text-sm">Existing workflows, approval processes, governance</p>
          </div>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Integration Points
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentInteractions;