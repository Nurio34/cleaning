import { getQuestions } from "@/app/actions/getQuestions";
import { useCallback, useEffect, useState } from "react";
import Question from "./Question";
import { PrismaQuestion } from "../../../../../prisma/types";
import LoadMoreQuestion from "./LoadMoreQuestion";

function Questions({
  newQuestion,
  isAdmin,
  totalQuestions,
}: {
  newQuestion: PrismaQuestion;
  isAdmin: boolean;
  totalQuestions: number;
}) {
  const [questionsState, setQuestionsState] = useState<PrismaQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [count, setCount] = useState(0);
  const [skipNewQuestion, setSkipNewQuestion] = useState(0);
  const [currentAnsweringForm, setCurrentAnsweringForm] = useState("");

  const getInitialQuestion = useCallback(async () => {
    setIsLoading(true);
    try {
      const { status, questions } = await getQuestions(count, skipNewQuestion);

      if (status === "fail" || status === "error") setIsError(true);
      else if (status === "success" && questions) {
        setIsError(false);
        setQuestionsState(questions);
        setCount((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [count, skipNewQuestion]); // Dependencies for the hook

  useEffect(() => {
    getInitialQuestion();
  }, [getInitialQuestion]);

  useEffect(() => {
    if (newQuestion.id.trim() !== "") {
      setQuestionsState((prev) => [newQuestion, ...prev]);
      setSkipNewQuestion((prev) => prev + 1);
    }
  }, [newQuestion]);

  if (isError)
    return (
      <div className="lg:w-4/6 space-y-2 px-2 lg:px-0">
        <p>
          Birşeyler ters gitti. Soru-cevap bölümümüzü görüntülemek için
          tıklayın.
        </p>
        <button
          type="button"
          className={`btn  ${
            isLoading
              ? "bg-secondary pointer-events-none"
              : "btn-secondary cursor-pointer"
          } `}
          onClick={getInitialQuestion}
        >
          {isLoading ? (
            <div className="flex gap-x-1 items-center">
              <span>Yeniliyor</span>
              <span className="loading loading-spinner loading-sm"></span>
            </div>
          ) : (
            "Yenile"
          )}
        </button>
      </div>
    );

  if (questionsState.length === 0)
    return (
      <p className="lg:w-4/6 px-2 lg:px-0">Şu an hiç soru bulunmamamktadır.</p>
    );

  return (
    <>
      <ul className=" lg:w-4/6 space-y-4 px-2 lg:px-0">
        {questionsState.map((question) => (
          <Question
            key={question.id}
            question={question}
            setQuestionsState={setQuestionsState}
            currentAnsweringForm={currentAnsweringForm}
            setCurrentAnsweringForm={setCurrentAnsweringForm}
            isAdmin={isAdmin}
          />
        ))}
      </ul>
      {questionsState.length !== totalQuestions && (
        <LoadMoreQuestion
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          count={count}
          setCount={setCount}
          skipNewQuestion={skipNewQuestion}
          setQuestionsState={setQuestionsState}
        />
      )}
    </>
  );
}
export default Questions;
