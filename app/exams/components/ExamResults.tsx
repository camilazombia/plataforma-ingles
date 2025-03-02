"use client";

import React from "react";

interface ExamResultsProps {
  totalQuestions: number;
  correctAnswers: number;
  questions?: { question: string }[]; // 🔹 Hacemos que `questions` sea opcional
}

const ExamResults: React.FC<ExamResultsProps> = ({ totalQuestions, correctAnswers, questions = [] }) => {
  const passingScore = 9;
  const score = (correctAnswers / totalQuestions) * 10;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-center">
      {score >= passingScore ? (
        <h2 className="text-green-600 text-xl font-bold">¡Felicidades! Has aprobado.</h2>
      ) : (
        <h2 className="text-red-600 text-xl font-bold">¡No te rindas!</h2>
      )}

      <p className="text-gray-700 mt-2">Necesitas una calificación mínima de {passingScore}.0 para aprobar.</p>

      {questions.length > 0 ? (
        <>
          <h3 className="font-semibold mt-4">Resumen de preguntas:</h3>
          <ul className="text-left list-decimal ml-6">
            {questions.map((q, index) => (
              <li key={index} className="text-gray-900">{q.question}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-red-500 mt-4">Error: No hay preguntas disponibles.</p> // 🔹 Manejo de error si `questions` está vacío
      )}

      <p className="mt-4 text-lg font-semibold">
        Tu puntuación: <span className="text-blue-600">{score.toFixed(1)} / 10</span>
      </p>
    </div>
  );
};

export default ExamResults;
