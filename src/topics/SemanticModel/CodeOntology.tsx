interface CodeOntologyProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const CodeOntology: React.FC<CodeOntologyProps> = () => {
  const technologyStacks = [
    {
      category: "Frontend",
      color: "bg-blue-50 border-blue-200",
      stacks: [
        {
          name: "React/TypeScript",
          applications: "Create React App, Next.js App, Micro-frontend",
          components: "React Components, Custom Hooks, Context Providers",
          functions: "Event handlers, useEffect, useState, Custom hooks"
        },
        {
          name: "Vue.js",
          applications: "Vue CLI App, Nuxt.js App, Vue Micro-frontend", 
          components: "Vue Components, Composables, Directives",
          functions: "Methods, Computed properties, Watchers"
        }
      ]
    },
    {
      category: "Backend",
      color: "bg-green-50 border-green-200",
      stacks: [
        {
          name: "Node.js/Express",
          applications: "Express Server, Serverless Functions, Microservices",
          components: "Controllers, Services, Repositories, Middleware",
          functions: "Route handlers, Business logic methods, Database operations"
        },
        {
          name: "Java/Spring",
          applications: "Spring Boot Apps, Microservices, WAR deployments",
          components: "Controllers, Services, Repositories, Configurations", 
          functions: "REST endpoints, Service methods, Repository operations"
        }
      ]
    },
    {
      category: "Data",
      color: "bg-purple-50 border-purple-200", 
      stacks: [
        {
          name: "SQL Database",
          applications: "Database instances, Data warehouses, OLAP systems",
          components: "Tables, Views, Stored procedures, Functions",
          functions: "SQL queries, Stored procedures, Triggers"
        },
        {
          name: "Data Pipeline",
          applications: "Apache Airflow, Apache Kafka, ETL platforms",
          components: "DAGs, Operators, Processors, Transformers",
          functions: "Task functions, Stream processors, Data transformations"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Code Ontology
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Physical implementation units - the actual executable code that realizes architecture and functionality. 
          This ontology represents the concrete code structures organized by frontend, backend, and data concerns, 
          with technology-specific implementations.
        </p>
      </div>

      {/* Visual Layered Structure */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Code Ontology Structure</h3>
        
        <div className="space-y-6">
          {/* Frontend Code Layers */}
          <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <h4 className="text-xl font-bold text-blue-800">Frontend Code Layers</h4>
            </div>
            <div className="space-y-3">
              {[
                { layer: "Applications", description: "Deployable frontend units", example: "React App, Vue SPA, Mobile App" },
                { layer: "Modules", description: "Logical feature groupings", example: "ProductModule, UserModule, CartModule" },
                { layer: "Components", description: "UI implementation units", example: "ProductCard, LoginForm, NavigationHeader" },
                { layer: "Functions/Hooks", description: "Executable UI logic", example: "useProductData(), handleSubmit(), validateForm()" },
                { layer: "Properties/State", description: "UI data units", example: "isLoading, userInput, selectedItems[]" },
                { layer: "Configurations", description: "Frontend settings", example: "webpack.config, environment.json, routing.config" }
              ].map((tier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-800">{tier.layer}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Code Layers */}
          <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h4 className="text-xl font-bold text-green-800">Backend Code Layers</h4>
            </div>
            <div className="space-y-3">
              {[
                { layer: "Applications", description: "Deployable backend units", example: "API Service, Microservice, Serverless Function" },
                { layer: "Modules", description: "Business domain groupings", example: "ProductModule, OrderModule, PaymentModule" },
                { layer: "Classes/Services", description: "Business logic units", example: "ProductService, OrderController, PaymentProcessor" },
                { layer: "Functions/Methods", description: "Executable operations", example: "createProduct(), processPayment(), GET /api/orders" },
                { layer: "Properties/Fields", description: "Data units", example: "productId, orderTotal, apiEndpoints" },
                { layer: "Configurations", description: "Backend settings", example: "database.config, service.yaml, security.properties" }
              ].map((tier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200">
                  <div className="w-6 h-6 bg-green-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-green-800">{tier.layer}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Code Layers */}
          <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <h4 className="text-xl font-bold text-purple-800">Data Code Layers</h4>
            </div>
            <div className="space-y-3">
              {[
                { layer: "Applications", description: "Data processing units", example: "ETL Pipeline, Analytics Engine, Data Sync Service" },
                { layer: "Modules", description: "Data domain groupings", example: "CustomerDataModule, ProductDataModule, AnalyticsModule" },
                { layer: "Classes/Processors", description: "Data transformation units", example: "DataValidator, SchemaMapper, AnalyticsProcessor" },
                { layer: "Functions/Queries", description: "Data operations", example: "transformProduct(), validateSchema(), SELECT * FROM products" },
                { layer: "Properties/Schemas", description: "Data structure definitions", example: "productSchema, customerFields, analyticsMetrics" },
                { layer: "Configurations", description: "Data settings", example: "pipeline.yaml, schema.json, database.properties" }
              ].map((tier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-200">
                  <div className="w-6 h-6 bg-purple-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-800">{tier.layer}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Base Definitions Table */}
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
                <td className="border border-gray-300 px-4 py-3 font-semibold text-orange-600">Applications</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Independently deployable code units</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"E-commerce Web App", "Product API Service", "ETL Pipeline"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-red-600">Modules</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Logical feature or domain groupings within applications</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"ProductModule", "UserModule", "PaymentModule"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-teal-600">Components/Classes</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Implementation units (UI components, services, processors)</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"ProductCard", "OrderService", "DataValidator"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-pink-600">Functions/Methods</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Executable operations and logic</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"handleSubmit()", "processPayment()", "transformData()"</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-semibold text-indigo-600">Properties/Fields</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Data units and configuration values</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"productId", "isLoading", "databaseConfig"</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-600">Configurations</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">Deployment and runtime settings</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-600">"package.json", "application.yml", "pipeline.config"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Technology-Specific Implementations */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Technology-Specific Sub-Ontologies</h3>
        
        <div className="space-y-8">
          {technologyStacks.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`p-6 rounded-lg border-2 ${category.color}`}>
              <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.category} Technology Stacks</h4>
              
              <div className="space-y-6">
                {category.stacks.map((stack, stackIndex) => (
                  <div key={stackIndex} className="bg-white p-6 rounded-lg border shadow-sm">
                    <h5 className="text-lg font-bold text-gray-800 mb-4">{stack.name}</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-orange-50 rounded border border-orange-200">
                        <div className="font-semibold text-orange-800 mb-2">Applications</div>
                        <div className="text-sm text-gray-700">{stack.applications}</div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded border border-blue-200">
                        <div className="font-semibold text-blue-800 mb-2">Components/Classes</div>
                        <div className="text-sm text-gray-700">{stack.components}</div>
                      </div>
                      
                      <div className="p-3 bg-green-50 rounded border border-green-200">
                        <div className="font-semibold text-green-800 mb-2">Functions/Methods</div>
                        <div className="text-sm text-gray-700">{stack.functions}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Example: E-commerce Implementation */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Example: E-commerce Code Implementation</h3>
        
        <div className="space-y-6">
          {/* Frontend Code Graph */}
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="text-lg font-bold text-blue-800 mb-4">Frontend Code (React/TypeScript)</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-blue-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Application</th>
                    <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Module</th>
                    <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Component</th>
                    <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Function/Hook</th>
                    <th className="border border-blue-300 px-3 py-2 text-left font-semibold">Property/State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={4} className="border border-blue-300 px-3 py-2 font-medium">E-commerce Web App</td>
                    <td rowSpan={2} className="border border-blue-300 px-3 py-2">ProductModule</td>
                    <td className="border border-blue-300 px-3 py-2">ProductCard</td>
                    <td className="border border-blue-300 px-3 py-2">renderProductCard()</td>
                    <td className="border border-blue-300 px-3 py-2">product.id, product.name</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-3 py-2">SearchComponent</td>
                    <td className="border border-blue-300 px-3 py-2">handleSearchInput()</td>
                    <td className="border border-blue-300 px-3 py-2">searchTerm, searchResults[]</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="border border-blue-300 px-3 py-2">CartModule</td>
                    <td className="border border-blue-300 px-3 py-2">CartService</td>
                    <td className="border border-blue-300 px-3 py-2">addToCart()</td>
                    <td className="border border-blue-300 px-3 py-2">cartItems[], totalPrice</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-3 py-2">CheckoutComponent</td>
                    <td className="border border-blue-300 px-3 py-2">handlePayment()</td>
                    <td className="border border-blue-300 px-3 py-2">paymentData, formErrors[]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Backend Code Graph */}
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <h4 className="text-lg font-bold text-green-800 mb-4">Backend Code (Node.js/Express)</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-green-300">
                <thead>
                  <tr className="bg-green-100">
                    <th className="border border-green-300 px-3 py-2 text-left font-semibold">Application</th>
                    <th className="border border-green-300 px-3 py-2 text-left font-semibold">Module</th>
                    <th className="border border-green-300 px-3 py-2 text-left font-semibold">Class/Service</th>
                    <th className="border border-green-300 px-3 py-2 text-left font-semibold">Function/Method</th>
                    <th className="border border-green-300 px-3 py-2 text-left font-semibold">Property/Field</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={4} className="border border-green-300 px-3 py-2 font-medium">Product API Service</td>
                    <td rowSpan={2} className="border border-green-300 px-3 py-2">ProductModule</td>
                    <td className="border border-green-300 px-3 py-2">ProductService</td>
                    <td className="border border-green-300 px-3 py-2">getProductById()</td>
                    <td className="border border-green-300 px-3 py-2">productId, searchCriteria</td>
                  </tr>
                  <tr>
                    <td className="border border-green-300 px-3 py-2">ProductRepository</td>
                    <td className="border border-green-300 px-3 py-2">findById()</td>
                    <td className="border border-green-300 px-3 py-2">product.sku, product.inventory</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="border border-green-300 px-3 py-2">CartModule</td>
                    <td className="border border-green-300 px-3 py-2">CartService</td>
                    <td className="border border-green-300 px-3 py-2">addItem()</td>
                    <td className="border border-green-300 px-3 py-2">cartId, userId</td>
                  </tr>
                  <tr>
                    <td className="border border-green-300 px-3 py-2">CartController</td>
                    <td className="border border-green-300 px-3 py-2">POST /cart/items</td>
                    <td className="border border-green-300 px-3 py-2">request.body, response.status</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Relationship to Architecture */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border-l-4 border-orange-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Relationship to Architecture Ontology</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Realization Patterns</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Services → Classes/Services:</span>
                  <span className="text-gray-700"> "Product Entity Service" realized by "ProductService.java"</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Agents → Applications:</span>
                  <span className="text-gray-700"> "Purchase Completion Agent" implemented as microservice application</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Components → Code Units:</span>
                  <span className="text-gray-700"> Architecture components realized by specific code modules and functions</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Implementation Traceability</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Logical → Physical:</span>
                  <span className="text-gray-700"> Architecture defines what, Code defines how it's actually built</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Technology Mapping:</span>
                  <span className="text-gray-700"> Same architectural concepts implemented differently across technology stacks</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Governance Analytics:</span>
                  <span className="text-gray-700"> Compare code implementations against architectural intentions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOntology;