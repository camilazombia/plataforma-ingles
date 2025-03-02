"use client";

import React, { useState } from "react";

const AlphabetExercise = () => {
  const [answer, setAnswer] = useState("");

  return (
    <div>
      <h1>Ejercicio del Alfabeto</h1>
      <p>¿Cuál es la primera letra del alfabeto?</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="border p-2"
      />
    </div>
  );
};

export default AlphabetExercise;
