"use client";

interface ProgressBarProps {
  progress: number; // El progreso debe estar entre 0 y 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-500 h-4 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
