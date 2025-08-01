interface TraditionalApproachesProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const TraditionalApproaches: React.FC<TraditionalApproachesProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Why 
          <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            {' '}Traditional Approaches
          </span>
          {' '}Fail
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Neither Waterfall nor Agile methodologies can solve the Manual Translation Tax. 
          Each creates its own set of problems that make the crisis worse.
        </p>
      </div>

      {/* Waterfall Reality */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="text-3xl">🌊</span>
          The Waterfall Reality: When Detailed Specifications Become Impossible
        </h3>
        
        <div className="mb-6">
          <h4 className="font-bold text-lg text-gray-800 mb-4">The Waterfall Promise:</h4>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <span className="text-gray-700"><strong>High-Level Requirements:</strong> Product owners define functional needs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <span className="text-gray-700"><strong>Architectural Guidelines:</strong> Architects create backend specifications</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <span className="text-gray-700"><strong>Design Systems:</strong> Designers establish frontend guidelines</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <span className="text-gray-700"><strong>Detailed Specifications:</strong> Break down into implementable details</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <span className="text-gray-700"><strong>Code Implementation:</strong> Developers write code adhering to all guidelines</span>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-800 mb-3">The Critical Breakdown Point:</h4>
            <p className="text-red-700 mb-4">
              Detailed specifications rarely align with 
              architecture and design guidelines in real-world scenarios.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">Complex Interdependencies</h5>
                <p className="text-sm text-red-600">Requirements with intricate relationships become unmanageable</p>
              </div>
              <div className="bg-white p-4 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">Legacy Evolution</h5>
                <p className="text-sm text-red-600">Long-running applications outgrow documentation capabilities</p>
              </div>
              <div className="bg-white p-4 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">Rapid Change</h5>
                <p className="text-sm text-red-600">Business needs change faster than documentation can be maintained</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="font-bold text-red-300 mb-3">The Inevitable Result:</h4>
          <p className="text-gray-300">
            Specifications become inadequate, leaving significant scope for misalignment. Teams assume that 
            following incomplete detailed specifications will automatically ensure adherence to high-level 
            functional, architectural, and design requirements. <strong className="text-red-300">This assumption is catastrophically wrong.</strong>
          </p>
        </div>
      </div>

      {/* Agile Paradox */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="text-3xl">🔄</span>
          The Agile Paradox: Architecture Lost in Sprints
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-3">The Agile Promise</h4>
            <p className="text-green-700 text-sm">
              Detailed functional requirements are captured in backlogs as user stories, providing 
              flexibility and responsiveness to change.
            </p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-3">The Architectural Reality</h4>
            <ul className="text-orange-700 text-sm space-y-2">
              <li>• Architecture decisions made at the beginning, then treated as static</li>
              <li>• Architects rarely participate in ongoing sprints</li>
              <li>• Engineers expected to study years-old guidelines</li>
              <li>• No mechanism for specification evolution</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
          <h4 className="font-bold text-purple-800 mb-3">The Specification Stagnation Problem</h4>
          <p className="text-purple-700 mb-4">
            Agile processes excel at evolving <strong>functional requirements</strong> through iterative feedback, 
            but provide <strong>no equivalent mechanism</strong> for evolving architectural and design specifications.
          </p>
          
          <div className="bg-white p-4 rounded border border-purple-200">
            <p className="text-purple-600 text-sm">
              <strong>Critical Asymmetry:</strong> Business requirements stay current while technical 
              specifications become increasingly obsolete.
            </p>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h4 className="font-bold text-red-800 mb-3">The Hidden Complexity of Architectural Evolution</h4>
          <p className="text-red-700 text-sm mb-4">
            While Conway's law suggests software architecture should mimic team structure, this oversimplifies 
            both initial architecture challenges and architectural evolution complexity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-red-800 mb-2">Architectural Guidelines Encompass:</h5>
              <ul className="text-red-600 text-sm space-y-1">
                <li>• Technical patterns and practices</li>
                <li>• Scalability considerations</li>
                <li>• Security requirements</li>
                <li>• Integration standards</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-800 mb-2">These Elements:</h5>
              <ul className="text-red-600 text-sm space-y-1">
                <li>• Cannot be represented by team structures</li>
                <li>• Evolve independently of organizational changes</li>
                <li>• Require deep technical expertise</li>
                <li>• Have complex interdependencies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BDD Dilemma */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="text-3xl">🧪</span>
          The Behavior-Driven Development Dilemma
        </h3>
        
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-6">
            BDD represents a proven methodology that dramatically improves functional requirement adherence, 
            yet it faces adoption challenges that reveal deeper systemic issues.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-4">The BDD Process</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
                  <p className="text-sm text-blue-700">Define acceptance tests using domain-specific language (Gherkin)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
                  <p className="text-sm text-blue-700">Implement code to fulfill user story requirements</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
                  <p className="text-sm text-blue-700">Create protocol drivers for domain-specific terms</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">4</div>
                  <p className="text-sm text-blue-700">Execute acceptance tests to validate requirements</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-4">The BDD Reality</h4>
              <p className="text-red-700 mb-4 text-sm">
                While BDD almost certainly increases efficiency and productivity, it creates additional 
                workload that many software teams struggle to maintain consistently.
              </p>
              
              <div className="bg-white p-4 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">Common BDD Failures:</h5>
                <ul className="text-red-600 text-sm space-y-1">
                  <li>• Incomplete adoption under deadline pressure</li>
                  <li>• Eventual abandonment due to overhead</li>
                  <li>• Manual effort becomes unsustainable</li>
                  <li>• Quality practices become casualties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
          <h4 className="font-bold text-yellow-800 mb-3">The Manual Translation Tax in Practice</h4>
          <p className="text-yellow-700">
            Teams acknowledge that BDD improves quality but can't sustain the manual effort required to 
            implement it properly. This highlights a fundamental issue—when quality-improving practices 
            require paying the Manual Translation Tax through significant manual overhead, they become 
            casualties of deadline pressure and resource constraints.
          </p>
        </div>
      </div>

      {/* Legacy Documentation Crisis */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <span className="text-3xl">📚</span>
          The Legacy Documentation Crisis
        </h3>
        
        <p className="text-lg text-gray-700 mb-6">
          For software applications in operation for several years, both the documentation problem 
          and specification evolution problem become even more acute.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-3">Missing Documentation</h4>
              <p className="text-red-700 text-sm">
                Detailed functional, architectural, and design specifications often don't exist or 
                are severely outdated.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-3">Knowledge Erosion</h4>
              <p className="text-orange-700 text-sm">
                Original architects and designers may have left the organization, taking contextual 
                knowledge about specifications and design.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-3">Evolution Without Documentation</h4>
              <p className="text-purple-700 text-sm">
                Applications evolve through bug fixes and enhancements, but these changes rarely 
                update comprehensive specifications.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">The Specification Time Warp</h4>
              <p className="text-blue-700 text-sm">
                Many legacy applications operate with specifications reflecting best practices 
                from years or decades ago.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="font-bold text-red-300 mb-3">Reverse Engineering Impossibility</h4>
          <p className="text-gray-300 mb-4">
            Attempting to reconstruct current design intent from existing code AND modernize that 
            intent to current best practices is time-consuming, error-prone, and often incomplete.
          </p>
          
          <div className="bg-red-900/50 p-4 rounded border border-red-500">
            <p className="text-red-200 text-sm">
              <strong>The Challenge:</strong> Teams must simultaneously figure out what the application 
              currently does AND what it should be doing according to modern standards.
            </p>
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h4 className="font-bold text-red-800 mb-3">The Vicious Modernization Cycle</h4>
          <p className="text-red-700">
            Applications that most need modernization (legacy systems with outdated specifications) 
            are also the ones with the least reliable foundation for that modernization. This creates 
            a vicious cycle where the applications that would benefit most from specification evolution 
            are also the ones where such evolution is most risky and difficult to implement.
          </p>
        </div>
      </div>

      {/* The Systemic Failure */}
      <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">The Systemic Failure</h3>
        <p className="text-lg mb-6 opacity-90">
          Neither Waterfall nor Agile can solve the Manual Translation Tax because both rely on 
          <strong> human interpretation of ambiguous specifications</strong>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Waterfall</h4>
            <p className="text-sm">Detailed specifications become impossible to maintain</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Agile</h4>
            <p className="text-sm">Architecture and design specifications stagnate</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">BDD</h4>
            <p className="text-sm">Manual overhead makes quality practices unsustainable</p>
          </div>
        </div>
        
        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
          <p className="text-sm font-semibold mb-2">The Real Problem:</p>
          <p className="text-lg">
            <strong>The fundamental reliance on human interpretation</strong> creates an insurmountable gap 
            that no process improvement can bridge.
          </p>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Discover the Breeze.AI Breakthrough
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TraditionalApproaches;