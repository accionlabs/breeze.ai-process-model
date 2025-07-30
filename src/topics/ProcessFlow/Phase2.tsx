import ProcessDiagram from './ProcessDiagram';

interface Phase2Props {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Phase2: React.FC<Phase2Props> = () => {
  return (
    <ProcessDiagram 
      phaseNumber={2}
    />
  );
};

export default Phase2;