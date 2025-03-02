import React from "react";
import LoginLayout from "../login/components/LoginLayout"; // Reutiliza LoginLayout
import ResetForm from "./ResetForm";

const ResetPasswordPage: React.FC = () => {
  return (
    <LoginLayout>
      <ResetForm />
    </LoginLayout>
  );
};

export default ResetPasswordPage;
