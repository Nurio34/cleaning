import emailjs from "@emailjs/browser";

export const sendAnswerEmail = async (
  name: string,
  email: string,
  question: string,
  answer: string
) => {
  const templateParams = {
    name,
    email,
    question,
    answer,
  };

  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ANSWER!,
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
