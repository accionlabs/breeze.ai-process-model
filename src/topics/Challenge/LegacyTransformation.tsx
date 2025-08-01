interface LegacyTransformationProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const LegacyTransformation: React.FC<LegacyTransformationProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Legacy System
          </span>
          {' '}Transformation
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Breeze.AI solves the most challenging problem in software engineering: 
          transforming legacy systems with missing or outdated documentation into modern, 
          well-specified applications.
        </p>
      </div>

      {/* The Legacy Challenge */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">The Legacy Documentation Crisis</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          For applications that have been in operation for several years, the documentation problem 
          becomes exponentially more difficult than greenfield development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200 text-center">
            <div className="w-12 h-12 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">📄</span>
            </div>
            <h4 className="font-bold text-red-800 mb-2">Missing Documentation</h4>
            <p className="text-sm text-red-600">
              Detailed specifications often don't exist or are severely outdated
            </p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
            <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🧠</span>
            </div>
            <h4 className="font-bold text-orange-800 mb-2">Knowledge Erosion</h4>
            <p className="text-sm text-orange-600">
              Original architects and designers may have left, taking contextual knowledge
            </p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-center">
            <div className="w-12 h-12 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">⏰</span>
            </div>
            <h4 className="font-bold text-yellow-800 mb-2">Specification Time Warp</h4>
            <p className="text-sm text-yellow-600">
              Existing specs reflect best practices from years or decades ago
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
            <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🔄</span>
            </div>
            <h4 className="font-bold text-purple-800 mb-2">Evolution Without Docs</h4>
            <p className="text-sm text-purple-600">
              Applications evolve through fixes and features, but documentation doesn't follow
            </p>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="font-bold text-red-300 mb-3">The Vicious Legacy Cycle</h4>
          <p className="text-gray-300">
            Applications that most need modernization (legacy systems with outdated specifications) 
            are also the ones with the least reliable foundation for that modernization. Traditional 
            reverse engineering is time-consuming, error-prone, and often incomplete.
          </p>
        </div>
      </div>

      {/* Breeze.AI Legacy Solution */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Breeze.AI's Legacy Transformation Solution</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          One of Breeze.AI's most immediately valuable capabilities addresses the crisis facing 
          long-standing applications: <strong>automatic knowledge extraction and modernization</strong>.
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
          <div className="text-center">
            <h4 className="font-bold text-blue-800 mb-2">The Game-Changing Capability:</h4>
            <p className="text-gray-700">
              Breeze.AI agents can convert existing artifacts—documents, diagrams, or entire code repositories—
              into structured knowledge graphs using predefined and proven ontologies.
            </p>
          </div>
        </div>
      </div>

      {/* Automatic Knowledge Extraction Process */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Automatic Knowledge Extraction Process</h3>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start gap-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
            <div className="flex-1">
              <h4 className="font-bold text-blue-800 mb-2">Artifact Analysis</h4>
              <p className="text-blue-700 mb-3">
                Core Breeze.AI ontology agents analyze and convert existing artifacts into machine-readable 
                functional, architectural, and design semantic graphs.
              </p>
              <div className="bg-white p-3 rounded border border-blue-200">
                <p className="text-sm text-blue-600">
                  <strong>Input Sources:</strong> Documents, diagrams, code repositories, database schemas, 
                  configuration files, deployment scripts
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-6 p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
            <div className="flex-1">
              <h4 className="font-bold text-green-800 mb-2">Semantic Analysis</h4>
              <p className="text-green-700 mb-3">
                Goes beyond simple documentation extraction—performs semantic analysis to understand 
                implicit patterns and relationships that exist in the legacy system.
              </p>
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="text-sm text-green-600">
                  <strong>Discovery Capabilities:</strong> Architectural patterns, design conventions, 
                  functional behaviors, business rules, data relationships
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-6 p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
            <div className="flex-1">
              <h4 className="font-bold text-purple-800 mb-2">Knowledge Reconstruction</h4>
              <p className="text-purple-700 mb-3">
                Creates a comprehensive semantic model of the existing system that captures both 
                what the system does and the reasoning behind design decisions.
              </p>
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="text-sm text-purple-600">
                  <strong>Reconstruction Elements:</strong> Business logic patterns, architectural decisions, 
                  design rationale, integration patterns, performance considerations
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-6 p-6 bg-orange-50 rounded-lg border border-orange-200">
            <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
            <div className="flex-1">
              <h4 className="font-bold text-orange-800 mb-2">Gap Identification & Modernization</h4>
              <p className="text-orange-700 mb-3">
                Interactive visualization tools help identify missing specifications, inconsistent 
                implementations, and areas where the system deviates from modern best practices.
              </p>
              <div className="bg-white p-3 rounded border border-orange-200">
                <p className="text-sm text-orange-600">
                  <strong>Modernization Opportunities:</strong> Security pattern updates, performance optimizations, 
                  accessibility improvements, architectural pattern evolution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Human Validation Loop */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Human Validation & Enhancement</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          The extraction process includes comprehensive human validation to ensure accuracy and completeness.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">Interactive Validation</h4>
              <p className="text-blue-700 text-sm mb-3">
                Agents represent knowledge graphs through interactive visualizations, documents, 
                and diagrams that make review and correction straightforward.
              </p>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Visual graph editors for reviewing ontology structures</li>
                <li>• Generated documentation for stakeholder review</li>
                <li>• Interactive diagrams showing system relationships</li>
                <li>• Validation workflows with role-based access</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-3">Stakeholder Collaboration</h4>
              <p className="text-green-700 text-sm mb-3">
                Human product owners, architects, and designers can validate if extracted 
                information is accurate and complete.
              </p>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• Product owners validate functional requirements</li>
                <li>• Architects review and approve technical patterns</li>
                <li>• Designers confirm UI/UX specifications</li>
                <li>• Developers verify implementation understanding</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-4">The Tip of the Iceberg Principle</h4>
            <p className="text-yellow-700 text-sm mb-4">
              While creating structured documentation from existing artifacts provides immediate value, 
              this capability represents just the beginning of what becomes possible once these 
              knowledge graphs exist.
            </p>
            
            <div className="bg-white p-4 rounded border border-yellow-200">
              <h5 className="font-semibold text-yellow-800 mb-2">Once Knowledge Graphs Exist:</h5>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li>• Automated implementation agents can be created</li>
                <li>• Specification evolution becomes systematic</li>
                <li>• BDD testing becomes automatic</li>
                <li>• Change impact analysis becomes precise</li>
                <li>• Modernization becomes manageable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modernization Advantages */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Systematic Modernization Advantages</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          After legacy system analysis, the modernization process gains significant advantages 
          over traditional approaches.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
            <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🔄</span>
            </div>
            <h4 className="font-bold text-green-800 mb-3">Gradual Modernization</h4>
            <p className="text-sm text-green-600">
              Legacy components can be modernized incrementally while maintaining system integrity. 
              No big-bang rewrites required.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">🔀</span>
            </div>
            <h4 className="font-bold text-blue-800 mb-3">Pattern Migration</h4>
            <p className="text-sm text-blue-600">
              Existing patterns can be analyzed and improved while preserving essential business logic. 
              Modernize implementation without losing functionality.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
            <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">⬆️</span>
            </div>
            <h4 className="font-bold text-purple-800 mb-3">Quality Improvement</h4>
            <p className="text-sm text-purple-600">
              Modern implementation can maintain functional behavior while improving architectural 
              and design adherence to current best practices.
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories Preview */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Real-World Impact</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-blue-800 mb-3">E-commerce Platform Modernization</h4>
            <p className="text-blue-700 text-sm mb-3">
              15-year-old e-commerce system with minimal documentation transformed into 
              modern, well-specified application in 3 months.
            </p>
            <ul className="text-blue-600 text-sm space-y-1">
              <li>• 847 business rules automatically extracted and documented</li>
              <li>• Security patterns updated to current standards</li>
              <li>• Performance optimizations applied systematically</li>
              <li>• Mobile-responsive design patterns implemented</li>
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm">
            <h4 className="font-bold text-purple-800 mb-3">Financial Services Integration</h4>
            <p className="text-purple-700 text-sm mb-3">
              Legacy banking system with scattered documentation consolidated into 
              unified semantic model enabling rapid integration development.
            </p>
            <ul className="text-purple-600 text-sm space-y-1">
              <li>• Compliance requirements automatically mapped</li>
              <li>• API specifications generated from existing interfaces</li>
              <li>• Security policies modernized and enforced</li>
              <li>• Integration patterns standardized across systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The Legacy Breakthrough */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Breaking the Legacy Modernization Barrier</h3>
        <p className="text-lg mb-6 opacity-90">
          For the first time, organizations can systematically modernize their legacy applications 
          without the traditional risks and overwhelming costs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-3">Traditional Legacy Modernization</h4>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• High-risk, high-cost projects</li>
              <li>• Often fail due to incomplete understanding</li>
              <li>• Require extensive manual analysis</li>
              <li>• Business disruption during transition</li>
            </ul>
          </div>
          
          <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-3">Breeze.AI Legacy Transformation</h4>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• Systematic, manageable process</li>
              <li>• Complete semantic understanding first</li>
              <li>• Automated analysis and modernization</li>
              <li>• Gradual transformation without disruption</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-xl font-bold mb-2">The Result:</p>
          <p className="text-lg">
            Legacy systems become <strong>modernization opportunities</strong> rather than 
            technical debt liabilities, with clear paths to current best practices.
          </p>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Discover Competitive Advantages
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegacyTransformation;