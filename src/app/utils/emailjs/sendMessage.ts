import emailjs from "@emailjs/browser";

export const sendMessage = async (
  name: string,
  email: string,
  message: string
) => {
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

      return text;
    } catch (error) {
      console.log(error);

      attempt++;
      if (attempt === maxRetries) {
        throw error;
      }
    }
  }
};
