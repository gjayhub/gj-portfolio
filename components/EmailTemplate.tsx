import * as React from "react";

interface EmailTemplateProps {
  name: string | null;
  email: string | null;
  message: string | null;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1 className='p-10 text-center'>You have an email from, {name}!</h1>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);
