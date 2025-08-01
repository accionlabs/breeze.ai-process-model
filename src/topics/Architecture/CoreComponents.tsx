interface CoreComponentsProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const CoreComponents: React.FC<CoreComponentsProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Core Components
          </span>
          {' '}Summary
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Essential system components that work together to enable semantic-driven software development 
          with intelligent automation and quality assurance.
        </p>
      </div>

      {/* Knowledge Graph Engine */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Knowledge Graph Engine</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          The foundational component that stores, manages, and evolves semantic knowledge graphs 
          across all four ontologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">Graph Storage & Management</h4>
              <ul className="text-blue-700 text-sm space-y-2">
                <li>• <strong>Neo4j Database:</strong> Enterprise-scale graph database for complex knowledge graphs</li>
                <li>• <strong>In-Memory Graphs:</strong> High-performance in-memory storage for smaller, frequently accessed graphs</li>
                <li>• <strong>Version Control:</strong> Git-like versioning for knowledge graph evolution</li>
                <li>• <strong>Query Engine:</strong> Cypher and GraphQL interfaces for data access</li>
                <li>• <strong>Validation Engine:</strong> Constraint checking and consistency validation</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-3">Ontology Management</h4>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• <strong>Schema Evolution:</strong> Automatic migration of ontology updates</li>
                <li>• <strong>Cross-Reference Resolution:</strong> Maintains links between ontologies</li>
                <li>• <strong>Conflict Detection:</strong> Identifies and resolves specification conflicts</li>
                <li>• <strong>Impact Analysis:</strong> Calculates change effects across all layers</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4 text-center">Graph Engine Architecture</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-blue-200 text-center">
                <h5 className="font-semibold text-blue-800">Query Interface Layer</h5>
                <p className="text-xs text-blue-600">Cypher, GraphQL, REST APIs</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200 text-center">
                <h5 className="font-semibold text-green-800">Ontology Management Layer</h5>
                <p className="text-xs text-green-600">Schema validation, evolution, conflict resolution</p>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200 text-center">
                <h5 className="font-semibold text-purple-800">Storage Layer</h5>
                <p className="text-xs text-purple-600">Distributed graph database, version control</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Orchestration Platform */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Agent Orchestration Platform</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Manages lifecycle, coordination, and execution of specialized AI agents that perform 
          development tasks based on semantic knowledge.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-3">Agent Lifecycle Management</h4>
            <ul className="text-yellow-700 text-sm space-y-2">
              <li>• Agent registration and discovery</li>
              <li>• Capability matching and routing</li>
              <li>• Resource allocation and scaling</li>
              <li>• Performance monitoring and optimization</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-3">Task Coordination</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Workflow orchestration and sequencing</li>
              <li>• Inter-agent communication protocols</li>
              <li>• Dependency resolution and parallel execution</li>
              <li>• Error handling and recovery mechanisms</li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-3">Quality Assurance</h4>
            <ul className="text-indigo-700 text-sm space-y-2">
              <li>• Output validation and verification</li>
              <li>• Compliance checking and enforcement</li>
              <li>• Audit trails and traceability</li>
              <li>• Human-in-the-loop integration</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-4">Agent Types & Specializations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Semantic Agents</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Knowledge extraction from legacy systems</li>
                <li>• Ontology validation and consistency checking</li>
                <li>• Requirement analysis and specification generation</li>
                <li>• Business rule discovery and formalization</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Implementation Agents</h5>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Code generation from semantic specifications</li>
                <li>• Test suite creation and execution</li>
                <li>• Documentation generation and maintenance</li>
                <li>• Deployment automation and configuration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Semantic Specification Engine */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Semantic Specification Engine</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Transforms human requirements into machine-readable specifications across all four ontology layers, 
          ensuring consistency and completeness.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-3">Requirements Processing</h4>
              <ul className="text-purple-700 text-sm space-y-2">
                <li>• <strong>Natural Language Analysis:</strong> Extract meaning from human requirements</li>
                <li>• <strong>Ambiguity Resolution:</strong> Identify and clarify unclear specifications</li>
                <li>• <strong>Completeness Checking:</strong> Detect missing requirements and edge cases</li>
                <li>• <strong>Consistency Validation:</strong> Ensure requirements don't conflict</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-3">Specification Generation</h4>
              <ul className="text-orange-700 text-sm space-y-2">
                <li>• <strong>Multi-Layer Mapping:</strong> Translate requirements across ontologies</li>
                <li>• <strong>Formal Specification:</strong> Generate precise, executable specifications</li>
                <li>• <strong>Traceability Maintenance:</strong> Link specifications to source requirements</li>
                <li>• <strong>Quality Metrics:</strong> Measure specification completeness and quality</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4 text-center">Specification Flow</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800">Requirements Input</h5>
                  <p className="text-xs text-gray-600">User stories, business rules, acceptance criteria</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800">Semantic Analysis</h5>
                  <p className="text-xs text-gray-600">NLP processing, context extraction, validation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800">Ontology Population</h5>
                  <p className="text-xs text-gray-600">Generate formal specifications across all layers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800">Validation & Approval</h5>
                  <p className="text-xs text-gray-600">Human review, validation, refinement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Generation Engine */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Implementation Generation Engine</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Converts semantic specifications into concrete implementation artifacts including code, 
          tests, documentation, and deployment configurations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">Code Generation</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Pattern-based code synthesis</li>
              <li>• Multi-language support and optimization</li>
              <li>• Framework-specific implementations</li>
              <li>• Quality standards enforcement</li>
            </ul>
            <div className="mt-4 bg-white p-3 rounded border border-green-200">
              <h5 className="font-semibold text-green-800 text-xs mb-1">Supported Patterns:</h5>
              <p className="text-green-600 text-xs">MVC, Microservices, Event-driven, Serverless</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">Test Generation</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• BDD test suite creation from specifications</li>
              <li>• Unit, integration, and E2E test coverage</li>
              <li>• Performance and load testing scenarios</li>
              <li>• Accessibility and security testing</li>
            </ul>
            <div className="mt-4 bg-white p-3 rounded border border-blue-200">
              <h5 className="font-semibold text-blue-800 text-xs mb-1">Test Types:</h5>
              <p className="text-blue-600 text-xs">Unit, Integration, E2E, Performance, Security</p>
            </div>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-4">Documentation Generation</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• API documentation and specifications</li>
              <li>• User guides and developer documentation</li>
              <li>• Architecture and design documentation</li>
              <li>• Compliance and audit documentation</li>
            </ul>
            <div className="mt-4 bg-white p-3 rounded border border-red-200">
              <h5 className="font-semibold text-red-800 text-xs mb-1">Formats:</h5>
              <p className="text-red-600 text-xs">OpenAPI, Markdown, PDF, Interactive Guides</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Assurance Engine */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Quality Assurance Engine</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Comprehensive quality validation that ensures all generated artifacts meet organizational 
          standards, compliance requirements, and best practices.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-3">Automated Quality Checks</h4>
              <ul className="text-indigo-700 text-sm space-y-2">
                <li>• <strong>Code Quality:</strong> Static analysis, code standards, complexity metrics</li>
                <li>• <strong>Security Scanning:</strong> Vulnerability detection, secure coding practices</li>
                <li>• <strong>Performance Analysis:</strong> Performance bottlenecks, optimization opportunities</li>
                <li>• <strong>Accessibility Validation:</strong> WCAG compliance, inclusive design patterns</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-3">Compliance Validation</h4>
              <ul className="text-teal-700 text-sm space-y-2">
                <li>• <strong>Regulatory Compliance:</strong> GDPR, HIPAA, SOX, industry standards</li>
                <li>• <strong>Organizational Policies:</strong> Custom rules, governance requirements</li>
                <li>• <strong>Architectural Compliance:</strong> Design pattern adherence, standards conformance</li>
                <li>• <strong>Documentation Standards:</strong> Completeness, accuracy, traceability</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-teal-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4 text-center">Quality Gate Process</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-indigo-200">
                <h5 className="font-semibold text-indigo-800 flex items-center gap-2">
                  <span className="w-4 h-4 bg-indigo-500 rounded-full"></span>
                  Specification Quality
                </h5>
                <p className="text-xs text-indigo-600 ml-6">Completeness, consistency, traceability</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  Implementation Quality
                </h5>
                <p className="text-xs text-green-600 ml-6">Code standards, security, performance</p>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <h5 className="font-semibold text-blue-800 flex items-center gap-2">
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                  Testing Quality
                </h5>
                <p className="text-xs text-blue-600 ml-6">Coverage, scenarios, validation</p>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <h5 className="font-semibold text-purple-800 flex items-center gap-2">
                  <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
                  Deployment Quality
                </h5>
                <p className="text-xs text-purple-600 ml-6">Configuration, security, monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Human-in-the-Loop Interface */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Human-in-the-Loop Interface</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Sophisticated user interfaces that enable human stakeholders to guide, validate, and enhance 
          the semantic development process at appropriate decision points.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">👥</span>
            </div>
            <h4 className="font-bold text-blue-800 mb-2">Stakeholder Dashboards</h4>
            <p className="text-sm text-blue-600">
              Role-based views for product owners, architects, developers, and business users
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
            <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🔍</span>
            </div>
            <h4 className="font-bold text-green-800 mb-2">Visual Validation Tools</h4>
            <p className="text-sm text-green-600">
              Interactive diagrams, flowcharts, and knowledge graph visualizations
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
            <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">✅</span>
            </div>
            <h4 className="font-bold text-purple-800 mb-2">Approval Workflows</h4>
            <p className="text-sm text-purple-600">
              Structured review and approval processes with audit trails and versioning
            </p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
            <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🔧</span>
            </div>
            <h4 className="font-bold text-orange-800 mb-2">Customization Interface</h4>
            <p className="text-sm text-orange-600">
              Tools for configuring agents, patterns, and organizational standards
            </p>
          </div>
        </div>
      </div>

      {/* Component Integration Summary */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8 border-l-4 border-green-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Component Integration & Synergy</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          These core components work together as an integrated system, creating capabilities 
          that exceed the sum of their individual parts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-800 mb-4">Seamless Data Flow</h4>
            <p className="text-green-700 text-sm mb-3">
              Knowledge graphs provide the foundation for all components, ensuring consistent 
              understanding and traceability across the entire development lifecycle.
            </p>
            <ul className="text-green-600 text-sm space-y-1">
              <li>• Requirements flow through specifications to implementation</li>
              <li>• Changes propagate automatically across all affected components</li>
              <li>• Quality metrics maintain consistency throughout the process</li>
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-blue-800 mb-4">Intelligent Automation</h4>
            <p className="text-blue-700 text-sm mb-3">
              AI agents leverage semantic understanding to make intelligent decisions 
              while maintaining human oversight at critical decision points.
            </p>
            <ul className="text-blue-600 text-sm space-y-1">
              <li>• Agents understand context and make appropriate trade-offs</li>
              <li>• Human expertise guides high-level decisions and validations</li>
              <li>• Quality assurance happens continuously, not as afterthought</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Understanding Component Interactions</h3>
        <p className="text-lg mb-6 opacity-90">
          These components work together through sophisticated interaction patterns 
          that enable seamless collaboration and data flow.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Event-Driven Architecture</h4>
            <p className="text-sm">Components communicate through semantic events and message passing</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Shared Knowledge Base</h4>
            <p className="text-sm">All components operate on the same semantic understanding</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Quality Feedback Loops</h4>
            <p className="text-sm">Continuous validation and improvement across all components</p>
          </div>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Component Interactions
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoreComponents;