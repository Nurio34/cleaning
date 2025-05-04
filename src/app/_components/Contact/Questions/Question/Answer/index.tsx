import { Answer as AnswerType } from "@prisma/client";
import { PrismaQuestion } from "../../../../../../../prisma/types";
import AdminImage from "./AdminImage";
import CreatedAt from "../CreatedAt";
import Description from "./Description";
import EditAnswer from "./EditAswer";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import AdminName from "./AdminName";
import EditForm from "./EditForm";

function Answer({
  answer,
  setCurrentAnsweringForm,
  currentAnsweringForm,
  setQuestionsState,
  isAdmin,
  question,
}: {
  answer: AnswerType;
  setCurrentAnsweringForm: Dispatch<SetStateAction<string>>;
  currentAnsweringForm: string;
  setQuestionsState: Dispatch<SetStateAction<PrismaQuestion[]>>;
  isAdmin: boolean;
  question: PrismaQuestion;
}) {
  const { description, createdAt, questionId } = answer; // Destructure safely

  const [isEditing, setIsEditing] = useState(false);
  const [descriptionState, setDescriptionState] = useState(description);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentAnsweringForm !== questionId) setIsEditing(false);
  }, [currentAnsweringForm, questionId]);

  return (
    <div className="space-y-2">
      <div className="flex gap-x-2 items-start pl-10">
        <AdminImage />
        <div>
          <AdminName />
          <Description description={description} />
          <CreatedAt createdAt={createdAt} />{" "}
          <EditAnswer
            setIsEditing={setIsEditing}
            setCurrentAnsweringForm={setCurrentAnsweringForm}
            questionId={questionId}
            isAdmin={isAdmin}
          />
        </div>
      </div>
      <EditForm
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        currentAnsweringForm={currentAnsweringForm}
        questionId={questionId}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        descriptionState={descriptionState}
        setDescriptionState={setDescriptionState}
        setQuestionsState={setQuestionsState}
        question={question}
      />
    </div>
  );
}
export default Answer;
