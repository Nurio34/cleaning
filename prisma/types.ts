import { Answer, Question } from "@prisma/client";

export type PrismaQuestion = Question & {
  answer: Answer | null;
};
