"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import WorkshopLayout from "./WorkshopLayout"; // Ajusta la ruta si es diferente

const letterAudioList = [
  { letter: "t", file: "y-21.mp3" },
  { letter: "n", file: "y-14.mp3" },
  { letter: "j", file: "y-10.mp3" },
  { letter: "o", file: "y-16.mp3" },
  { letter: "a", file: "y-01.mp3" },
  { letter: "f", file: "y-06.mp3" },
  { letter: "v", file: "y-23.mp3" },
  { letter: "b", file: "y-02.mp3" },
  { letter: "y", file: "y-26.mp3" },
  { letter: "i", file: "y-09.mp3" },
  { letter: "h", file: "y-08.mp3" },
  { letter: "w", file: "y-24.mp3" },
  { letter: "d", file: "y-04.mp3" },
  { letter: "e", file: "y-05.mp3" },
  { letter: "k", file: "y-11.mp3" },
  { letter: "c", file: "y-03.mp3" },
  { letter: "s", file: "y-20.mp3" },
  { letter: "x", file: "y-25.mp3" },
  { letter: "z", file: "y-27.mp3" },
  { letter: "l", file: "y-12.mp3" },
  { letter: "m", file: "y-13.mp3" },
  { letter: "g", file: "y-07.mp3" },
  { letter: "r", file: "y-19.mp3" },
  { letter: "q", file: "y-18.mp3" },
  { letter: "u", file: "y-22.mp3" },
  { letter: "p", file: "y-17.mp3" },
];


const AlphabetExercise = () => {
  const [answers, setAnswers] = useState<string[]>(Array(letterAudioList.length).fill(""));
  const [feedback, setFeedback] = useState<(boolean | null)[]>(Array(letterAudioList.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  const playAudio = (file: string) => {
    const audio = new Audio(`/assets/audio/${file}`);
    audio.play();
  };

  const handleChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);

    if (submitted) {
      const isCorrect = value.toLowerCase() === letterAudioList[index].letter;
      const updatedFeedback = [...feedback];
      updatedFeedback[index] = isCorrect;
      setFeedback(updatedFeedback);
    }
  };

  const handleSubmit = () => {
    const newFeedback = answers.map(
      (val, i) => val.toLowerCase() === letterAudioList[i].letter
    );
    setFeedback(newFeedback);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(letterAudioList.length).fill(""));
    setFeedback(Array(letterAudioList.length).fill(null));
    setSubmitted(false);
  };

  return (
    <WorkshopLayout
      title="Ejercicio del Alfabeto"
      description="Presiona el botón para escuchar una letra y escribe la letra correspondiente."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {letterAudioList.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <button
              onClick={() => playAudio(item.file)}
              className="hover:opacity-80"
              aria-label={`Reproducir letra ${index + 1}`}
            >
              <Image
                src={`/assets/${theme === "dark" ? "dark" : "light"}/play.svg`}
                alt="Reproducir"
                width={24}
                height={24}
              />
            </button>

            <input
              type="text"
              maxLength={1}
              value={answers[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="border rounded-md px-2 py-1 text-center w-10"
              aria-label={`Respuesta letra ${index + 1}`}
            />

            {feedback[index] !== null && (
              <Image
                src={`/assets/${theme === "dark" ? "dark" : "light"}/${feedback[index] ? "correct.svg" : "wrong.svg"}`}
                alt={feedback[index] ? "Correcto" : "Incorrecto"}
                width={20}
                height={20}
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <button onClick={handleSubmit} className="button--primary button">
          Revisar
        </button>
        <button onClick={handleReset} className="button--secondary button">
          Reiniciar
        </button>
      </div>
    </WorkshopLayout>
  );
};

export default AlphabetExercise;
