"use server";

import { prisma } from "../libs/prisma";
import { PrismaQuestion } from "../../../prisma/types";

export const getQuestions = async (
  skip: number,
  skipNewQuestion: number
): Promise<{
  status: "success" | "fail" | "error";
  questions?: PrismaQuestion[];
}> => {
  try {
    const questions = await prisma.question.findMany({
      take: 5,
      skip: 5 * skip + skipNewQuestion,
      orderBy: {
        createdAt: "desc",
      },
      include: { answer: true },
    });
    if (!questions) return { status: "fail" };

    return { status: "success", questions };
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
};
