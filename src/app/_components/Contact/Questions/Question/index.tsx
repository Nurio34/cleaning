import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PrismaQuestion } from "../../../../../../prisma/types";
import Name from "./Name";
import CreatedAt from "./CreatedAt";
import Reply from "./Reply";
import DeleteQuestion from "./DeleteQuestion";
import AnswerForm from "./AnswerForm";
import Answer from "./Answer";
import QuestionDescription from "./QuestionDescription";
import UserImage from "./UserImage";

function Question({
  question,
  setQuestionsState,
  currentAnsweringForm,
  setCurrentAnsweringForm,
  isAdmin,
}: {
  question: PrismaQuestion;
  setQuestionsState: Dispatch<SetStateAction<PrismaQuestion[]>>;
  currentAnsweringForm: string;
  setCurrentAnsweringForm: Dispatch<SetStateAction<string>>;
  isAdmin: boolean;
}) {
  const { name, question: questionState, createdAt, answer } = question;

  const [isAnswering, setIsAnswering] = useState(false);

  useEffect(() => {
    if (currentAnsweringForm !== question.id) setIsAnswering(false);
  }, [currentAnsweringForm, question.id]);

  return (
    <li className="space-y-2">
      <div className="flex gap-x-2 items-start">
        <UserImage name={name} />
        <div>
          <Name name={name} />
          <div>
            <QuestionDescription questionState={questionState} />
            <CreatedAt createdAt={createdAt} />{" "}
            <DeleteQuestion
              question={question}
              setQuestionsState={setQuestionsState}
              isAdmin={isAdmin}
            />{" "}
            <Reply
              question={question}
              setCurrentAnsweringForm={setCurrentAnsweringForm}
              setIsAnswering={setIsAnswering}
              isAdmin={isAdmin}
            />
          </div>
        </div>
      </div>
      {answer && (
        <Answer
          answer={answer}
          setCurrentAnsweringForm={setCurrentAnsweringForm}
          currentAnsweringForm={currentAnsweringForm}
          setQuestionsState={setQuestionsState}
          isAdmin={isAdmin}
          question={question}
        />
      )}
      <AnswerForm
        question={question}
        setQuestionsState={setQuestionsState}
        isAnswering={isAnswering}
        currentAnsweringForm={currentAnsweringForm}
      />
    </li>
  );
}

export default Question;
