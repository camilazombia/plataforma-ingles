import React from "react";

const ResetError: React.FC<{ message: string }> = ({ message }) => {
  return <p className="text-red-500 mt-2">{message}</p>;
};

export default ResetError;
