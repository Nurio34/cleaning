import { ContactFormSchema } from "@/app/libs/zod";
import { sendMessage } from "@/app/utils/emailjs/sendMessage";
import Link from "next/link";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isKvkkChecked, setIsKvkkChecked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
    kvkk?: string;
  }>({});

  const sendMessageAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const result = ContactFormSchema.safeParse({
        name,
        email,
        message,
        kvkk: isKvkkChecked,
      });

      if (!result.success) {
        const newErrors: {
          name?: string;
          email?: string;
          message?: string;
          kvkk?: string;
        } = {};
        result.error.errors.forEach((err) => {
          newErrors[err.path[0] as keyof typeof newErrors] = err.message;
        });
        setErrors(newErrors);
        return;
      }
      setErrors({});

      const { status, errors, text } = await sendMessage(
        name,
        email,
        message,
        isKvkkChecked
      );
      if (status === "fail" && errors) return setErrors(errors);
      if (status === "error") throw new Error("Unexpected server error!");
      if (status === "success" && text && text === "OK") {
        toast.success(
          "Mesajınız başarıyla alındı, en kısa sürede size dönüş yapacağız."
        );
        setName("");
        setEmail("");
        setMessage("");
        setIsKvkkChecked(false);
      }
    } catch (error) {
      console.log(error);

      toast.error("Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="grid gap-y-1 lg:min-w-96 space-y-2"
      onSubmit={sendMessageAction}
    >
      <div>
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
          <p className="text-xs font-semibold text-error px-2 lg:px-0">
            {errors.name}
          </p>
        )}
      </div>
      <div>
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
          <p className="text-xs font-semibold text-error px-2 lg:px-0">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <textarea
          name="message"
          id="message"
          placeholder="Size nasıl yardımcı olabilriz ?"
          className="textarea w-full resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />{" "}
        {errors.message && (
          <p className="text-xs font-semibold text-error px-2 lg:px-0">
            {errors.message}
          </p>
        )}
      </div>
      <div className="px-2 lg:px-0">
        <label htmlFor="kvkk-2" className="px-2 lg:px-0">
          <input
            type="checkbox"
            name="kvkk-2"
            id="kvkk-2"
            checked={isKvkkChecked}
            onChange={(e) => setIsKvkkChecked(e.target.checked)}
          />
          <small className="align-top">
            <Link
              href="/kvkk"
              target="_blank"
              className="text-primary underline underline-offset-2 pl-2 contrast-200 font-semibold "
            >
              Kişisel Verilerin Korunması Aydınlatma Metni’ni
            </Link>{" "}
            okudum ve kişisel verilerimin belirtilen kapsamda işlenmesine açık
            rıza veriyorum.
          </small>
        </label>
        {errors.kvkk && (
          <p className="text-xs font-semibold text-error px-2 lg:px-0">
            {errors.kvkk}
          </p>
        )}
      </div>
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
