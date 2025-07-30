interface DesignOntologyProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const DesignOntology: React.FC<DesignOntologyProps> = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Design Ontology
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Physical implementation of user experience for specific modalities. This ontology defines 
          how functional requirements are translated into concrete user interfaces and interaction patterns 
          across web, mobile, API, and other modalities.
        </p>
      </div>

      {/* Visual Layered Structure */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Design Ontology Layers</h3>
        
        <div className="space-y-4 mb-8">
          {[
            { layer: "User Journeys", description: "Multi-session experiences spanning multiple applications", color: "bg-blue-100 border-blue-300", example: "Customer Lifecycle Journey, Employee Onboarding" },
            { layer: "Flows", description: "Single-session sequences connecting multiple pages", color: "bg-purple-100 border-purple-300", example: "Registration Flow, Checkout Flow" },
            { layer: "Pages", description: "Complete screen or interface units", color: "bg-green-100 border-green-300", example: "Product Listing Page, User Profile Page" },
            { layer: "Templates", description: "Reusable page-level layout patterns", color: "bg-orange-100 border-orange-300", example: "List Template, Detail Template" },
            { layer: "Organisms", description: "Complex component groups with specific functionality", color: "bg-red-100 border-red-300", example: "Navigation Header, Product Grid" },
            { layer: "Molecules", description: "Simple combinations of atoms with single purpose", color: "bg-teal-100 border-teal-300", example: "Search Box, Product Card" },
            { layer: "Atoms", description: "Individual interface elements (smallest units)", color: "bg-pink-100 border-pink-300", example: "Button, Input Field, Label" }
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
                {index < 6 && (
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
                <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">User Journeys</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Multi-session experiences spanning multiple applications or extended time periods</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Customer Lifecycle Journey", "Employee Onboarding Journey"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-600">Flows</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Single-session sequences connecting multiple pages or interfaces</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Registration Flow", "Checkout Flow", "Data Import Flow"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">Pages</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Complete screen or interface units representing discrete interaction contexts</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Product Listing Page", "User Profile Page", "API Response Schema"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-orange-600">Templates</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Reusable page-level layout patterns</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"List Template", "Detail Template", "Dashboard Template"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-red-600">Organisms</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Complex component groups with specific functionality</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Navigation Header", "Product Grid", "Data Table"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-teal-600">Molecules</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Simple combinations of atoms with single purpose</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Search Box", "Product Card", "Form Field Group"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-pink-600">Atoms</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Individual interface elements that cannot be broken down further</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"Button", "Input Field", "Label", "JSON Field"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Design Example: E-commerce Product Purchase */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Example: E-commerce Shopping Experience (Web Modality)</h3>
        
        <div className="space-y-6">
          {/* User Journey */}
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <h4 className="text-xl font-bold text-blue-800">User Journey</h4>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold text-gray-800 text-lg mb-2">Shopping Experience</div>
              <p className="text-sm text-gray-600">Complete customer journey from product discovery through post-purchase support</p>
            </div>
          </div>

          {/* Flows */}
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <h4 className="text-xl font-bold text-purple-800">Flows</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="font-semibold text-gray-800 mb-2">Product Discovery Flow</div>
                <p className="text-sm text-gray-600">Search → Browse → Filter → Compare</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="font-semibold text-gray-800 mb-2">Purchase Flow</div>
                <p className="text-sm text-gray-600">Cart → Checkout → Payment → Confirmation</p>
              </div>
            </div>
          </div>

          {/* Pages and Components Breakdown */}
          <div className="space-y-4">
            <div className="p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <h4 className="text-xl font-bold text-green-800">Pages → Templates → Organisms → Molecules → Atoms</h4>
              </div>
              
              <div className="space-y-4">
                {/* Search Results Page */}
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold text-gray-800 mb-3">Search Results Page</div>
                  <div className="ml-4 space-y-3">
                    <div className="p-3 bg-orange-50 rounded border border-orange-200">
                      <div className="font-semibold text-orange-800 mb-2">Template: List Template</div>
                      <div className="ml-4 space-y-2">
                        <div className="p-2 bg-red-50 rounded border border-red-200">
                          <div className="font-semibold text-red-800 mb-1">Organism: Product Grid</div>
                          <div className="ml-4 space-y-1">
                            <div className="p-2 bg-teal-50 rounded border border-teal-200">
                              <div className="font-semibold text-teal-800 mb-1">Molecule: Product Card</div>
                              <div className="ml-4 flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Product Image</span>
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Product Title</span>
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Price Display</span>
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Add to Cart Button</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Detail Page */}
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold text-gray-800 mb-3">Product Detail Page</div>
                  <div className="ml-4 space-y-3">
                    <div className="p-3 bg-orange-50 rounded border border-orange-200">
                      <div className="font-semibold text-orange-800 mb-2">Template: Detail Template</div>
                      <div className="ml-4 space-y-2">
                        <div className="p-2 bg-red-50 rounded border border-red-200">
                          <div className="font-semibold text-red-800 mb-1">Organism: Product Info Panel</div>
                          <div className="ml-4 space-y-1">
                            <div className="p-2 bg-teal-50 rounded border border-teal-200">
                              <div className="font-semibold text-teal-800 mb-1">Molecule: Image Gallery</div>
                              <div className="ml-4 flex gap-2">
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Main Image</span>
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Thumbnail</span>
                              </div>
                            </div>
                            <div className="p-2 bg-teal-50 rounded border border-teal-200">
                              <div className="font-semibold text-teal-800 mb-1">Molecule: Add to Cart Section</div>
                              <div className="ml-4 flex gap-2">
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Quantity Input</span>
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Add Button</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checkout Page */}
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <div className="font-semibold text-gray-800 mb-3">Checkout Page</div>
                  <div className="ml-4 space-y-3">
                    <div className="p-3 bg-orange-50 rounded border border-orange-200">
                      <div className="font-semibold text-orange-800 mb-2">Template: Form Template</div>
                      <div className="ml-4 space-y-2">
                        <div className="p-2 bg-red-50 rounded border border-red-200">
                          <div className="font-semibold text-red-800 mb-1">Organism: Payment Form</div>
                          <div className="ml-4 space-y-1">
                            <div className="p-2 bg-teal-50 rounded border border-teal-200">
                              <div className="font-semibold text-teal-800 mb-1">Molecule: Credit Card Group</div>
                              <div className="ml-4 flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Card Number Input</span>
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">CVV Input</span>
                                <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded border">Expiry Input</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Modal Considerations */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-l-4 border-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Cross-Modal Design Consistency</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-blue-800 mb-3">Web Modality</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Rich visual hierarchy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Complex navigation patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Detailed information display</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-purple-800 mb-3">Mobile Modality</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Touch-optimized interactions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Simplified navigation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">Progressive disclosure</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-800 mb-3">API Modality</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Structured data schemas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Error response patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Pagination structures</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg">
          <p className="text-gray-700 text-center">
            <strong>Key Principle:</strong> Same functional actions map to different design implementations optimized for each modality, 
            while maintaining consistent user experience principles across all touchpoints.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignOntology;