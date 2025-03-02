import React from "react";

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
