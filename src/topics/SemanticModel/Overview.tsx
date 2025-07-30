interface OverviewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Overview: React.FC<OverviewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            Semantic Model
          </span>
          {' '}Structure
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Four distinct but interconnected ontologies that provide comprehensive software engineering 
          governance across application portfolios, enabling strategic initiatives like modernization, 
          rationalization, and greenfield development.
        </p>
      </div>

      {/* Core Principles */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 mb-8 border-l-4 border-purple-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Core Principles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-800">Modality-Agnostic Foundation</h4>
                <p className="text-gray-700 text-sm">Functional ontology represents user needs independently of implementation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-800">Physical Implementation Layers</h4>
                <p className="text-gray-700 text-sm">Design, Architecture, and Code ontologies handle concrete implementations</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-800">Formal Relationships</h4>
                <p className="text-gray-700 text-sm">Cross-ontology mappings enable traceability and governance analytics</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-800">Independent Operation</h4>
                <p className="text-gray-700 text-sm">Each ontology operates independently while maintaining structured relationships</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Four Ontologies Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <button
          onClick={() => onNavigate && onNavigate('functional')}
          className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-purple-500 hover:shadow-xl hover:scale-105 transition-all duration-200 text-left group"
        >
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-200 transition-colors">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700">Functional Ontology</h3>
            <p className="text-sm text-gray-600">Modality-Agnostic User Needs</p>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Structure:</strong> Persona → Outcomes → Scenarios → Steps → Actions</p>
            <p><strong>Purpose:</strong> Represents what users want to achieve, independent of how it's implemented</p>
            <div className="bg-purple-50 p-3 rounded-lg mt-3 group-hover:bg-purple-100 transition-colors">
              <p className="text-xs text-purple-700">
                <strong>Example:</strong> "E-commerce Shopper" → "Complete Purchase" → "Buy Gift" → "Search Products" → "Enter Search Term"
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-purple-600 group-hover:text-purple-700 font-medium">
              Click to explore →
            </span>
          </div>
        </button>

        <button
          onClick={() => onNavigate && onNavigate('design')}
          className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-200 text-left group"
        >
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700">Design Ontology</h3>
            <p className="text-sm text-gray-600">Physical UX Implementation</p>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Structure:</strong> User Journeys → Flows → Pages → Templates → Organisms → Molecules → Atoms</p>
            <p><strong>Purpose:</strong> Defines how user experiences are physically implemented for specific modalities</p>
            <div className="bg-blue-50 p-3 rounded-lg mt-3 group-hover:bg-blue-100 transition-colors">
              <p className="text-xs text-blue-700">
                <strong>Example:</strong> "Shopping Experience" → "Product Discovery Flow" → "Search Results Page" → "Product Card" → "Add to Cart Button"
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-blue-600 group-hover:text-blue-700 font-medium">
              Click to explore →
            </span>
          </div>
        </button>

        <button
          onClick={() => onNavigate && onNavigate('architecture')}
          className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500 hover:shadow-xl hover:scale-105 transition-all duration-200 text-left group"
        >
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
              <span className="text-2xl">🏗️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700">Architecture Ontology</h3>
            <p className="text-sm text-gray-600">Logical Technical Design</p>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Structure:</strong> Layers → Service Types → Services → Entities/Components</p>
            <p><strong>Purpose:</strong> Logical technical design including services, layers, and system organization patterns</p>
            <div className="bg-green-50 p-3 rounded-lg mt-3 group-hover:bg-green-100 transition-colors">
              <p className="text-xs text-green-700">
                <strong>Example:</strong> "Services Layer" → "Custom Services" → "Product Catalog Service" → "Product Entity"
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-green-600 group-hover:text-green-700 font-medium">
              Click to explore →
            </span>
          </div>
        </button>

        <button
          onClick={() => onNavigate && onNavigate('code')}
          className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-xl hover:scale-105 transition-all duration-200 text-left group"
        >
          <div className="text-center mb-4">
            <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-200 transition-colors">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-700">Code Ontology</h3>
            <p className="text-sm text-gray-600">Physical Implementation Units</p>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Structure:</strong> Applications → Modules → Classes/Components → Functions/Methods → Properties/Fields</p>
            <p><strong>Purpose:</strong> Actual executable code that realizes architecture and functionality</p>
            <div className="bg-orange-50 p-3 rounded-lg mt-3 group-hover:bg-orange-100 transition-colors">
              <p className="text-xs text-orange-700">
                <strong>Example:</strong> "E-commerce Web App" → "ProductModule" → "ProductCard" → "renderProductCard()" → "product.name"
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-sm text-orange-600 group-hover:text-orange-700 font-medium">
              Click to explore →
            </span>
          </div>
        </button>
      </div>

      {/* Ontology Relationships */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">How the Ontologies Connect</h3>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">🎯</span>
                </div>
                <span className="text-sm font-semibold text-purple-600">Functional</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="text-gray-400 text-2xl">↓</div>
                <div className="text-xs text-gray-500">implements</div>
              </div>
              
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <span className="text-sm font-semibold text-blue-600">Design</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <span className="text-sm font-semibold text-green-600">Architecture</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="text-gray-400 text-2xl">↓</div>
                <div className="text-xs text-gray-500">realizes</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">⚙️</span>
                </div>
                <span className="text-sm font-semibold text-orange-600">Code</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">What Users Want</h4>
              <p className="text-sm text-purple-700">Functional ontology captures user intentions and goals independent of implementation</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">How It Looks & Works</h4>
              <p className="text-sm text-blue-700">Design and Architecture define the user experience and technical structure</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">What Actually Runs</h4>
              <p className="text-sm text-orange-700">Code ontology represents the executable implementation that users interact with</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Governance Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Strategic Initiatives</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Application modernization with functional preservation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Portfolio rationalization through redundancy analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Cross-modal consistency validation</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Governance Analytics</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700">Architecture adherence tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-700">Design system compliance monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span className="text-gray-700">Implementation consistency analysis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;