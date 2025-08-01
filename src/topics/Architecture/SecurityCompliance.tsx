interface SecurityComplianceProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const SecurityCompliance: React.FC<SecurityComplianceProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Security & Compliance
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Enterprise-grade security architecture with comprehensive compliance frameworks, 
          ensuring data protection, regulatory adherence, and risk management across all operations.
        </p>
      </div>

      {/* Security Architecture */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Security Architecture</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Multi-layered security architecture implementing defense-in-depth principles 
          with zero-trust networking and comprehensive threat protection.
        </p>
        
        <div className="bg-gradient-to-br from-red-50 to-purple-50 p-8 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-6 text-center">Security Layers</h4>
          
          <div className="space-y-4">
            {/* Application Layer */}
            <div className="bg-red-100 p-4 rounded-lg border-2 border-red-300">
              <h5 className="font-bold text-red-800 mb-2 text-center">Application Security Layer</h5>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded text-center border border-red-200">
                  <h6 className="font-semibold text-red-800 text-sm">Input Validation</h6>
                  <p className="text-xs text-red-600">Sanitization & validation</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-red-200">
                  <h6 className="font-semibold text-red-800 text-sm">Output Encoding</h6>
                  <p className="text-xs text-red-600">XSS prevention</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-red-200">
                  <h6 className="font-semibold text-red-800 text-sm">Session Management</h6>
                  <p className="text-xs text-red-600">Secure session handling</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-red-200">
                  <h6 className="font-semibold text-red-800 text-sm">Error Handling</h6>
                  <p className="text-xs text-red-600">Information leakage prevention</p>
                </div>
              </div>
            </div>
            
            {/* API Security Layer */}
            <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300">
              <h5 className="font-bold text-blue-800 mb-2 text-center">API Security Layer</h5>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded text-center border border-blue-200">
                  <h6 className="font-semibold text-blue-800 text-sm">Authentication</h6>
                  <p className="text-xs text-blue-600">JWT, OAuth 2.0, SAML</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-blue-200">
                  <h6 className="font-semibold text-blue-800 text-sm">Authorization</h6>
                  <p className="text-xs text-blue-600">RBAC, ABAC policies</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-blue-200">
                  <h6 className="font-semibold text-blue-800 text-sm">Rate Limiting</h6>
                  <p className="text-xs text-blue-600">DDoS protection</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-blue-200">
                  <h6 className="font-semibold text-blue-800 text-sm">API Gateway</h6>
                  <p className="text-xs text-blue-600">Centralized security</p>
                </div>
              </div>
            </div>
            
            {/* Data Security Layer */}
            <div className="bg-green-100 p-4 rounded-lg border-2 border-green-300">
              <h5 className="font-bold text-green-800 mb-2 text-center">Data Security Layer</h5>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded text-center border border-green-200">
                  <h6 className="font-semibold text-green-800 text-sm">Encryption at Rest</h6>
                  <p className="text-xs text-green-600">AES-256 encryption</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-green-200">
                  <h6 className="font-semibold text-green-800 text-sm">Encryption in Transit</h6>
                  <p className="text-xs text-green-600">TLS 1.3, mTLS</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-green-200">
                  <h6 className="font-semibold text-green-800 text-sm">Key Management</h6>
                  <p className="text-xs text-green-600">HSM, key rotation</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-green-200">
                  <h6 className="font-semibold text-green-800 text-sm">Data Classification</h6>
                  <p className="text-xs text-green-600">Sensitivity labeling</p>
                </div>
              </div>
            </div>
            
            {/* Infrastructure Security Layer */}
            <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-300">
              <h5 className="font-bold text-purple-800 mb-2 text-center">Infrastructure Security Layer</h5>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded text-center border border-purple-200">
                  <h6 className="font-semibold text-purple-800 text-sm">Network Segmentation</h6>
                  <p className="text-xs text-purple-600">Micro-segmentation</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-purple-200">
                  <h6 className="font-semibold text-purple-800 text-sm">Firewall Rules</h6>
                  <p className="text-xs text-purple-600">WAF, network ACLs</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-purple-200">
                  <h6 className="font-semibold text-purple-800 text-sm">Intrusion Detection</h6>
                  <p className="text-xs text-purple-600">IDS/IPS systems</p>
                </div>
                <div className="bg-white p-3 rounded text-center border border-purple-200">
                  <h6 className="font-semibold text-purple-800 text-sm">Container Security</h6>
                  <p className="text-xs text-purple-600">Image scanning, runtime protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Identity & Access Management */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Identity & Access Management</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Comprehensive IAM framework implementing zero-trust principles with fine-grained 
          access controls and continuous authentication validation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">Authentication Framework</h4>
              <ul className="text-blue-700 text-sm space-y-2 mb-4">
                <li>• <strong>Multi-Factor Authentication:</strong> TOTP, FIDO2, biometric options</li>
                <li>• <strong>Single Sign-On:</strong> SAML 2.0, OpenID Connect integration</li>
                <li>• <strong>Adaptive Authentication:</strong> Risk-based authentication policies</li>
                <li>• <strong>Session Management:</strong> Secure session handling with timeout controls</li>
              </ul>
              <div className="bg-white p-3 rounded border border-blue-200">
                <h5 className="font-semibold text-blue-800 text-sm mb-1">Supported Identity Providers:</h5>
                <div className="text-xs text-blue-600">Active Directory, Azure AD, Okta, Auth0, Google Workspace, Custom LDAP</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-800 mb-3">Authorization Controls</h4>
              <ul className="text-green-700 text-sm space-y-2 mb-4">
                <li>• <strong>Role-Based Access Control:</strong> Hierarchical role definitions</li>
                <li>• <strong>Attribute-Based Access Control:</strong> Context-aware permissions</li>
                <li>• <strong>Just-in-Time Access:</strong> Temporary elevated permissions</li>
                <li>• <strong>Principle of Least Privilege:</strong> Minimal required permissions</li>
              </ul>
              <div className="bg-white p-3 rounded border border-green-200">
                <h5 className="font-semibold text-green-800 text-sm mb-1">Permission Granularity:</h5>
                <div className="text-xs text-green-600">Resource-level, operation-level, data-level, temporal constraints</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4 text-center">Access Control Matrix</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left p-2 font-bold text-gray-800">Role</th>
                    <th className="text-center p-2 font-bold text-gray-800">Specifications</th>
                    <th className="text-center p-2 font-bold text-gray-800">Generation</th>
                    <th className="text-center p-2 font-bold text-gray-800">Admin</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-200">
                    <td className="p-2 font-semibold">Developer</td>
                    <td className="text-center p-2">Read</td>
                    <td className="text-center p-2">Execute</td>
                    <td className="text-center p-2">❌</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 font-semibold">Architect</td>
                    <td className="text-center p-2">Write</td>
                    <td className="text-center p-2">Execute</td>
                    <td className="text-center p-2">❌</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-2 font-semibold">Product Owner</td>
                    <td className="text-center p-2">Approve</td>
                    <td className="text-center p-2">Review</td>
                    <td className="text-center p-2">❌</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Admin</td>
                    <td className="text-center p-2">Full</td>
                    <td className="text-center p-2">Full</td>
                    <td className="text-center p-2">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-white/80 p-3 rounded">
              <h5 className="font-semibold text-gray-800 text-sm mb-1">Dynamic Permissions:</h5>
              <p className="text-xs text-gray-600">Permissions can be dynamically granted based on project assignment, time constraints, and approval workflows.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Protection & Privacy */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Data Protection & Privacy</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-4">Data Classification</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-purple-200">
                <h5 className="font-semibold text-purple-800 text-sm">Public</h5>
                <p className="text-xs text-purple-600">No restrictions, documentation</p>
                <div className="text-xs text-purple-500 mt-1">Standard encryption</div>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <h5 className="font-semibold text-purple-800 text-sm">Internal</h5>
                <p className="text-xs text-purple-600">Employee access only</p>
                <div className="text-xs text-purple-500 mt-1">Enhanced encryption</div>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <h5 className="font-semibold text-purple-800 text-sm">Confidential</h5>
                <p className="text-xs text-purple-600">Restricted access, PII</p>
                <div className="text-xs text-purple-500 mt-1">Advanced encryption + DLP</div>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <h5 className="font-semibold text-purple-800 text-sm">Restricted</h5>
                <p className="text-xs text-purple-600">Highly sensitive, regulatory</p>
                <div className="text-xs text-purple-500 mt-1">HSM encryption + auditing</div>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-4">Privacy Controls</h4>
            <ul className="text-indigo-700 text-sm space-y-2 mb-4">
              <li>• <strong>Data Minimization:</strong> Collect only necessary data</li>
              <li>• <strong>Purpose Limitation:</strong> Use data only for stated purposes</li>
              <li>• <strong>Storage Limitation:</strong> Automatic data retention policies</li>
              <li>• <strong>User Rights:</strong> Access, rectification, erasure, portability</li>
            </ul>
            <div className="bg-white p-3 rounded border border-indigo-200">
              <h5 className="font-semibold text-indigo-800 text-sm mb-1">Privacy by Design:</h5>
              <p className="text-xs text-indigo-600">Privacy considerations built into system architecture from the ground up</p>
            </div>
          </div>
          
          <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
            <h4 className="font-bold text-cyan-800 mb-4">Data Loss Prevention</h4>
            <ul className="text-cyan-700 text-sm space-y-2 mb-4">
              <li>• <strong>Content Inspection:</strong> Real-time data scanning</li>
              <li>• <strong>Policy Enforcement:</strong> Automated blocking and alerts</li>
              <li>• <strong>Endpoint Protection:</strong> Device-level data controls</li>
              <li>• <strong>Network Monitoring:</strong> Traffic analysis and filtering</li>
            </ul>
            <div className="bg-white p-3 rounded border border-cyan-200">
              <h5 className="font-semibold text-cyan-800 text-sm mb-1">Detection Capabilities:</h5>
              <p className="text-xs text-cyan-600">Credit cards, SSNs, API keys, proprietary code patterns, healthcare data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Frameworks */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Compliance Frameworks</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Comprehensive compliance coverage for major regulatory frameworks with automated 
          compliance monitoring and reporting capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-3 text-center">SOC 2 Type II</h4>
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
            </div>
            <ul className="text-blue-600 text-sm space-y-1">
              <li>• Security controls</li>
              <li>• Availability monitoring</li>
              <li>• Processing integrity</li>
              <li>• Confidentiality measures</li>
              <li>• Privacy protections</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-3 text-center">ISO 27001</h4>
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
            </div>
            <ul className="text-green-600 text-sm space-y-1">
              <li>• Information security management</li>
              <li>• Risk assessment processes</li>
              <li>• Security incident management</li>
              <li>• Business continuity planning</li>
              <li>• Supplier relationship security</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-3 text-center">GDPR</h4>
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🇪🇺</span>
              </div>
            </div>
            <ul className="text-purple-600 text-sm space-y-1">
              <li>• Data subject rights</li>
              <li>• Consent management</li>
              <li>• Breach notification</li>
              <li>• Data protection by design</li>
              <li>• Privacy impact assessments</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-3 text-center">HIPAA</h4>
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
            </div>
            <ul className="text-red-600 text-sm space-y-1">
              <li>• PHI protection</li>
              <li>• Access controls</li>
              <li>• Audit logging</li>
              <li>• Encryption requirements</li>
              <li>• Business associate agreements</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-4 text-center">Additional Compliance Support</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-white rounded border border-gray-200">
              <h5 className="font-semibold text-gray-800 text-sm">PCI DSS</h5>
              <p className="text-xs text-gray-600">Payment card data</p>
            </div>
            <div className="text-center p-3 bg-white rounded border border-gray-200">
              <h5 className="font-semibold text-gray-800 text-sm">CCPA</h5>
              <p className="text-xs text-gray-600">California privacy</p>
            </div>
            <div className="text-center p-3 bg-white rounded border border-gray-200">
              <h5 className="font-semibold text-gray-800 text-sm">FedRAMP</h5>
              <p className="text-xs text-gray-600">Federal cloud security</p>
            </div>
            <div className="text-center p-3 bg-white rounded border border-gray-200">
              <h5 className="font-semibold text-gray-800 text-sm">NIST</h5>
              <p className="text-xs text-gray-600">Cybersecurity framework</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Monitoring & Incident Response */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Security Monitoring & Incident Response</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-3">24/7 Security Operations Center</h4>
              <ul className="text-orange-700 text-sm space-y-2 mb-4">
                <li>• <strong>Continuous Monitoring:</strong> Real-time threat detection</li>
                <li>• <strong>SIEM Integration:</strong> Centralized log analysis</li>
                <li>• <strong>Threat Intelligence:</strong> AI-powered threat detection</li>
                <li>• <strong>Automated Response:</strong> Immediate threat containment</li>
              </ul>
              <div className="bg-white p-3 rounded border border-orange-200">
                <h5 className="font-semibold text-orange-800 text-sm mb-1">Response Times:</h5>
                <div className="text-xs text-orange-600">Critical: 15 minutes, High: 1 hour, Medium: 4 hours, Low: 24 hours</div>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-3">Incident Response Plan</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-red-800 text-sm">Detection & Analysis</h5>
                    <p className="text-xs text-red-600">Identify and assess security events</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-red-800 text-sm">Containment & Eradication</h5>
                    <p className="text-xs text-red-600">Isolate threats and remove from systems</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-red-800 text-sm">Recovery & Lessons Learned</h5>
                    <p className="text-xs text-red-600">Restore operations and improve defenses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4 text-center">Security Metrics Dashboard</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-orange-200">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold text-orange-800">Threat Detection Rate</h5>
                  <span className="text-sm font-bold text-orange-600">99.7%</span>
                </div>
                <div className="w-full bg-orange-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{width: '99.7%'}}></div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold text-blue-800">Incident Response Time</h5>
                  <span className="text-sm font-bold text-blue-600">8.2 min avg</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border border-green-200">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold text-green-800">Security Compliance Score</h5>
                  <span className="text-sm font-bold text-green-600">98.5%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '98.5%'}}></div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold text-purple-800">Vulnerability Remediation</h5>
                  <span className="text-sm font-bold text-purple-600">72 hrs avg</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audit & Governance */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Audit & Governance</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">Comprehensive Audit Logging</h4>
            <ul className="text-blue-700 text-sm space-y-2 mb-4">
              <li>• All user actions and system events</li>
              <li>• Immutable audit trail with digital signatures</li>
              <li>• Real-time log analysis and alerting</li>
              <li>• Long-term archival with secure storage</li>
            </ul>
            <div className="bg-white p-3 rounded border border-blue-200">
              <h5 className="font-semibold text-blue-800 text-sm mb-1">Log Retention:</h5>
              <p className="text-xs text-blue-600">7 years for compliance logs, 3 years for operational logs</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-4">Governance Framework</h4>
            <ul className="text-green-700 text-sm space-y-2 mb-4">
              <li>• Security policy management</li>
              <li>• Risk assessment and mitigation</li>
              <li>• Vendor security assessments</li>
              <li>• Employee security training</li>
            </ul>
            <div className="bg-white p-3 rounded border border-green-200">
              <h5 className="font-semibold text-green-800 text-sm mb-1">Policy Updates:</h5>
              <p className="text-xs text-green-600">Quarterly reviews, annual comprehensive updates</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-4">Third-Party Audits</h4>
            <ul className="text-purple-700 text-sm space-y-2 mb-4">
              <li>• Annual SOC 2 Type II audits</li>
              <li>• Penetration testing (quarterly)</li>
              <li>• Vulnerability assessments (monthly)</li>
              <li>• Code security reviews</li>
            </ul>
            <div className="bg-white p-3 rounded border border-purple-200">
              <h5 className="font-semibold text-purple-800 text-sm mb-1">Audit Reports:</h5>
              <p className="text-xs text-purple-600">Available to customers under NDA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Benefits */}
      <div className="bg-gradient-to-r from-red-50 to-purple-50 rounded-xl p-8 mb-8 border-l-4 border-red-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Security & Compliance Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-red-800 mb-4">Enterprise Security</h4>
            <ul className="text-red-700 text-sm space-y-2">
              <li>• <strong>Zero Trust Architecture:</strong> Never trust, always verify principle</li>
              <li>• <strong>Defense in Depth:</strong> Multiple security layers for comprehensive protection</li>
              <li>• <strong>Continuous Monitoring:</strong> Real-time threat detection and response</li>
              <li>• <strong>Automated Compliance:</strong> Built-in compliance validation and reporting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-purple-800 mb-4">Business Value</h4>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• <strong>Risk Reduction:</strong> Proactive threat prevention and mitigation</li>
              <li>• <strong>Regulatory Readiness:</strong> Automated compliance across multiple frameworks</li>
              <li>• <strong>Customer Trust:</strong> Transparent security practices and certifications</li>
              <li>• <strong>Operational Efficiency:</strong> Automated security processes reduce manual overhead</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Enterprise-Ready Security Foundation</h3>
        <p className="text-lg mb-6 opacity-90">
          Breeze.AI's comprehensive security and compliance framework provides the foundation 
          for enterprise adoption with confidence and regulatory adherence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Security by Design</h4>
            <p className="text-sm">Security controls integrated at every architectural layer</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Compliance Automation</h4>
            <p className="text-sm">Automated compliance validation and reporting across frameworks</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Continuous Protection</h4>
            <p className="text-sm">24/7 monitoring and threat response capabilities</p>
          </div>
        </div>
        
        <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-xl font-bold mb-2">Ready for Enterprise Deployment</p>
          <p className="text-lg">
            Complete security architecture enables <strong>confident adoption</strong> in the most 
            security-conscious and regulated environments.
          </p>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Semantic Model Structure
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecurityCompliance;