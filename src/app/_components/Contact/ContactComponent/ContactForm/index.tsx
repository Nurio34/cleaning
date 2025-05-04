import { ContactFormSchema } from "@/app/libs/zod";
import { sendMessage } from "@/app/utils/emailjs/sendMessage";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  console.log(errors);

  const sendMessageAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const result = ContactFormSchema.safeParse({ name, email, message });

      if (!result.success) {
        const newErrors: { name?: string; email?: string; message?: string } =
          {};
        result.error.errors.forEach((err) => {
          newErrors[err.path[0] as keyof typeof newErrors] = err.message;
        });
        setErrors(newErrors);
        return;
      }
      setErrors({});

      const text = await sendMessage(name, email, message);
      if (text && text === "OK") {
        toast.success(
          "Mesajınız başarıyla alındı, en kısa sürede size dönüş yapacağız."
        );
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);

      toast.error("Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="min-w-96 space-y-2" onSubmit={sendMessageAction}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="İsminiz"
        className="input w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && (
        <p className="text-xs font-semibold text-error">{errors.name}</p>
      )}
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="input w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      {errors.email && (
        <p className="text-xs font-semibold text-error">{errors.email}</p>
      )}
      <textarea
        name="message"
        id="message"
        placeholder="Size nasıl yardımcı olabilriz ?"
        className="textarea w-full resize-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />{" "}
      {errors.message && (
        <p className="text-xs font-semibold text-error">{errors.message}</p>
      )}
      <button
        type="submit"
        className={`btn  w-full ${
          isLoading
            ? "bg-primary pointer-events-none"
            : "cursor-pointer btn-primary"
        }`}
      >
        {isLoading ? (
          <div className="flex items-center gap-x-2">
            <span>Gönderiliyor</span>
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        ) : (
          "Teklif Al"
        )}
      </button>
    </form>
  );
}
export default ContactForm;
