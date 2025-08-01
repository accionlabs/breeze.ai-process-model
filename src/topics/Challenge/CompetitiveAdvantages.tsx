interface CompetitiveAdvantagesProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const CompetitiveAdvantages: React.FC<CompetitiveAdvantagesProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Competitive Advantages
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Why Breeze.AI surpasses standard AI tools like Copilot and Cursor: 
          semantic understanding, organizational context, and systematic quality assurance.
        </p>
      </div>

      {/* The Limitation of Standard Tools */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">The Limitation of Standard AI Tools</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          While out-of-the-box agent tools like Cursor or Copilot can perform relatively complex code generation, 
          they fundamentally <strong className="text-red-600">lack the ability to create or use detailed, contextual semantic models</strong> by themselves.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              What Standard Tools Can't Do
            </h4>
            <ul className="text-red-700 text-sm space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Understand specific architectural patterns unique to your organization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Maintain consistency with your established design systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Comprehend your business domain models and rules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Ensure adherence to your compliance and security requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Provide traceability between requirements and implementation</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-4">What This Means in Practice</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-2">Generic Code Generation</h5>
                <p className="text-sm text-gray-600">
                  Standard tools generate code that works functionally but may not align with 
                  your specific architectural guidelines or design standards.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-2">No Organizational Context</h5>
                <p className="text-sm text-gray-600">
                  They operate without understanding the patterns, conventions, and requirements 
                  that are critical for enterprise-quality software development.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-gray-200">
                <h5 className="font-semibold text-gray-800 mb-2">Limited Quality Assurance</h5>
                <p className="text-sm text-gray-600">
                  No systematic way to ensure generated code meets your specific quality, 
                  security, or compliance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breeze.AI's Semantic Advantage */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-8 border-l-4 border-green-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Breeze.AI's Semantic Understanding Advantage</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Breeze.AI enables the creation of <strong className="text-green-700">custom agents that understand the functional, 
          architectural, and design semantic models</strong> represented in your knowledge graphs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">Semantic Model Integration</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Architectural Patterns:</strong> Agents understand your specific system design principles</li>
              <li>• <strong>Design Systems:</strong> Code generation aligns with your established UI/UX guidelines</li>
              <li>• <strong>Business Domain Models:</strong> Implementation reflects your specific business rules</li>
              <li>• <strong>Quality Standards:</strong> Generated code meets your organizational standards automatically</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">Contextual Code Generation</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Code automatically adheres to architectural guidelines</li>
              <li>• UI components follow your design system precisely</li>
              <li>• Business logic implements domain rules correctly</li>
              <li>• Security patterns match your compliance requirements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Custom Agent Workflows */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Custom Agent Workflows</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Enterprise software development requires custom agent workflows that represent typical use cases 
          occurring in long-standing applications—patterns that repeat but cannot be captured as strict business rules.
        </p>
        
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-4">Beyond Simple Code Generation</h4>
            <p className="text-purple-700 mb-4">
              These patterns often repeat across different parts of an application but require contextual 
              understanding that only custom agents with semantic model awareness can provide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border border-purple-200">
                <h5 className="font-semibold text-purple-800 mb-2">Business Logic Patterns</h5>
                <p className="text-sm text-purple-600">
                  Domain-specific validation rules, workflow patterns, and business process implementations
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-purple-200">
                <h5 className="font-semibold text-purple-800 mb-2">Architectural Implementation</h5>
                <p className="text-sm text-purple-600">
                  Service layer patterns, data access patterns, and integration approaches specific to your stack
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-purple-200">
                <h5 className="font-semibold text-purple-800 mb-2">Design Interaction Patterns</h5>
                <p className="text-sm text-purple-600">
                  User flow implementations, component interactions, and accessibility patterns
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-4">Example: E-commerce Pattern Recognition</h4>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-2">Standard Tool Approach:</h5>
                <p className="text-sm text-orange-600">
                  "Create a product listing page" → Generates generic listing with basic functionality
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-orange-200">
                <h5 className="font-semibold text-orange-800 mb-2">Breeze.AI Custom Agent Approach:</h5>
                <p className="text-sm text-orange-600">
                  Understands your e-commerce semantic model → Implements product listing with your specific 
                  filtering patterns, inventory integration, pricing rules, accessibility standards, 
                  and design system components
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Assurance Integration */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Systematic Quality Assurance</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-3">Standard Tools Quality Approach</h4>
              <ul className="text-red-700 text-sm space-y-2">
                <li>• Manual code review required for quality assurance</li>
                <li>• No automatic adherence to organizational standards</li>
                <li>• Testing and validation added as separate steps</li>
                <li>• Quality practices depend on developer discipline</li>
                <li>• No systematic compliance verification</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-3">The Quality Gap Problem</h4>
              <p className="text-yellow-700 text-sm">
                Standard tools generate functional code but leave quality assurance, 
                compliance verification, and architectural adherence as manual tasks 
                that teams must handle separately.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-3">Breeze.AI Integrated Quality</h4>
              <ul className="text-green-700 text-sm space-y-2">
                <li>• Quality built into the agent behavior by default</li>
                <li>• Automatic adherence to all specification layers</li>
                <li>• BDD testing generated automatically with implementation</li>
                <li>• Compliance validation happens during generation</li>
                <li>• Architectural patterns enforced systematically</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">The Quality Integration Advantage</h4>
              <p className="text-blue-700 text-sm">
                Quality becomes the path of least resistance rather than additional work. 
                Teams get enterprise-grade quality automatically without manual overhead 
                or process discipline requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Evolutionary Capability */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Evolutionary Capability</h3>
        
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-4">
            Perhaps the most significant advantage: <strong>Breeze.AI enables systematic evolution</strong> of 
            architectural and design specifications while standard tools operate with static understanding.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-4">Standard Tools: Static Knowledge</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-red-200">
                <p className="text-sm text-red-700">
                  <strong>Training Data Limitation:</strong> Knowledge frozen at training time
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                <p className="text-sm text-red-700">
                  <strong>No Organizational Learning:</strong> Cannot adapt to your specific patterns
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                <p className="text-sm text-red-700">
                  <strong>Evolution Resistance:</strong> Updating patterns requires model retraining
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">Breeze.AI: Dynamic Evolution</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="text-sm text-green-700">
                  <strong>Living Knowledge Graphs:</strong> Specifications evolve with best practices
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="text-sm text-green-700">
                  <strong>Organizational Adaptation:</strong> Agents learn and improve from your patterns
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="text-sm text-green-700">
                  <strong>Systematic Modernization:</strong> Architecture updates propagate automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Measurable ROI Advantage */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Measurable ROI Advantage</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-blue-800 mb-4">Standard AI Tools ROI</h4>
            <ul className="text-blue-700 text-sm space-y-2 mb-4">
              <li>• Faster initial code generation</li>
              <li>• Reduced typing and boilerplate creation</li>
              <li>• Some productivity improvement for individual developers</li>
            </ul>
            <div className="bg-white p-4 rounded border border-blue-200">
              <p className="text-sm text-blue-600">
                <strong>But:</strong> Quality assurance, architectural compliance, and specification 
                evolution remain manual tasks with associated costs.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-purple-800 mb-4">Breeze.AI Comprehensive ROI</h4>
            <ul className="text-purple-700 text-sm space-y-2 mb-4">
              <li>• Faster implementation of organizational patterns</li>
              <li>• Automatic quality assurance and compliance</li>
              <li>• Eliminated technical debt from specification drift</li>
              <li>• Systematic modernization without project overhead</li>
              <li>• Perfect traceability and change impact analysis</li>
            </ul>
            <div className="bg-white p-4 rounded border border-purple-200">
              <p className="text-sm text-purple-600">
                <strong>Result:</strong> Compound benefits across the entire development lifecycle, 
                not just code generation speed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Strategic Difference */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">The Strategic Difference</h3>
        <p className="text-lg mb-6 opacity-90">
          While standard AI tools provide tactical code generation improvements, 
          Breeze.AI delivers strategic transformation of the entire development process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Organizational Intelligence</h4>
            <p className="text-sm">Agents understand your specific patterns, standards, and requirements</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Systematic Quality</h4>
            <p className="text-sm">Quality assurance built into every generated component automatically</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Continuous Evolution</h4>
            <p className="text-sm">Specifications and implementations evolve together systematically</p>
          </div>
        </div>
        
        <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-xl font-bold mb-2">The Bottom Line:</p>
          <p className="text-lg">
            Standard tools help you <strong>code faster</strong>. 
            Breeze.AI helps you <strong>build better software systematically</strong> 
            while coding faster.
          </p>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore System Architecture
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitiveAdvantages;