import emailjs from "@emailjs/browser";

export const sendQuestionMail = async (
  name: string,
  email: string | null,
  question: string
) => {
  const templateParams = {
    subject: `${name}'den Yeni Soru`,
    description: "Web siteniz üzerinden yeni bir soru gönderildi",
    name,
    email: email || "Belirtilmedi",
    question,
  };

  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_QUESTION!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      return;
    } catch (error) {
      console.log(error);

      attempt++;
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
};
