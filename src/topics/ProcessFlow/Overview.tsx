interface OverviewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Overview: React.FC<OverviewProps> = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Breeze.AI
          </span>
          {' '}Process Framework
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Our three-phase methodology transforms manual development into semantic engineering, 
          implementing the theoretical concepts you've learned into practical development workflows.
        </p>
      </div>

      {/* Bridge from Theory to Practice */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">From Theory to Practice</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Semantic Engineer Principles</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Orchestrate autonomous agents</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Design dynamic experiences</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-700">Create ethical frameworks</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">Govern agent ecosystems</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Breeze.AI Implementation</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Phase-based transformation methodology</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Human-AI collaboration workflows</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Continuous validation and oversight</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Gradual automation with quality gates</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Phase Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-orange-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Phase 1</h3>
            <p className="text-sm text-gray-600">Manual-Heavy Validation</p>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>15% Manual, 85% Automated</strong></p>
            <p>High human oversight with AI assistance for code generation and testing.</p>
            <div className="bg-orange-50 p-3 rounded-lg mt-3">
              <p className="text-xs text-orange-700">
                <strong>Focus:</strong> Establishing trust and validation patterns while maintaining quality
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Phase 2</h3>
            <p className="text-sm text-gray-600">Balanced Collaboration</p>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>30% Manual, 70% Automated</strong></p>
            <p>Humans focus on design and orchestration while AI handles implementation.</p>
            <div className="bg-blue-50 p-3 rounded-lg mt-3">
              <p className="text-xs text-blue-700">
                <strong>Focus:</strong> Semantic engineering practices with AI-human collaboration
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500">
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Phase 3</h3>
            <p className="text-sm text-gray-600">AI-Led Implementation</p>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>5% Manual, 95% Automated</strong></p>
            <p>Full semantic engineering with autonomous agents and human governance.</p>
            <div className="bg-green-50 p-3 rounded-lg mt-3">
              <p className="text-xs text-green-700">
                <strong>Focus:</strong> Agent orchestration, ethical frameworks, and ecosystem governance
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Overview;