import { ContactFormSchema } from "@/app/libs/zod";
import emailjs from "@emailjs/browser";

export const sendMessage = async (
  name: string,
  email: string,
  message: string,
  isKvkkChecked: boolean
): Promise<{
  status: "success" | "fail" | "error";
  errors?: { name?: string; email?: string; message?: string; kvkk?: string };
  text?: string;
}> => {
  const result = ContactFormSchema.safeParse({
    name,
    email,
    message,
    kvkk: isKvkkChecked,
  });

  if (!result.success) {
    const fieldErrors: {
      name?: string;
      email?: string;
      message?: string;
      kvkk?: string;
    } = {};

    result.error.errors.forEach((err) => {
      if (err.path[0] === "name") fieldErrors.name = err.message;
      if (err.path[0] === "email") fieldErrors.email = err.message;
      if (err.path[0] === "message") fieldErrors.message = err.message;
      if (err.path[0] === "kvkk") fieldErrors.kvkk = err.message;
    });

    return { status: "fail", errors: fieldErrors };
  }

  const templateParams = {
    subject: `${name} Teklif İstiyor`,
    description: "Teklif almak isteyen yeni bir müşteri var",
    name,
    email,
    question: message,
  };

  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const { text } = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_QUESTION!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      return { status: "success", text };
    } catch (error) {
      console.log(error);
      attempt++;
    }
  }

  // 🛠 Fix: ensure all code paths return
  return { status: "error" };
};
