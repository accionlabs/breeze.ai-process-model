interface BreezeBreakthroughProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const BreezeBreakthrough: React.FC<BreezeBreakthroughProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          The 
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            {' '}Breeze.AI Breakthrough
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Machine-readable knowledge graphs eliminate the Manual Translation Tax completely, 
          transforming software development from ambiguous interpretation to precise automation.
        </p>
      </div>

      {/* The Revolutionary Foundation */}
      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-xl p-8 mb-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">The Revolutionary Foundation</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Breeze AI addresses the Manual Translation Tax by representing functional, architectural, 
          and design requirements as <strong className="text-blue-700">machine-readable knowledge graphs</strong> built 
          on well-defined and proven ontologies.
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-4 text-center">This isn't simply a documentation improvement—</h4>
          <p className="text-center text-lg text-gray-700">
            It's a <strong className="text-purple-700">complete elimination</strong> of the translation impedance 
            mismatch that has historically plagued software development.
          </p>
        </div>
      </div>

      {/* Before vs After Comparison */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">The Transformation</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Process */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-red-700 mb-4 text-center">Traditional Process</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">📄</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-red-800">Business Requirements</h5>
                  <p className="text-sm text-red-600">Human language documents</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="text-2xl text-gray-400">↓</div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">🤔</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-yellow-800">Human Interpretation</h5>
                  <p className="text-sm text-yellow-600">Ambiguity & variability</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="text-2xl text-gray-400">↓</div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">⚠️</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-orange-800">Implementation Gaps</h5>
                  <p className="text-sm text-orange-600">Inconsistent results</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="text-2xl text-gray-400">↓</div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-900 text-white rounded-lg">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">💀</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-red-300">Technical Debt</h5>
                  <p className="text-sm text-gray-300">Maintenance nightmares</p>
                </div>
              </div>
            </div>
          </div>

          {/* Breeze AI Process */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-green-700 mb-4 text-center">Breeze AI Process</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">📋</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-blue-800">Business Requirements</h5>
                  <p className="text-sm text-blue-600">Same starting point</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="text-2xl text-green-400">↓</div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">🧠</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-green-800">Knowledge Graphs</h5>
                  <p className="text-sm text-green-600">Machine-readable semantics</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="text-2xl text-green-400">↓</div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">🤖</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-purple-800">AI Agent Processing</h5>
                  <p className="text-sm text-purple-600">Zero ambiguity</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="text-2xl text-green-400">↓</div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✨</div>
                <div className="flex-1">
                  <h5 className="font-semibold text-green-800">High Quality Code</h5>
                  <p className="text-sm text-green-600">Perfect specification alignment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eliminating Translation Tax Components */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Eliminating Translation Tax Components</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
              <h4 className="font-bold text-green-800">Zero Interpretation Variability</h4>
            </div>
            <p className="text-green-700 text-sm">
              Machine-readable semantics eliminate human interpretation inconsistencies completely.
              Every agent processes the same specification identically.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
              <h4 className="font-bold text-blue-800">Unambiguous Specifications</h4>
            </div>
            <p className="text-blue-700 text-sm">
              Formal ontologies remove ambiguity through precise semantic definitions.
              No more guessing what the specification meant.
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
              <h4 className="font-bold text-purple-800">Perfect Traceability</h4>
            </div>
            <p className="text-purple-700 text-sm">
              Direct connections between specifications and implementation enable automatic 
              adherence verification and impact analysis.
            </p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center">
                <span className="text-lg">✓</span>
              </div>
              <h4 className="font-bold text-orange-800">Automatic Change Propagation</h4>
            </div>
            <p className="text-orange-700 text-sm">
              Specification changes automatically identify required implementation modifications 
              with zero manual analysis required.
            </p>
          </div>
        </div>
      </div>

      {/* The Critical Difference */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-8 border-l-4 border-purple-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">The Critical Difference</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <span className="text-xl">❌</span>
              Traditional Documents
            </h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• Require human interpretation</li>
              <li>• Contain inherent ambiguity</li>
              <li>• Create implementation variability</li>
              <li>• Impose Manual Translation Tax</li>
              <li>• Cannot be processed by machines</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <span className="text-xl">✅</span>
              Knowledge Graphs
            </h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Systematically understood by AI agents</li>
              <li>• Contain precise semantic definitions</li>
              <li>• Enable consistent processing</li>
              <li>• Eliminate Manual Translation Tax</li>
              <li>• Support automated validation</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
          <p className="text-lg text-gray-700 text-center">
            Unlike traditional documents that impose the Manual Translation Tax through required human interpretation, 
            <strong className="text-purple-700"> knowledge graphs can be systematically understood, validated, and processed by AI agents</strong>. 
            This eliminates the translation layer that has historically been the source of most implementation 
            misalignments and project inefficiencies.
          </p>
        </div>
      </div>

      {/* Three-Pillar Foundation */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Three-Pillar Ontology Framework</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg border-t-4 border-purple-500 text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-bold text-purple-800 mb-3">Functional Ontology</h4>
            <p className="text-purple-700 text-sm">
              Captures business requirements and user stories in structured, machine-processable format 
              while preserving original business intent and context.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-500 text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🏗️</span>
            </div>
            <h4 className="font-bold text-green-800 mb-3">Architecture Ontology</h4>
            <p className="text-green-700 text-sm">
              Represents system design patterns, component relationships, and structural guidelines 
              using Accion's proven architectural blueprints.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-500 text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="font-bold text-blue-800 mb-3">Design Ontology</h4>
            <p className="text-blue-700 text-sm">
              Encodes user interface patterns, interaction models, and design system guidelines 
              ensuring consistent user experiences and accessibility standards.
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-3 text-center">Plus: The Fourth Ontology</h4>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
            <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">⚙️</span>
            </div>
            <h5 className="font-bold text-orange-800 mb-2">Code Ontology</h5>
            <p className="text-orange-700 text-sm">
              Automatically converts generated code into semantic graphs, creating bidirectional 
              mapping between specifications and implementation for perfect traceability.
            </p>
          </div>
        </div>
      </div>

      {/* The Game Changer */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">The Game Changer</h3>
        <p className="text-lg mb-6 opacity-90">
          For the first time in software engineering history, we can eliminate the gap between 
          what we specify and what we implement.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Zero Ambiguity</h4>
            <p className="text-sm">Machine-readable specifications remove all interpretation variability</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Perfect Traceability</h4>
            <p className="text-sm">Every implementation decision traced to exact specification requirement</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Automatic Evolution</h4>
            <p className="text-sm">Specification changes propagate automatically with measurable impact</p>
          </div>
        </div>
        
        <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-xl font-bold mb-2">The Result:</p>
          <p className="text-lg">
            Software development transforms from an error-prone interpretation process to a 
            <strong> precise, automated, and continuously improving system</strong>.
          </p>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Revolutionary Capabilities
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreezeBreakthrough;