interface ScalabilityPerformanceProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const ScalabilityPerformance: React.FC<ScalabilityPerformanceProps> = ({ onNext }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Scalability & Performance
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Breeze.AI's architecture is designed for enterprise-scale operations with intelligent 
          resource management, distributed processing, and optimized performance characteristics.
        </p>
      </div>

      {/* Scalability Architecture */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Scalability Architecture</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          The system employs a multi-tier scaling strategy that adapts to varying workloads 
          while maintaining consistent performance and availability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-4 text-center">Horizontal Scaling</h4>
            <div className="bg-white p-4 rounded border border-green-200 mb-4">
              <h5 className="font-semibold text-green-800 mb-2">Component Independence</h5>
              <p className="text-sm text-green-600">
                Each system component can scale independently based on demand patterns
              </p>
            </div>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• Agent pool expansion</li>
              <li>• Knowledge graph sharding</li>
              <li>• API gateway clustering</li>
              <li>• Queue-based load balancing</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4 text-center">Vertical Scaling</h4>
            <div className="bg-white p-4 rounded border border-blue-200 mb-4">
              <h5 className="font-semibold text-blue-800 mb-2">Resource Optimization</h5>
              <p className="text-sm text-blue-600">
                Intelligent resource allocation based on workload characteristics
              </p>
            </div>
            <ul className="text-blue-700 text-sm space-y-2">
              <li>• Dynamic memory allocation</li>
              <li>• CPU-intensive task optimization</li>
              <li>• Storage capacity management</li>
              <li>• Network bandwidth optimization</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-4 text-center">Auto-Scaling</h4>
            <div className="bg-white p-4 rounded border border-purple-200 mb-4">
              <h5 className="font-semibold text-purple-800 mb-2">Predictive Scaling</h5>
              <p className="text-sm text-purple-600">
                Machine learning-based capacity planning and proactive scaling
              </p>
            </div>
            <ul className="text-purple-700 text-sm space-y-2">
              <li>• Workload pattern recognition</li>
              <li>• Demand forecasting</li>
              <li>• Pre-emptive resource provisioning</li>
              <li>• Cost-aware scaling decisions</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-purple-50 p-6 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-4 text-center">Scaling Decision Matrix</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left p-3 font-bold text-gray-800">Workload Type</th>
                  <th className="text-left p-3 font-bold text-gray-800">Scaling Strategy</th>
                  <th className="text-left p-3 font-bold text-gray-800">Target Metrics</th>
                  <th className="text-left p-3 font-bold text-gray-800">Scale Trigger</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-200">
                  <td className="p-3">Agent Processing</td>
                  <td className="p-3">Horizontal + Queue-based</td>
                  <td className="p-3">Queue depth, Response time</td>
                  <td className="p-3">&gt; 100 pending tasks</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Knowledge Graph Queries</td>
                  <td className="p-3">Read replicas + Caching</td>
                  <td className="p-3">Query latency, Cache hit rate</td>
                  <td className="p-3">&gt; 500ms average latency</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-3">Code Generation</td>
                  <td className="p-3">Vertical + GPU acceleration</td>
                  <td className="p-3">Generation throughput, Quality scores</td>
                  <td className="p-3">&gt; 80% CPU utilization</td>
                </tr>
                <tr>
                  <td className="p-3">Quality Validation</td>
                  <td className="p-3">Parallel processing</td>
                  <td className="p-3">Validation time, Success rate</td>
                  <td className="p-3">&gt; 2 minute validation time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Performance Optimization */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Performance Optimization</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-3">Intelligent Caching</h4>
              <p className="text-yellow-700 text-sm mb-4">
                Multi-layer caching strategy optimized for semantic knowledge and agent processing patterns.
              </p>
              <ul className="text-yellow-600 text-sm space-y-2">
                <li>• <strong>L1 Cache:</strong> In-memory agent context caching</li>
                <li>• <strong>L2 Cache:</strong> Distributed knowledge graph fragments</li>
                <li>• <strong>L3 Cache:</strong> Generated artifact caching with semantic invalidation</li>
                <li>• <strong>CDN:</strong> Global distribution of static resources and documentation</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-3">Query Optimization</h4>
              <p className="text-orange-700 text-sm mb-4">
                Advanced query planning and execution optimization for knowledge graph operations.
              </p>
              <ul className="text-orange-600 text-sm space-y-2">
                <li>• <strong>Query Planner:</strong> Cost-based execution plan optimization</li>
                <li>• <strong>Index Strategy:</strong> Semantic relationship indexing</li>
                <li>• <strong>Materialized Views:</strong> Pre-computed common query patterns</li>
                <li>• <strong>Parallel Execution:</strong> Multi-threaded query processing</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-3">Processing Pipeline Optimization</h4>
              <p className="text-red-700 text-sm mb-4">
                Streamlined processing pipelines with minimal latency and maximum throughput.
              </p>
              <ul className="text-red-600 text-sm space-y-2">
                <li>• <strong>Batch Processing:</strong> Optimized batch sizes for different operations</li>
                <li>• <strong>Stream Processing:</strong> Real-time event processing with Apache Kafka</li>
                <li>• <strong>Pipeline Parallelization:</strong> Concurrent stage execution</li>
                <li>• <strong>Resource Pooling:</strong> Shared resources across agent instances</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-3">Network Optimization</h4>
              <p className="text-indigo-700 text-sm mb-4">
                Optimized network protocols and data transfer strategies for distributed operations.
              </p>
              <ul className="text-indigo-600 text-sm space-y-2">
                <li>• <strong>Protocol Optimization:</strong> HTTP/2, gRPC for internal communication</li>
                <li>• <strong>Compression:</strong> Intelligent payload compression</li>
                <li>• <strong>Connection Pooling:</strong> Persistent connections with load balancing</li>
                <li>• <strong>Edge Computing:</strong> Regional processing nodes for reduced latency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Management */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Intelligent Resource Management</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Dynamic resource allocation and management based on workload characteristics, 
          priority levels, and performance requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
            <h4 className="font-bold text-cyan-800 mb-4">Workload Classification</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-cyan-200">
                <h5 className="font-semibold text-cyan-800 text-sm">Critical Path Operations</h5>
                <p className="text-xs text-cyan-600">High priority, low latency requirements</p>
                <div className="text-xs text-cyan-500 mt-1">SLA: &lt; 1s response time</div>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <h5 className="font-semibold text-cyan-800 text-sm">Batch Operations</h5>
                <p className="text-xs text-cyan-600">High throughput, flexible timing</p>
                <div className="text-xs text-cyan-500 mt-1">SLA: &lt; 10min completion</div>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <h5 className="font-semibold text-cyan-800 text-sm">Background Tasks</h5>
                <p className="text-xs text-cyan-600">Best effort, resource available</p>
                <div className="text-xs text-cyan-500 mt-1">SLA: &lt; 1hr completion</div>
              </div>
            </div>
          </div>
          
          <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-4">Resource Allocation Strategy</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-teal-200">
                <h5 className="font-semibold text-teal-800 text-sm">Priority-Based Scheduling</h5>
                <p className="text-xs text-teal-600">Critical operations get reserved resources</p>
              </div>
              <div className="bg-white p-3 rounded border border-teal-200">
                <h5 className="font-semibold text-teal-800 text-sm">Elastic Resource Pools</h5>
                <p className="text-xs text-teal-600">Dynamic expansion based on demand</p>
              </div>
              <div className="bg-white p-3 rounded border border-teal-200">
                <h5 className="font-semibold text-teal-800 text-sm">Cost Optimization</h5>
                <p className="text-xs text-teal-600">Spot instances for non-critical workloads</p>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-4">Performance Monitoring</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-emerald-200">
                <h5 className="font-semibold text-emerald-800 text-sm">Real-time Metrics</h5>
                <p className="text-xs text-emerald-600">Continuous performance monitoring</p>
              </div>
              <div className="bg-white p-3 rounded border border-emerald-200">
                <h5 className="font-semibold text-emerald-800 text-sm">Anomaly Detection</h5>
                <p className="text-xs text-emerald-600">ML-based performance issue detection</p>
              </div>
              <div className="bg-white p-3 rounded border border-emerald-200">
                <h5 className="font-semibold text-emerald-800 text-sm">Predictive Scaling</h5>
                <p className="text-xs text-emerald-600">Proactive resource provisioning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High Availability & Disaster Recovery */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">High Availability & Disaster Recovery</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3">Multi-Region Deployment</h4>
              <p className="text-blue-700 text-sm mb-4">
                Geographically distributed architecture ensures service availability 
                and optimal performance across global user base.
              </p>
              <ul className="text-blue-600 text-sm space-y-2">
                <li>• <strong>Active-Active Setup:</strong> Multiple regions serving traffic simultaneously</li>
                <li>• <strong>Intelligent Routing:</strong> Latency-based traffic distribution</li>
                <li>• <strong>Data Replication:</strong> Consistent knowledge graph synchronization</li>
                <li>• <strong>Failover Automation:</strong> Sub-minute failover with zero data loss</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-3">Fault Tolerance</h4>
              <p className="text-purple-700 text-sm mb-4">
                Built-in resilience to component failures with graceful degradation 
                and automatic recovery mechanisms.
              </p>
              <ul className="text-purple-600 text-sm space-y-2">
                <li>• <strong>Circuit Breakers:</strong> Prevent cascade failures</li>
                <li>• <strong>Retry Logic:</strong> Intelligent retry with exponential backoff</li>
                <li>• <strong>Bulkhead Pattern:</strong> Isolated failure domains</li>
                <li>• <strong>Health Checks:</strong> Continuous component health monitoring</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-4 text-center">Recovery Time Objectives</h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-blue-200">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold text-blue-800">API Services</h5>
                  <span className="text-sm font-bold text-blue-600">RTO: 30s</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <p className="text-xs text-blue-600 mt-1">99.95% uptime SLA</p>
              </div>
              
              <div className="bg-white p-4 rounded border border-green-200">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold text-green-800">Knowledge Graph</h5>
                  <span className="text-sm font-bold text-green-600">RTO: 2min</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <p className="text-xs text-green-600 mt-1">99.9% availability target</p>
              </div>
              
              <div className="bg-white p-4 rounded border border-purple-200">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-semibold text-purple-800">Agent Processing</h5>
                  <span className="text-sm font-bold text-purple-600">RTO: 5min</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <p className="text-xs text-purple-600 mt-1">Graceful degradation mode</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Benchmarks */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Performance Benchmarks</h3>
        
        <p className="text-lg text-gray-700 mb-6">
          Real-world performance metrics demonstrating Breeze.AI's capability to handle 
          enterprise-scale workloads with consistent performance characteristics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1M+</div>
            <h4 className="font-bold text-green-800 mb-2">Knowledge Graph Queries/sec</h4>
            <p className="text-sm text-green-600">With sub-100ms average latency</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <h4 className="font-bold text-blue-800 mb-2">Concurrent Agent Tasks</h4>
            <p className="text-sm text-blue-600">Parallel processing capability</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50GB+</div>
            <h4 className="font-bold text-purple-800 mb-2">Code Generation/hour</h4>
            <p className="text-sm text-purple-600">Including tests and documentation</p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.95%</div>
            <h4 className="font-bold text-orange-800 mb-2">System Uptime</h4>
            <p className="text-sm text-orange-600">Enterprise SLA guarantee</p>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-4 text-center">Load Testing Results</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Specification Processing</h5>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• <strong>Peak Load:</strong> 1,000 simultaneous specification uploads</li>
                <li>• <strong>Processing Time:</strong> Average 2.3 seconds per specification</li>
                <li>• <strong>Quality Validation:</strong> 15 concurrent validation pipelines</li>
                <li>• <strong>Success Rate:</strong> 99.8% completion rate under peak load</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Implementation Generation</h5>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• <strong>Peak Throughput:</strong> 500 code generation requests/minute</li>
                <li>• <strong>Average Response:</strong> 4.7 seconds for full implementation</li>
                <li>• <strong>Resource Utilization:</strong> 85% CPU efficiency</li>
                <li>• <strong>Quality Score:</strong> 96% automated quality gate pass rate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cost Optimization */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 mb-8 border-l-4 border-green-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Cost Optimization</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-green-800 mb-4">Resource Efficiency</h4>
            <ul className="text-green-700 text-sm space-y-2">
              <li>• <strong>Right-sizing:</strong> Automatic resource allocation based on workload</li>
              <li>• <strong>Spot Instances:</strong> Up to 70% cost savings on batch operations</li>
              <li>• <strong>Reserved Capacity:</strong> Committed use discounts for predictable workloads</li>
              <li>• <strong>Auto-scaling:</strong> Scale down during low usage periods</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-teal-800 mb-4">Operational Efficiency</h4>
            <ul className="text-teal-700 text-sm space-y-2">
              <li>• <strong>Caching:</strong> Reduce compute costs through intelligent caching</li>
              <li>• <strong>Compression:</strong> Lower bandwidth and storage costs</li>
              <li>• <strong>Lifecycle Management:</strong> Automated data archival and cleanup</li>
              <li>• <strong>Multi-tenancy:</strong> Shared resources across customers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Security & Compliance Foundation</h3>
        <p className="text-lg mb-6 opacity-90">
          This scalable, high-performance architecture is built on a foundation of 
          enterprise-grade security and comprehensive compliance capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Security by Design</h4>
            <p className="text-sm">Built-in security controls at every architectural layer</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Compliance Framework</h4>
            <p className="text-sm">SOC 2, ISO 27001, GDPR, and industry-specific standards</p>
          </div>
          <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <h4 className="font-bold mb-2">Audit & Governance</h4>
            <p className="text-sm">Complete audit trails and governance capabilities</p>
          </div>
        </div>
        
        {onNext && (
          <div className="mt-8">
            <button
              onClick={onNext}
              className="inline-flex items-center gap-3 bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Security & Compliance
              <span className="text-2xl">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScalabilityPerformance;