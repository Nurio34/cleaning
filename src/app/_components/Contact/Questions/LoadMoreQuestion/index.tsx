import { getQuestions } from "@/app/actions/getQuestions";
import { Dispatch, SetStateAction } from "react";
import { PrismaQuestion } from "../../../../../../prisma/types";

function LoadMoreQuestion({
  isLoading,
  setIsLoading,
  count,
  setCount,
  skipNewQuestion,
  setQuestionsState,
}: {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  skipNewQuestion: number;
  setQuestionsState: Dispatch<SetStateAction<PrismaQuestion[]>>;
}) {
  const loadMore = async () => {
    setIsLoading(true);
    try {
      const { status, questions } = await getQuestions(count, skipNewQuestion);

      if (status === "success" && questions) {
        setQuestionsState((prev) => [...prev, ...questions]);
        setCount((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="flex w-full lg:w-auto gap-x-1 items-center justify-center font-semibold text-sm text-base-content/80 cursor-pointer py-2"
      onClick={loadMore}
      disabled={isLoading}
    >
      <div className="w-10 border-t-[1px]"></div>
      {isLoading ? (
        <div className="flex items-center gap-x-1">
          <p>Daha fazla göster</p>
          <span className="loading loading-spinner loading-sm"></span>
        </div>
      ) : (
        "Daha fazla göster"
      )}
      <div className="w-10 border-t-[1px]"></div>
    </button>
  );
}
export default LoadMoreQuestion;
