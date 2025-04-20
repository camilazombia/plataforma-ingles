"use client";
import React from "react";

interface ExamQuestionProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
}

const ExamQuestion: React.FC<ExamQuestionProps> = ({
  question,
  options,
  selectedAnswer,
  onSelectAnswer,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="font-semibold text-lg">{question}</h3>
      <ul className="mt-2 space-y-2">
        {options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => onSelectAnswer(option)}
              className={`w-full p-2 border rounded ${
                selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamQuestion;
