import React from "react";

interface LoginErrorProps {
  message: string;
}

const LoginError: React.FC<LoginErrorProps> = ({ message }) => {
  return (
    <p className="text-red-500 text-sm mt-2">{message}</p>
  );
};

export default LoginError;
