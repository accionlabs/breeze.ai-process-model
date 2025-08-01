interface ManualTranslationTaxProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const ManualTranslationTax: React.FC<ManualTranslationTaxProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            The Manual Translation Tax
          </span>
          {' '}Crisis
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Every software project pays a hidden tax: the cost of manually translating requirements into 
          implementation. This tax creates technical debt, delays, and quality issues that plague the industry.
        </p>
      </div>

      {/* The Core Problem */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-red-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">The Fundamental Flaw</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          In conventional software engineering, the three critical aspects of requirements—
          <strong className="text-red-700"> functional</strong>, 
          <strong className="text-orange-700"> architectural</strong>, and 
          <strong className="text-red-700"> design</strong>—are created as documents that impose 
          what we call the <strong>"Manual Translation Tax."</strong>
        </p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-bold text-lg text-gray-800 mb-4">The Translation Tax Components:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800">Interpretation Overhead</h5>
                  <p className="text-sm text-gray-600">Every developer must manually interpret written specifications, introducing variability and misunderstanding</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800">Ambiguity Resolution</h5>
                  <p className="text-sm text-gray-600">Unclear specifications require time-consuming clarification cycles between developers, architects, and product owners</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800">Traceability Loss</h5>
                  <p className="text-sm text-gray-600">No systematic way to verify that implementation actually follows the specified requirements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-semibold text-gray-800">Change Propagation Failure</h5>
                  <p className="text-sm text-gray-600">When specifications evolve, there's no automatic mechanism to identify what implementation changes are required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Translation Process Visualization */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">How the Translation Tax Works</h3>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-center gap-6 p-4 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800">Business Requirements Created</h4>
              <p className="text-gray-600">Product owners define what the system should do</p>
            </div>
            <div className="text-4xl text-gray-300">📄</div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-6 p-4 bg-yellow-50 rounded-lg">
            <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800">Written Specifications</h4>
              <p className="text-gray-600">Requirements documented in human language with inherent ambiguity</p>
            </div>
            <div className="text-4xl text-gray-300">📋</div>
          </div>

          {/* Step 3 - The Problem Zone */}
          <div className="flex items-center gap-6 p-4 bg-red-50 rounded-lg border-2 border-red-200">
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
            <div className="flex-1">
              <h4 className="font-bold text-red-800">Human Interpretation & Variability</h4>
              <p className="text-red-700">Each developer interprets specifications differently, creating inconsistent implementations</p>
            </div>
            <div className="text-4xl text-red-400">⚠️</div>
          </div>

          {/* Step 4 - Multiple Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">A</div>
              <div className="text-center">
                <h5 className="font-semibold text-orange-800">Implementation A</h5>
                <p className="text-xs text-orange-600">Developer's interpretation</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">B</div>
              <div className="text-center">
                <h5 className="font-semibold text-orange-800">Implementation B</h5>
                <p className="text-xs text-orange-600">Different interpretation</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">C</div>
              <div className="text-center">
                <h5 className="font-semibold text-orange-800">Implementation C</h5>
                <p className="text-xs text-orange-600">Yet another interpretation</p>
              </div>
            </div>
          </div>

          {/* Final Result */}
          <div className="flex items-center gap-6 p-6 bg-gray-900 text-white rounded-lg">
            <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">💀</div>
            <div className="flex-1">
              <h4 className="font-bold text-red-300">RESULT: Technical Debt</h4>
              <p className="text-gray-300">Inconsistent implementations, maintenance nightmares, and quality issues</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Devastating Impact */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Where Technical Debt Really Comes From</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <span className="text-xl">✅</span>
              Functional Alignment Success
            </h4>
            <p className="text-green-700 text-sm">
              Misalignment between implementation and functional requirements is relatively rare because 
              the testing process naturally catches and corrects such gaps. When a feature doesn't work 
              as expected, it's immediately obvious and gets fixed.
            </p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
              <span className="text-xl">❌</span>
              Architectural & Design Alignment Failure
            </h4>
            <p className="text-red-700 text-sm">
              Misalignment between implementation and architectural or design requirements occurs frequently 
              and often goes undetected because these misalignments don't typically cause immediate functional 
              failures but accumulate as technical debt over time.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-4">The Double Compounding Effect</h4>
          <p className="text-gray-700 mb-4">
            Applications suffer from both <strong>implementation drift</strong> (code deviating from current specifications) 
            AND <strong>specification obsolescence</strong> (specifications becoming outdated relative to current best practices).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-100 rounded-lg">
              <h5 className="font-bold text-blue-800">Year 1</h5>
              <p className="text-xs text-blue-600 mt-2">Specs match best practices<br/>Implementation follows specs</p>
            </div>
            <div className="text-center p-4 bg-yellow-100 rounded-lg">
              <h5 className="font-bold text-yellow-800">Year 3</h5>
              <p className="text-xs text-yellow-600 mt-2">Specs getting outdated<br/>Implementation drifting</p>
            </div>
            <div className="text-center p-4 bg-red-100 rounded-lg">
              <h5 className="font-bold text-red-800">Year 5</h5>
              <p className="text-xs text-red-600 mt-2">Specs obsolete<br/>Implementation legacy</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Economics Problem */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 mb-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">The Impossible Economics</h3>
        <p className="text-lg text-gray-700 mb-6">
          In traditional development approaches, keeping specifications current with evolving best practices 
          is often <strong>economically unfeasible</strong> because:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h5 className="font-semibold text-gray-800">Analysis Paralysis</h5>
                <p className="text-sm text-gray-600">Understanding the impact of updating specifications requires extensive manual analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h5 className="font-semibold text-gray-800">Implementation Uncertainty</h5>
                <p className="text-sm text-gray-600">Teams can't predict the full scope of changes required</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h5 className="font-semibold text-gray-800">Risk Aversion</h5>
                <p className="text-sm text-gray-600">Uncertainty about evolution impact makes teams reluctant to modernize</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h5 className="font-semibold text-gray-800">Resource Competition</h5>
                <p className="text-sm text-gray-600">Specification evolution competes with feature development—features usually win</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Crisis Summary */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">The Manual Translation Tax Crisis</h3>
        <p className="text-lg mb-6 opacity-90">
          This manual translation impedance mismatch has created an <strong>insurmountable gap</strong> between 
          specification and implementation that no amount of process improvement can fully bridge.
        </p>
        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-sm font-semibold">The fundamental issue:</p>
          <p className="text-lg">
            <strong>Lack of machine-processable semantic meaning</strong> in traditional documentation
          </p>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              See How Traditional Approaches Fail
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManualTranslationTax;