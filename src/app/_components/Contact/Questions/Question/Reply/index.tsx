import { PrismaQuestion } from "../../../../../../../prisma/types";
import { Dispatch, SetStateAction } from "react";

function Reply({
  question,
  setCurrentAnsweringForm,
  setIsAnswering,
  isAdmin,
}: {
  question: PrismaQuestion;
  setCurrentAnsweringForm: Dispatch<SetStateAction<string>>;
  setIsAnswering: Dispatch<SetStateAction<boolean>>;
  isAdmin: boolean;
}) {
  return (
    !question.answer &&
    isAdmin && (
      <button
        type="button"
        className="text-success font-bold text-sm cursor-pointer transition-all hover:text-success/70 hover:scale-110"
        onClick={() => {
          setCurrentAnsweringForm(question.id);
          setIsAnswering((prev) => !prev);
        }}
      >
        Yanıtla
      </button>
    )
  );
}
export default Reply;
