interface FunctionalOntologyProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const FunctionalOntology: React.FC<FunctionalOntologyProps> = () => {
  const exampleData = {
    persona: "E-commerce Shopper",
    outcome: "Complete Purchase",
    scenario: "Buy Gift for Friend",
    steps: ["Search Products", "Review Options", "Make Decision", "Complete Transaction"],
    actions: {
      "Search Products": ["Enter Search Term", "Apply Category Filter"],
      "Review Options": ["View Product Details", "Compare Products", "Read Reviews"],
      "Make Decision": ["Add to Cart", "Proceed to Checkout"],
      "Complete Transaction": ["Enter Shipping Info", "Enter Payment Info", "Confirm Purchase"]
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Functional Ontology
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Modality-agnostic representation of user needs and behaviors. This ontology captures 
          what users want to achieve, independent of how those goals are implemented across 
          different interfaces and technologies.
        </p>
      </div>

      {/* Visual Layered Structure */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Functional Ontology Layers</h3>
        
        <div className="space-y-4 mb-8">
          {[
            { layer: "Persona", description: "User archetypes with specific needs, goals, and contexts", color: "bg-purple-100 border-purple-300", example: "E-commerce Shopper, System Administrator" },
            { layer: "Outcomes", description: "High-level goals the persona wants to achieve", color: "bg-blue-100 border-blue-300", example: "Complete Purchase, Monitor System Health" },
            { layer: "Scenarios", description: "Specific use cases within an outcome", color: "bg-green-100 border-green-300", example: "Buy Gift for Friend, Investigate Performance Alert" },
            { layer: "Steps", description: "Logical progression of activities in a scenario", color: "bg-orange-100 border-orange-300", example: "Search Products, Review Options, Make Decision" },
            { layer: "Actions", description: "Atomic user intentions that drive interactions", color: "bg-red-100 border-red-300", example: "Enter Search Term, Filter Results, Compare Items" }
          ].map((tier, index) => (
            <div key={index} className={`p-4 rounded-lg border-2 ${tier.color}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{tier.layer}</h4>
                    <p className="text-sm text-gray-600">{tier.description}</p>
                    <p className="text-xs text-gray-500 mt-1 italic">{tier.example}</p>
                  </div>
                </div>
                {index < 4 && (
                  <div className="text-gray-400 text-2xl">↓</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Definitions Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Level</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Definition</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-600">Persona</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Distinct user archetype with specific needs, goals, and contexts</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"E-commerce Shopper", "System Administrator", "API Consumer"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">Outcomes</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">High-level goals the persona wants to achieve</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Complete Purchase", "Monitor System Health", "Retrieve Product Data"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">Scenarios</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Specific use cases within an outcome</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Buy Gift for Friend", "Investigate Performance Alert", "Bulk Product Sync"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-orange-600">Steps</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Logical progression of activities in a scenario</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Search Products", "Review Options", "Make Decision"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-red-600">Actions</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Atomic user intentions that drive interactions</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Enter Search Term", "Filter Results", "Compare Items"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Example */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Interactive Example: E-commerce Purchase</h3>
        
        <div className="space-y-6">
          {/* Persona */}
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h4 className="text-xl font-bold text-purple-800">Persona</h4>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold text-gray-800 text-lg">{exampleData.persona}</div>
              <p className="text-sm text-gray-600 mt-1">A user archetype representing someone who purchases items online for personal use or as gifts</p>
            </div>
          </div>

          {/* Outcome */}
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <h4 className="text-xl font-bold text-blue-800">Outcome</h4>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold text-gray-800 text-lg">{exampleData.outcome}</div>
              <p className="text-sm text-gray-600 mt-1">The high-level goal of successfully purchasing an item through the platform</p>
            </div>
          </div>

          {/* Scenario */}
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h4 className="text-xl font-bold text-green-800">Scenario</h4>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold text-gray-800 text-lg">{exampleData.scenario}</div>
              <p className="text-sm text-gray-600 mt-1">A specific context within the purchase outcome - buying something for someone else</p>
            </div>
          </div>

          {/* Steps and Actions */}
          <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h4 className="text-xl font-bold text-orange-800">Steps & Actions</h4>
            </div>
            <div className="space-y-4">
              {exampleData.steps.map((step, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                  <div className="ml-8 space-y-2">
                    {exampleData.actions[step as keyof typeof exampleData.actions]?.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-center gap-3 p-2 bg-red-50 rounded border border-red-200">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">A</span>
                        </div>
                        <span className="text-gray-700 text-sm">{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Characteristics */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 border-l-4 border-purple-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Characteristics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Modality Independence</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-700">Same functional structure applies to web, mobile, API, and voice interfaces</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-700">Implementation details are handled by Design, Architecture, and Code ontologies</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">User-Centric Focus</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-700">Captures user intent rather than system functionality</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-700">Enables consistent user experiences across all touchpoints</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionalOntology;