import { sendAnswer } from "@/app/actions/sendAnswer";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { PrismaQuestion } from "../../../../../../../prisma/types";
import toast from "react-hot-toast";
import { sendAnswerEmail } from "@/app/utils/emailjs/sendAnswerEmail";

function AnswerForm({
  question,
  setQuestionsState,
  isAnswering,
  currentAnsweringForm,
}: {
  question: PrismaQuestion;
  setQuestionsState: Dispatch<SetStateAction<PrismaQuestion[]>>;
  isAnswering: boolean;
  currentAnsweringForm: string;
}) {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendAnswerAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { status, data } = await sendAnswer(answer, question.id);

      if (status === "fail" || status === "error") {
        toast.error("Birşeyler ters gitt. Tekrar deneyin.");
      } else if (status === "success" && data) {
        setQuestionsState((prev) =>
          prev.map((question) =>
            question.id === data.questionId
              ? { ...question, answer: data }
              : question
          )
        );
        toast.success("Yanıtınız başarıyla oluşturuldu.");

        const { description } = data;
        const { name, email, question: questionState } = question;
        if (email) sendAnswerEmail(name, email, questionState, description);
      }
    } catch (error) {
      console.log(error);
      toast.error("Birşeyler ters gitt. Tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    !question.answer &&
    isAnswering &&
    currentAnsweringForm === question.id && (
      <form className="grid gap-y-2" onSubmit={sendAnswerAction}>
        <textarea
          name="answer"
          id="answer"
          className="textarea w-full resize-none"
          placeholder="Lütfen yanıtınızı yazın..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button
          type="submit"
          className={`btn  justify-self-end cursor-pointer
            ${isLoading ? "bg-accent/70 pointer-events-none" : "btn-accent"}    
        `}
        >
          {isLoading ? (
            <div>
              <span>Yanıtlanıyor</span>
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          ) : (
            "Yanıtla"
          )}
        </button>
      </form>
    )
  );
}
export default AnswerForm;
