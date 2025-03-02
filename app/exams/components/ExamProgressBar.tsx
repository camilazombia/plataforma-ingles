import React from "react";

const ExamProgressBar: React.FC<{ current: number; total: number }> = ({
  current,
  total,
}) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 h-4 rounded-lg">
      <div
        className="bg-primary h-4 rounded-lg"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ExamProgressBar;
