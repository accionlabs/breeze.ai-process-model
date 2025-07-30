import ProcessDiagram from './ProcessDiagram';

interface Phase1Props {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Phase1: React.FC<Phase1Props> = () => {
  return (
    <ProcessDiagram 
      phaseNumber={1}
    />
  );
};

export default Phase1;