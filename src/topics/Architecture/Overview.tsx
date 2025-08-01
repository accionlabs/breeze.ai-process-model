interface ArchitectureOverviewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Overview: React.FC<ArchitectureOverviewProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            System Architecture
          </span>
          {' '}Overview
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Breeze.AI's architecture is designed around semantic knowledge graphs and intelligent agent orchestration, 
          enabling systematic software development at enterprise scale.
        </p>
      </div>

      {/* Core Architectural Principles */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Architectural Principles</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🧠</span>
            </div>
            <h4 className="font-bold text-blue-800 mb-2">Semantic-First</h4>
            <p className="text-sm text-blue-600">
              Machine-readable knowledge graphs drive all system behavior
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
            <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🤖</span>
            </div>
            <h4 className="font-bold text-green-800 mb-2">Agent-Orchestrated</h4>
            <p className="text-sm text-green-600">
              Specialized AI agents handle domain-specific implementation tasks
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
            <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🔄</span>
            </div>
            <h4 className="font-bold text-purple-800 mb-2">Bidirectional Traceability</h4>
            <p className="text-sm text-purple-600">
              Perfect linkage between requirements, design, and implementation
            </p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
            <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">📈</span>
            </div>
            <h4 className="font-bold text-orange-800 mb-2">Evolutionary Design</h4>
            <p className="text-sm text-orange-600">
              Specifications and implementations evolve together systematically
            </p>
          </div>
        </div>
      </div>

      {/* High-Level Architecture Diagram */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">High-Level System Architecture</h3>
        
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg">
          {/* Knowledge Layer */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">Knowledge Layer</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg text-center border-2 border-blue-300">
                <h5 className="font-bold text-blue-800 mb-1">Functional</h5>
                <p className="text-xs text-blue-600">Business Requirements</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-300">
                <h5 className="font-bold text-green-800 mb-1">Design</h5>
                <p className="text-xs text-green-600">User Experience</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg text-center border-2 border-purple-300">
                <h5 className="font-bold text-purple-800 mb-1">Architecture</h5>
                <p className="text-xs text-purple-600">Technical Design</p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg text-center border-2 border-orange-300">
                <h5 className="font-bold text-orange-800 mb-1">Code</h5>
                <p className="text-xs text-orange-600">Implementation</p>
              </div>
            </div>
          </div>

          {/* Orchestration Layer */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">Agent Orchestration Layer</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-100 p-4 rounded-lg text-center border-2 border-yellow-300">
                <h5 className="font-bold text-yellow-800 mb-1">Semantic Agents</h5>
                <p className="text-xs text-yellow-600">Knowledge Graph Management</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg text-center border-2 border-red-300">
                <h5 className="font-bold text-red-800 mb-1">Implementation Agents</h5>
                <p className="text-xs text-red-600">Code Generation & Testing</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded-lg text-center border-2 border-indigo-300">
                <h5 className="font-bold text-indigo-800 mb-1">Quality Agents</h5>
                <p className="text-xs text-indigo-600">Validation & Compliance</p>
              </div>
            </div>
          </div>

          {/* Execution Layer */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">Execution Layer</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center border-2 border-gray-300">
                <h5 className="font-bold text-gray-800 mb-1">Development Environment</h5>
                <p className="text-xs text-gray-600">IDE Integration & Tooling</p>
              </div>
              <div className="bg-teal-100 p-4 rounded-lg text-center border-2 border-teal-300">
                <h5 className="font-bold text-teal-800 mb-1">Deployment Pipeline</h5>
                <p className="text-xs text-teal-600">CI/CD & Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Four-Ontology Framework */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Four-Ontology Framework</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          At the heart of Breeze.AI's architecture are four interconnected semantic ontologies that capture 
          all aspects of software development in machine-readable form.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                Functional Ontology
              </h4>
              <p className="text-blue-700 text-sm mb-3">
                Captures modality-agnostic user needs, business rules, and functional requirements 
                independent of implementation technology.
              </p>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Business process definitions</li>
                <li>• User story specifications</li>
                <li>• Domain rules and constraints</li>
                <li>• Acceptance criteria</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
                Architecture Ontology
              </h4>
              <p className="text-purple-700 text-sm mb-3">
                Defines logical technical design including system patterns, integration points, 
                and technology-specific architectural decisions.
              </p>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• System architecture patterns</li>
                <li>• Integration specifications</li>
                <li>• Technology stack definitions</li>
                <li>• Non-functional requirements</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                Design Ontology
              </h4>
              <p className="text-green-700 text-sm mb-3">
                Specifies user experience implementation including interface design, 
                interaction patterns, and accessibility requirements.
              </p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• UI component specifications</li>
                <li>• Interaction flow definitions</li>
                <li>• Design system compliance</li>
                <li>• Accessibility standards</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">4</span>
                Code Ontology
              </h4>
              <p className="text-orange-700 text-sm mb-3">
                Contains physical implementation units including code structure, testing specifications, 
                and deployment configurations.
              </p>
              <ul className="text-orange-600 text-sm space-y-1">
                <li>• Implementation specifications</li>
                <li>• Testing and validation rules</li>
                <li>• Deployment configurations</li>
                <li>• Quality assurance standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Orchestration Model */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Agent Orchestration Model</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Specialized AI agents operate on semantic knowledge graphs to perform intelligent automation 
          across the entire software development lifecycle.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-4">Semantic Agents</h4>
            <p className="text-yellow-700 text-sm mb-4">
              Manage knowledge graph creation, evolution, and validation across all four ontologies.
            </p>
            <ul className="text-yellow-600 text-sm space-y-2">
              <li>• <strong>Analysis Agents:</strong> Extract knowledge from existing artifacts</li>
              <li>• <strong>Validation Agents:</strong> Ensure ontology consistency and completeness</li>
              <li>• <strong>Evolution Agents:</strong> Manage specification updates and migrations</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-4">Implementation Agents</h4>
            <p className="text-red-700 text-sm mb-4">
              Generate code, tests, and documentation based on semantic specifications.
            </p>
            <ul className="text-red-600 text-sm space-y-2">
              <li>• <strong>Generation Agents:</strong> Create implementation artifacts from specifications</li>
              <li>• <strong>Testing Agents:</strong> Generate and execute comprehensive test suites</li>
              <li>• <strong>Documentation Agents:</strong> Produce technical and user documentation</li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-4">Quality Agents</h4>
            <p className="text-indigo-700 text-sm mb-4">
              Ensure compliance, performance, security, and architectural adherence.
            </p>
            <ul className="text-indigo-600 text-sm space-y-2">
              <li>• <strong>Compliance Agents:</strong> Validate regulatory and organizational standards</li>
              <li>• <strong>Security Agents:</strong> Implement and verify security patterns</li>
              <li>• <strong>Performance Agents:</strong> Optimize and monitor system performance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Architectural Benefits */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Architectural Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-blue-800 mb-4">Technical Advantages</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Perfect Traceability:</strong> Every implementation element traces to requirements</li>
              <li>• <strong>Automatic Propagation:</strong> Changes cascade through all affected layers</li>
              <li>• <strong>Quality by Design:</strong> Compliance and standards built into generation</li>
              <li>• <strong>Systematic Evolution:</strong> Architecture updates applied consistently</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-purple-800 mb-4">Business Advantages</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• <strong>Reduced Technical Debt:</strong> Specifications and code stay synchronized</li>
              <li>• <strong>Faster Development:</strong> Agents handle routine implementation tasks</li>
              <li>• <strong>Higher Quality:</strong> Systematic quality assurance across all artifacts</li>
              <li>• <strong>Easier Maintenance:</strong> Changes guided by semantic understanding</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technology Foundation */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Technology Foundation</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h4 className="font-bold text-gray-800 mb-3">Knowledge Graphs</h4>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-3">
              <span className="text-2xl">🔗</span>
            </div>
            <p className="text-sm text-gray-600">
              RDF/OWL-based semantic graphs with formal ontology definitions
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-bold text-gray-800 mb-3">AI Orchestration</h4>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-3">
              <span className="text-2xl">🤖</span>
            </div>
            <p className="text-sm text-gray-600">
              Large language models with specialized fine-tuning for domain tasks
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-bold text-gray-800 mb-3">Cloud Infrastructure</h4>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-3">
              <span className="text-2xl">☁️</span>
            </div>
            <p className="text-sm text-gray-600">
              Scalable cloud-native architecture with enterprise security
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-bold text-gray-800 mb-3">Integration APIs</h4>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-3">
              <span className="text-2xl">🔌</span>
            </div>
            <p className="text-sm text-gray-600">
              RESTful and GraphQL APIs for development tool integration
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Understanding System Components</h3>
        <p className="text-lg mb-6 opacity-90">
          This architectural foundation enables powerful capabilities through carefully designed 
          components working together seamlessly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Semantic Intelligence</h4>
            <p className="text-sm">Knowledge graphs provide deep understanding of requirements and design</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Agent Automation</h4>
            <p className="text-sm">AI agents handle complex development tasks with human-level understanding</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Quality Assurance</h4>
            <p className="text-sm">Built-in compliance and quality standards ensure enterprise-grade results</p>
          </div>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Core Components
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;