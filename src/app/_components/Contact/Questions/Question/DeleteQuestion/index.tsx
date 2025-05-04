import { Dispatch, SetStateAction, useState } from "react";
import { PrismaQuestion } from "../../../../../../../prisma/types";
import { deleteQuestion } from "@/app/actions/deleteQuestion";
import toast from "react-hot-toast";

function DeleteQuestion({
  question,
  setQuestionsState,
  isAdmin,
}: {
  question: PrismaQuestion;
  setQuestionsState: Dispatch<SetStateAction<PrismaQuestion[]>>;
  isAdmin: boolean;
}) {
  const [isSure, setIsSure] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const deleteQuestionAction = async () => {
    setIsLoading(true);
    try {
      const { status, data } = await deleteQuestion(question.id);

      if (status === "fail" || status === "error") {
        toast.error("Silerken birşeyler ters gitt. Tekrar deneyin.");
      } else if (status === "success" && data) {
        setQuestionsState((prev) =>
          prev.filter((question) => question.id !== data.id)
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Silerken birşeyler ters gitt. Tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    isAdmin && (
      <button
        type="button"
        className="text-error text-sm font-bold cursor-pointer transition-all hover:text-error/80 hover:scale-110"
        onClick={() => (!isSure ? setIsSure(true) : deleteQuestionAction())}
        disabled={isLoading}
      >
        {!isSure ? (
          "Sil"
        ) : isLoading ? (
          <div>
            <span>Emin Misin ?</span>
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        ) : (
          "Emin Misin?"
        )}
      </button>
    )
  );
}
export default DeleteQuestion;
