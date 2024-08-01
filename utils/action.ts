"use server";

import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

export const sendEmail = async (
  prev: any,
  formData: FormData
): Promise<{ message: String }> => {
  try {
    const senderData = {
      name: formData.get("name") as string | null,
      email: formData.get("email") as string | null,
      message: formData.get("message") as string | null,
    };

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["geejayrivera@gmail.com"],
      subject: "Hello World",
      react: EmailTemplate({
        name: senderData.name,
        email: senderData.email,
        message: senderData.message,
      }),
    });

    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
};
