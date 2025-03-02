"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import questionsData from "../data/questions"; // ✅ Ajustamos la ruta

const ExamPage = () => {
  const { moduleId } = useParams();
  const router = useRouter();
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("📌 Cargando examen para moduleId:", moduleId);

    if (moduleId && questionsData[moduleId]) {
      setQuestions(questionsData[moduleId]);
    } else {
      console.error(`❌ No se encontraron preguntas para el módulo ${moduleId}`);
      setQuestions([]); // 🔥 Evita que `questions` sea undefined
    }
    setLoading(false);
  }, [moduleId]);

  const handleAnswer = (selectedOption: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: selectedOption,
    }));
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      alert("Por favor, selecciona una respuesta.");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctCount += 1;
      }
    });

    const finalScore = (correctCount / questions.length) * 10;
    setScore(finalScore);
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center bg-gray-100">
      <button onClick={() => router.back()} className="absolute top-4 left-4 px-4 py-2 bg-gray-200 rounded">
        ⬅ Volver
      </button>

      <h1 className="text-2xl font-bold text-center mt-4">Desafío de Conocimiento</h1>

      {loading ? (
        <p className="text-center text-gray-500">Cargando preguntas...</p>
      ) : questions.length === 0 ? (
        <p className="text-center text-red-500">⚠️ No hay preguntas disponibles para este módulo.</p>
      ) : (
        <>
          <p className="text-center text-gray-600">{questions[currentQuestion]?.title || "Pregunta sin título"}</p>
          <p className="text-right text-gray-500">Pregunta {currentQuestion + 1} de {questions.length}</p>

          {/* Opciones de respuesta */}
          <div className="mt-4">
            {questions[currentQuestion]?.options?.map((option: string, index: number) => (
              <button
                key={index}
                className={`block w-full p-2 border rounded mb-2 ${
                  answers[currentQuestion] === option ? "bg-blue-500 text-white" : "bg-white"
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6 w-full max-w-lg">
            <button onClick={handlePrevious} disabled={currentQuestion === 0} className="px-4 py-2 border rounded">
              Anterior Pregunta
            </button>
            <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded">
              {currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente"}
            </button>
          </div>

          {score !== null && (
            <p className="mt-4 text-lg font-semibold text-center">
              Tu puntuación: {score} / 10
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ExamPage;
