import React from "react";
import ResetPasswordLayout from "./ResetLayout"; // Reutiliza LoginLayout
import ResetForm from "./ResetForm";

const ResetPasswordPage: React.FC = () => {
  return (
    <ResetPasswordLayout>
      <ResetForm />
    </ResetPasswordLayout>
  );
};

export default ResetPasswordPage;
