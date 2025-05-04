import { sendQuestion } from "@/app/actions/sendQuestion";
import { QuestionsFormSchema } from "@/app/libs/zod";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { PrismaQuestion } from "../../../../../prisma/types";
import { sendQuestionMail } from "@/app/utils/emailjs/sendQuestionMail";

function QuestionForm({
  setNewQuestion,
}: {
  setNewQuestion: Dispatch<SetStateAction<PrismaQuestion>>;
}) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    question?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = QuestionsFormSchema.safeParse({ name, email, question });

    if (!result.success) {
      const fieldErrors: { name?: string; email?: string; question?: string } =
        {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "name") fieldErrors.name = err.message;
        if (err.path[0] === "email") fieldErrors.email = err.message;
        if (err.path[0] === "question") fieldErrors.question = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const { status, errors, data } = await sendQuestion(
        name,
        email,
        question
      );

      if (status === "fail" && errors) return setErrors(errors);
      if (status === "error") throw new Error("Unexpected server error!");
      if (status === "success" && data) {
        setName("");
        setEmail("");
        setQuestion("");
        setNewQuestion(data);
        toast.success(
          "Sorunuzu başarıyla gönderdiniz. Sorunuzun cevabını en kısa sürede, sorunuzun alt kısmında yayınlayacağız."
        );

        const { name, email, question } = data;
        sendQuestionMail(name, email, question);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Sorunuzu gönderirken beklenmedik bir hata oluştu. Lütfen tekrar deneyiniz."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-4 lg:w-4/6 lg:flex gap-x-8 space-y-4 lg:space-y-0 items-center justify-center">
      <form
        action=""
        onSubmit={submitForm}
        className="grid gap-y-1 lg:min-w-96"
      >
        <input
          type="text"
          name="username"
          id="username"
          className="input w-full"
          placeholder="İsim (Opsiyonel)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Mail. Cevap verildiğinde bildirim alın (Opsiyonel)"
          className="input w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-sm font-semibold text-error w-full max-w-96">
            {errors.email}
          </p>
        )}
        <textarea
          name="question"
          id="question"
          className="textarea w-full resize-none"
          placeholder="Lütfen sorunuzu bizimle paylaşın."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {errors.question && (
          <p className="text-sm font-semibold text-error w-full max-w-96">
            {errors.question}
          </p>
        )}
        <button
          type="submit"
          className={`btn  ${
            isLoading ? "pointer-events-none bg-primary/50" : "btn-primary"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center gap-x-1">
              <p>Gönderiyor</p>
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          ) : (
            "Gönder"
          )}
        </button>
      </form>
      <div className="px-2 lg:px-0 grow">
        <h2 className="text-xl font-semibold">
          Görüşleriniz Bizim İçin Değerli!
        </h2>
        <p>
          Hizmet kalitemizi geliştirmek için soru ve önerilerinizi bizimle
          paylaşmanızdan mutluluk duyarız.
        </p>
      </div>
    </div>
  );
}
export default QuestionForm;
