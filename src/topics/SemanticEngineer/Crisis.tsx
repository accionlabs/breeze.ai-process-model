interface CrisisProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Crisis: React.FC<CrisisProps> = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Are Software Engineers Redundant?
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          As AI and autonomous agents reshape technology, software engineers face a critical question: adapt or become obsolete. 
          The answer lies in evolving from traditional coders to semantic engineers who orchestrate intelligent systems.
        </p>
      </div>

      {/* The Evolution Challenge */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Evolution Challenge</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="font-bold text-gray-800">The Problem</h3>
            <p className="text-sm text-gray-600">
              Traditional software engineering roles are being automated by AI, making many skills redundant.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="font-bold text-gray-800">The Transition</h3>
            <p className="text-sm text-gray-600">
              Engineers must evolve across four key dimensions to remain relevant in an AI-driven world.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold text-gray-800">The Solution</h3>
            <p className="text-sm text-gray-600">
              Become a semantic engineer who designs, orchestrates, and governs autonomous agent ecosystems.
            </p>
          </div>
        </div>
      </div>

      {/* AI Disruption Visualization */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border-l-4 border-red-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">The AI Disruption</h3>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gray-800 mb-3">What AI Can Already Do:</h4>
              <div className="space-y-2">
                {[
                  'Generate code from natural language',
                  'Write comprehensive test suites',
                  'Debug and fix existing code',
                  'Create documentation automatically',
                  'Deploy and manage infrastructure',
                  'Optimize database queries'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gray-800 mb-3">What's Coming Next:</h4>
              <div className="space-y-2">
                {[
                  'Autonomous system architecture',
                  'Self-healing applications',
                  'Intelligent requirement analysis',
                  'Automated security implementation',
                  'Dynamic scaling and optimization',
                  'Multi-agent development teams'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-red-200">
            <p className="text-lg font-semibold text-red-800 mb-2">💡 The Reality Check:</p>
            <p className="text-red-700 leading-relaxed">
              If your primary value as a software engineer comes from writing code, debugging, or implementing features, 
              you're competing directly with AI systems that are getting better, faster, and cheaper every day. 
              <strong> The time to evolve is now.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crisis;