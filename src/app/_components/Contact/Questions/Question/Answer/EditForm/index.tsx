import { editAnswer } from "@/app/actions/editAnswer";
import { Dispatch, FormEvent, SetStateAction } from "react";
import toast from "react-hot-toast";
import { PrismaQuestion } from "../../../../../../../../prisma/types";
import { sendAnswerEmail } from "@/app/utils/emailjs/sendAnswerEmail";

function EditForm({
  isEditing,
  setIsEditing,
  currentAnsweringForm,
  questionId,
  isLoading,
  setIsLoading,
  descriptionState,
  setDescriptionState,
  setQuestionsState,
  question,
}: {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  currentAnsweringForm: string;
  questionId: string;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  descriptionState: string;
  setDescriptionState: Dispatch<SetStateAction<string>>;
  setQuestionsState: Dispatch<SetStateAction<PrismaQuestion[]>>;
  question: PrismaQuestion;
}) {
  const editAnswerAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const { status, data } = await editAnswer(descriptionState, questionId);

      if (status === "fail" || status === "error") {
        toast.error("Yanıtı düzenlerken birşeyler ters gitti. Tekrar deneyin.");
      } else if (status === "success" && data) {
        setQuestionsState((prev) =>
          prev.map((question) =>
            question.id === data.questionId
              ? { ...question, answer: data }
              : question
          )
        );
        setIsEditing(false);
        toast.success("Yanıtınız başarıyla düzenlendi.");

        const { description } = data;
        const { name, email, question: questionState } = question;
        if (email) sendAnswerEmail(name, email, questionState, description);
      }
    } catch (error) {
      console.log(error);
      toast.error("Yanıtı düzenlerken birşeyler ters gitti. Tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    isEditing &&
    currentAnsweringForm === questionId && (
      <form className="pl-10 grid gap-y-2" onSubmit={editAnswerAction}>
        <textarea
          name="edit"
          id="edit"
          className="textarea resize-none w-full"
          value={descriptionState}
          onChange={(e) => setDescriptionState(e.target.value)}
        />
        <button
          type="submit"
          className={`btn justify-self-end  ${
            isLoading
              ? "bg-info/70 pointer-events-none"
              : "btn-info cursor-pointer"
          }`}
        >
          {isLoading ? (
            <div>
              <span>Düzeltiyor</span>
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          ) : (
            "Düzelt"
          )}
        </button>
      </form>
    )
  );
}
export default EditForm;
