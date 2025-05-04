"use client";

import { useState } from "react";
import QuestionForm from "./QuestionForm";
import Questions from "./Questions";
import { PrismaQuestion } from "../../../../prisma/types";
import Title from "./Title";
import ContactComponent from "./ContactComponent";
import Or from "./Or";
import WhatsupComponent from "./WhatsupComponent";

function Client({
  isAdmin,
  totalQuestions,
}: {
  isAdmin: boolean;
  totalQuestions: number;
}) {
  const [newQuestion, setNewQuestion] = useState<PrismaQuestion>({
    name: "",
    email: "",
    question: "",
    id: "",
    createdAt: new Date(),
    answer: null,
  });

  return (
    <section
      id="iletişim"
      className="min-h-screen lg:flex flex-col items-center gap-y-4"
    >
      <Title />
      <QuestionForm setNewQuestion={setNewQuestion} />
      <Questions
        newQuestion={newQuestion}
        isAdmin={isAdmin}
        totalQuestions={totalQuestions}
      />
      <ContactComponent />
      <Or />
      <WhatsupComponent />
    </section>
  );
}
export default Client;
