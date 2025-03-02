import React from "react";
import LoginLayout from "../../login/components/LoginLayout"; // Reutiliza LoginLayout
import ResetSuccess from "../ResetSuccess";

const ResetSuccessPage: React.FC = () => {
  return (
    <LoginLayout>
      <ResetSuccess />
    </LoginLayout>
  );
};

export default ResetSuccessPage;
