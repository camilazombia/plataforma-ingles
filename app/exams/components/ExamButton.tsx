"use client";

import Link from "next/link";

interface ExamButtonProps {
  isDisabled: boolean;
  moduleId: number; // 🔹 Para generar el link dinámico
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const ExamButton: React.FC<ExamButtonProps> = ({ isDisabled, moduleId, children, variant = "primary" }) => {
  const buttonClass = isDisabled
    ? "button--disabled cursor-not-allowed"
    : variant === "primary"
    ? "button--primary"
    : "button--secondary";

  return (
    <Link href={isDisabled ? "#" : `/exams/${moduleId}`} passHref>
      <button disabled={isDisabled} aria-disabled={isDisabled} className={buttonClass}>
        {children}
      </button>
    </Link>
  );
};

export default ExamButton;
