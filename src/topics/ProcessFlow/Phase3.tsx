import { CheckCircle } from 'lucide-react';
import ProcessDiagram from './ProcessDiagram';

interface Phase3Props {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Phase3: React.FC<Phase3Props> = () => {
  return (
    <div>
      <ProcessDiagram 
        phaseNumber={3}
      />
      
      {/* Completion Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white text-center mt-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <CheckCircle className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Process Complete!</h3>
        </div>
        <p className="text-lg mb-6 opacity-90">
          You've now seen the complete three-phase transformation from manual development to semantic engineering. 
          The journey shows how software engineers can evolve into semantic engineers who orchestrate AI agents while maintaining quality and governance.
        </p>
        <p className="text-sm opacity-80">
          Ready to start your transformation journey? Use the navigation above to explore how the Semantic Engineer principles connect with this practical framework.
        </p>
      </div>
    </div>
  );
};

export default Phase3;