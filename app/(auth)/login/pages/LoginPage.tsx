import React from "react";
import LoginLayout from "../components/LoginLayout";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
};

export default LoginPage;
