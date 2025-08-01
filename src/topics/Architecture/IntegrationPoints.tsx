interface IntegrationPointsProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const IntegrationPoints: React.FC<IntegrationPointsProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Integration Points
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          How Breeze.AI integrates seamlessly with existing development tools, infrastructure, 
          and organizational processes through well-defined integration patterns and APIs.
        </p>
      </div>

      {/* Version Control & CI/CD Integration */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Version Control & CI/CD Integration</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Breeze.AI integrates seamlessly with version control systems and CI/CD pipelines to enhance 
          existing development workflows without disruption.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">Version Control Systems</h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-3 rounded border border-green-200 text-center">
                <h5 className="font-semibold text-green-800 text-sm">Git</h5>
                <p className="text-xs text-green-600">Hooks & actions</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200 text-center">
                <h5 className="font-semibold text-green-800 text-sm">GitHub</h5>
                <p className="text-xs text-green-600">Actions & apps</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200 text-center">
                <h5 className="font-semibold text-green-800 text-sm">GitLab</h5>
                <p className="text-xs text-green-600">CI/CD integration</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200 text-center">
                <h5 className="font-semibold text-green-800 text-sm">Bitbucket</h5>
                <p className="text-xs text-green-600">Pipeline integration</p>
              </div>
            </div>
            <h5 className="font-semibold text-green-800 mb-2">Capabilities:</h5>
            <ul className="text-green-600 text-sm space-y-1">
              <li>• Semantic commit validation</li>
              <li>• Automatic pull request analysis</li>
              <li>• Impact assessment for changes</li>
              <li>• Compliance checking on commits</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">CI/CD Pipelines</h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-3 rounded border border-blue-200 text-center">
                <h5 className="font-semibold text-blue-800 text-sm">Jenkins</h5>
                <p className="text-xs text-blue-600">Plugin ecosystem</p>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200 text-center">
                <h5 className="font-semibold text-blue-800 text-sm">Azure DevOps</h5>
                <p className="text-xs text-blue-600">Extension available</p>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200 text-center">
                <h5 className="font-semibold text-blue-800 text-sm">CircleCI</h5>
                <p className="text-xs text-blue-600">Orb integration</p>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200 text-center">
                <h5 className="font-semibold text-blue-800 text-sm">TeamCity</h5>
                <p className="text-xs text-blue-600">Plugin support</p>
              </div>
            </div>
            <h5 className="font-semibold text-blue-800 mb-2">Capabilities:</h5>
            <ul className="text-blue-600 text-sm space-y-1">
              <li>• Semantic test generation</li>
              <li>• Quality gate integration</li>
              <li>• Deployment validation</li>
              <li>• Performance monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testing Framework Integration */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Testing Framework Integration</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Automated test generation and enhancement capabilities integrate with popular testing frameworks 
          to improve coverage and quality assurance processes.
        </p>
        
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h4 className="font-bold text-orange-800 mb-4 text-center">Supported Testing Frameworks</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-3 rounded border border-orange-200 text-center">
              <h5 className="font-semibold text-orange-800 text-sm">Jest</h5>
              <p className="text-xs text-orange-600">Unit & integration tests</p>
            </div>
            <div className="bg-white p-3 rounded border border-orange-200 text-center">
              <h5 className="font-semibold text-orange-800 text-sm">Cypress</h5>
              <p className="text-xs text-orange-600">E2E automation</p>
            </div>
            <div className="bg-white p-3 rounded border border-orange-200 text-center">
              <h5 className="font-semibold text-orange-800 text-sm">Selenium</h5>
              <p className="text-xs text-orange-600">Cross-browser testing</p>
            </div>
            <div className="bg-white p-3 rounded border border-orange-200 text-center">
              <h5 className="font-semibold text-orange-800 text-sm">Postman</h5>
              <p className="text-xs text-orange-600">API testing</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-orange-800 mb-2">Test Generation Capabilities:</h5>
              <ul className="text-orange-600 text-sm space-y-1">
                <li>• BDD test case generation from specifications</li>
                <li>• Comprehensive coverage analysis and optimization</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-orange-800 mb-2">Quality Enhancement:</h5>
              <ul className="text-orange-600 text-sm space-y-1">
                <li>• Test scenario optimization and deduplication</li>
                <li>• Intelligent regression test selection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Project Management & Collaboration */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Management & Collaboration</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Integration with project management and collaboration tools ensures requirements 
          traceability and stakeholder communication throughout the development process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-4">Issue Tracking</h4>
            <div className="space-y-3 mb-4">
              <div className="bg-white p-3 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 text-sm">Jira</h5>
                <p className="text-xs text-red-600">Native integration with bidirectional sync</p>
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 text-sm">Linear</h5>
                <p className="text-xs text-red-600">API-based requirements synchronization</p>
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 text-sm">GitHub Issues</h5>
                <p className="text-xs text-red-600">Seamless integration with repositories</p>
              </div>
            </div>
            <h5 className="font-semibold text-red-800 mb-2">Features:</h5>
            <ul className="text-red-600 text-sm space-y-1">
              <li>• Automatic story point estimation</li>
              <li>• Requirements completeness validation</li>
              <li>• Progress tracking with semantic metrics</li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-4">Documentation Platforms</h4>
            <div className="space-y-3 mb-4">
              <div className="bg-white p-3 rounded border border-indigo-200">
                <h5 className="font-semibold text-indigo-800 text-sm">Confluence</h5>
                <p className="text-xs text-indigo-600">Automatic documentation generation</p>
              </div>
              <div className="bg-white p-3 rounded border border-indigo-200">
                <h5 className="font-semibold text-indigo-800 text-sm">Notion</h5>
                <p className="text-xs text-indigo-600">Semantic content synchronization</p>
              </div>
              <div className="bg-white p-3 rounded border border-indigo-200">
                <h5 className="font-semibold text-indigo-800 text-sm">GitBook</h5>
                <p className="text-xs text-indigo-600">Technical documentation automation</p>
              </div>
            </div>
            <h5 className="font-semibold text-indigo-800 mb-2">Features:</h5>
            <ul className="text-indigo-600 text-sm space-y-1">
              <li>• Auto-generated technical specifications</li>
              <li>• Requirements traceability matrices</li>
              <li>• API documentation synchronization</li>
            </ul>
          </div>
          
          <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-4">Communication Tools</h4>
            <div className="space-y-3 mb-4">
              <div className="bg-white p-3 rounded border border-teal-200">
                <h5 className="font-semibold text-teal-800 text-sm">Slack</h5>
                <p className="text-xs text-teal-600">Progress notifications and alerts</p>
              </div>
              <div className="bg-white p-3 rounded border border-teal-200">
                <h5 className="font-semibold text-teal-800 text-sm">Microsoft Teams</h5>
                <p className="text-xs text-teal-600">Workflow integration and updates</p>
              </div>
              <div className="bg-white p-3 rounded border border-teal-200">
                <h5 className="font-semibold text-teal-800 text-sm">Discord</h5>
                <p className="text-xs text-teal-600">Developer community integration</p>
              </div>
            </div>
            <h5 className="font-semibold text-teal-800 mb-2">Features:</h5>
            <ul className="text-teal-600 text-sm space-y-1">
              <li>• Quality gate notifications</li>
              <li>• Approval request routing</li>
              <li>• Deployment status updates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cloud & Infrastructure Integration */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Cloud & Infrastructure Integration</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Deep integration with cloud platforms and infrastructure services enables 
          automatic deployment, monitoring, and scaling capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-4">Cloud Platforms</h4>
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-white p-3 rounded border border-yellow-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-yellow-800 text-sm">AWS</h5>
                    <p className="text-xs text-yellow-600">Full service integration</p>
                  </div>
                  <div className="text-xs text-yellow-600">EC2, Lambda, RDS, S3</div>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-yellow-800 text-sm">Azure</h5>
                    <p className="text-xs text-yellow-600">Native DevOps integration</p>
                  </div>
                  <div className="text-xs text-yellow-600">App Service, Functions, SQL</div>
                </div>
                <div className="bg-white p-3 rounded border border-yellow-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-yellow-800 text-sm">Google Cloud</h5>
                    <p className="text-xs text-yellow-600">AI/ML service integration</p>
                  </div>
                  <div className="text-xs text-yellow-600">GKE, Cloud Run, BigQuery</div>
                </div>
              </div>
              <h5 className="font-semibold text-yellow-800 mb-2">Capabilities:</h5>
              <ul className="text-yellow-600 text-sm space-y-1">
                <li>• Infrastructure as Code generation</li>
                <li>• Auto-scaling configuration</li>
                <li>• Security policy enforcement</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-4">Container Orchestration</h4>
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-white p-3 rounded border border-purple-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-purple-800 text-sm">Kubernetes</h5>
                    <p className="text-xs text-purple-600">Manifest generation</p>
                  </div>
                  <div className="text-xs text-purple-600">Helm charts, operators</div>
                </div>
                <div className="bg-white p-3 rounded border border-purple-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-purple-800 text-sm">Docker</h5>
                    <p className="text-xs text-purple-600">Containerization automation</p>
                  </div>
                  <div className="text-xs text-purple-600">Multi-stage builds</div>
                </div>
              </div>
              <h5 className="font-semibold text-purple-800 mb-2">Capabilities:</h5>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• Deployment strategy optimization</li>
                <li>• Resource requirement calculation</li>
                <li>• Health check configuration</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-4">Monitoring & Observability</h4>
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-white p-3 rounded border border-green-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-green-800 text-sm">Datadog</h5>
                    <p className="text-xs text-green-600">APM integration</p>
                  </div>
                  <div className="text-xs text-green-600">Metrics, traces, logs</div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-green-800 text-sm">New Relic</h5>
                    <p className="text-xs text-green-600">Performance monitoring</p>
                  </div>
                  <div className="text-xs text-green-600">Real user monitoring</div>
                </div>
                <div className="bg-white p-3 rounded border border-green-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-green-800 text-sm">Grafana</h5>
                    <p className="text-xs text-green-600">Dashboard automation</p>
                  </div>
                  <div className="text-xs text-green-600">Prometheus integration</div>
                </div>
              </div>
              <h5 className="font-semibold text-green-800 mb-2">Capabilities:</h5>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• SLA-based alerting rules</li>
                <li>• Performance baseline establishment</li>
                <li>• Incident response automation</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-4">Database Systems</h4>
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-white p-3 rounded border border-blue-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-blue-800 text-sm">PostgreSQL</h5>
                    <p className="text-xs text-blue-600">Schema generation</p>
                  </div>
                  <div className="text-xs text-blue-600">Migration scripts</div>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-blue-800 text-sm">MongoDB</h5>
                    <p className="text-xs text-blue-600">Document modeling</p>
                  </div>
                  <div className="text-xs text-blue-600">Index optimization</div>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold text-blue-800 text-sm">Redis</h5>
                    <p className="text-xs text-blue-600">Caching strategies</p>
                  </div>
                  <div className="text-xs text-blue-600">Session management</div>
                </div>
              </div>
              <h5 className="font-semibold text-blue-800 mb-2">Capabilities:</h5>
              <ul className="text-blue-600 text-sm space-y-1">
                <li>• Data model optimization</li>
                <li>• Backup strategy configuration</li>
                <li>• Performance tuning automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Compliance Integration */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Security & Compliance Integration</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Integration with security and compliance tools ensures that all generated code 
          and infrastructure meets organizational and regulatory requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-4">Security Scanning</h4>
            <div className="space-y-3 mb-4">
              <div className="bg-white p-3 rounded border border-red-200 text-center">
                <h5 className="font-semibold text-red-800 text-sm">Snyk</h5>
                <p className="text-xs text-red-600">Vulnerability scanning</p>
              </div>
              <div className="bg-white p-3 rounded border border-red-200 text-center">
                <h5 className="font-semibold text-red-800 text-sm">SonarQube</h5>
                <p className="text-xs text-red-600">Code quality & security</p>
              </div>
              <div className="bg-white p-3 rounded border border-red-200 text-center">
                <h5 className="font-semibold text-red-800 text-sm">Checkmarx</h5>
                <p className="text-xs text-red-600">Static analysis</p>
              </div>
            </div>
            <ul className="text-red-600 text-sm space-y-1">
              <li>• Automatic security rule application</li>
              <li>• Vulnerability remediation suggestions</li>
              <li>• Compliance violation detection</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-4">Identity & Access</h4>
            <div className="space-y-3 mb-4">
              <div className="bg-white p-3 rounded border border-orange-200 text-center">
                <h5 className="font-semibold text-orange-800 text-sm">Auth0</h5>
                <p className="text-xs text-orange-600">Authentication integration</p>
              </div>
              <div className="bg-white p-3 rounded border border-orange-200 text-center">
                <h5 className="font-semibold text-orange-800 text-sm">Okta</h5>
                <p className="text-xs text-orange-600">SSO & identity management</p>
              </div>
              <div className="bg-white p-3 rounded border border-orange-200 text-center">
                <h5 className="font-semibold text-orange-800 text-sm">AWS IAM</h5>
                <p className="text-xs text-orange-600">Role-based access control</p>
              </div>
            </div>
            <ul className="text-orange-600 text-sm space-y-1">
              <li>• Principle of least privilege enforcement</li>
              <li>• Role-based access generation</li>
              <li>• Multi-factor authentication setup</li>
            </ul>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-4">Compliance Frameworks</h4>
            <div className="space-y-3 mb-4">
              <div className="bg-white p-3 rounded border border-indigo-200 text-center">
                <h5 className="font-semibold text-indigo-800 text-sm">SOC 2</h5>
                <p className="text-xs text-indigo-600">Control implementation</p>
              </div>
              <div className="bg-white p-3 rounded border border-indigo-200 text-center">
                <h5 className="font-semibold text-indigo-800 text-sm">GDPR</h5>
                <p className="text-xs text-indigo-600">Privacy by design</p>
              </div>
              <div className="bg-white p-3 rounded border border-indigo-200 text-center">
                <h5 className="font-semibold text-indigo-800 text-sm">HIPAA</h5>
                <p className="text-xs text-indigo-600">Healthcare compliance</p>
              </div>
            </div>
            <ul className="text-indigo-600 text-sm space-y-1">
              <li>• Automatic compliance validation</li>
              <li>• Audit trail generation</li>
              <li>• Policy enforcement automation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Integration Benefits */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 mb-8 border-l-4 border-cyan-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Integration Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-cyan-800 mb-4">Developer Experience</h4>
            <ul className="text-cyan-700 text-sm space-y-2">
              <li>• <strong>Familiar Workflows:</strong> Work within existing tools and processes</li>
              <li>• <strong>Minimal Context Switching:</strong> Breeze.AI capabilities embedded where needed</li>
              <li>• <strong>Gradual Adoption:</strong> Integrate capabilities incrementally</li>
              <li>• <strong>Enhanced Productivity:</strong> Automation without workflow disruption</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-800 mb-4">Organizational Benefits</h4>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• <strong>Reduced Tool Sprawl:</strong> Enhance existing tools rather than replace</li>
              <li>• <strong>Investment Protection:</strong> Leverage existing toolchain investments</li>
              <li>• <strong>Compliance Continuity:</strong> Maintain established security and governance</li>
              <li>• <strong>Skills Transfer:</strong> Build on existing team knowledge and expertise</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Integration Architecture Overview */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Integration Architecture Overview</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Technical implementation details of how Breeze.AI provides multiple integration patterns 
          to accommodate different organizational needs and technical requirements.
        </p>
        
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-6 text-center">Integration Layer Architecture</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* API Layer */}
            <div className="text-center">
              <div className="bg-cyan-100 p-6 rounded-lg border-2 border-cyan-300 mb-4">
                <h5 className="font-bold text-cyan-800 mb-2">API Layer</h5>
                <p className="text-sm text-cyan-600">RESTful, GraphQL, Webhooks</p>
              </div>
              <ul className="text-sm text-cyan-700 space-y-1">
                <li>• Synchronous operations</li>
                <li>• Asynchronous workflows</li>
                <li>• Event notifications</li>
                <li>• Batch processing</li>
              </ul>
            </div>
            
            {/* SDK Layer */}
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg border-2 border-blue-300 mb-4">
                <h5 className="font-bold text-blue-800 mb-2">SDK Layer</h5>
                <p className="text-sm text-blue-600">Multi-language SDKs</p>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• JavaScript/TypeScript</li>
                <li>• Python</li>
                <li>• Java</li>
                <li>• .NET</li>
              </ul>
            </div>
            
            {/* Plugin Layer */}
            <div className="text-center">
              <div className="bg-indigo-100 p-6 rounded-lg border-2 border-indigo-300 mb-4">
                <h5 className="font-bold text-indigo-800 mb-2">Plugin Layer</h5>
                <p className="text-sm text-indigo-600">Native integrations</p>
              </div>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• CI/CD plugins</li>
                <li>• Project management</li>
                <li>• Documentation tools</li>
                <li>• Custom workflows</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
            <h5 className="font-bold text-gray-800 mb-3 text-center">Integration Principles</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Non-intrusive:</strong> Enhance existing workflows without disruption</li>
                <li>• <strong>Extensible:</strong> Custom integrations for specific needs</li>
              </ul>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Secure:</strong> Enterprise-grade authentication and authorization</li>
                <li>• <strong>Scalable:</strong> Handle enterprise workloads and team sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Scalability & Performance Considerations</h3>
        <p className="text-lg mb-6 opacity-90">
          These integrations are designed to scale with your organization, supporting enterprise 
          workloads while maintaining performance and reliability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Horizontal Scaling</h4>
            <p className="text-sm">Components scale independently based on demand</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Performance Optimization</h4>
            <p className="text-sm">Intelligent caching and resource management</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Enterprise Reliability</h4>
            <p className="text-sm">High availability and disaster recovery capabilities</p>
          </div>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Scalability & Performance
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntegrationPoints;