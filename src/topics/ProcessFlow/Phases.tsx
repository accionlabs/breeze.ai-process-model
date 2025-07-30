import InteractiveProcessDiagram from '../../InteractiveProcessDiagram';

interface PhasesProps {
  onNavigate: (screenId: string) => void;
  onNext: () => void;
}

const Phases: React.FC<PhasesProps> = () => {
  return (
    <div>
      <InteractiveProcessDiagram />
    </div>
  );
};

export default Phases;