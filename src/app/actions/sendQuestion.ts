"use server";

import { prisma } from "../libs/prisma";
import { QuestionsFormSchema } from "../libs/zod";
import validator from "validator";
import { PrismaQuestion } from "../../../prisma/types";

export const sendQuestion = async (
  name: string,
  email: string,
  question: string,
  isKvkkChecked: boolean
): Promise<{
  status: "success" | "fail" | "error";
  errors?: { name?: string; question?: string; kvkk?: string };
  data?: PrismaQuestion;
}> => {
  try {
    const result = QuestionsFormSchema.safeParse({
      name,
      email,
      question,
      kvkk: isKvkkChecked,
    });

    if (!result.success) {
      const fieldErrors: {
        name?: string;
        email?: string;
        question?: string;
        kvkk?: string;
      } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "name") fieldErrors.name = err.message;
        if (err.path[0] === "email") fieldErrors.email = err.message;
        if (err.path[0] === "question") fieldErrors.question = err.message;
        if (err.path[0] === "kvkk") fieldErrors.kvkk = err.message;
      });

      return { status: "fail", errors: fieldErrors };
    }

    const {
      name: parsedName,
      email: parsedEmail,
      question: parsedQuestion,
    } = result.data;
    let sanitizedName = parsedName ? validator.escape(parsedName) : "";
    sanitizedName =
      sanitizedName?.trim() !== ""
        ? sanitizedName
        : `Guest-${new Date().getTime().toString().slice(-6)}`;
    const sanitizedEmail = parsedEmail
      ? validator.normalizeEmail(parsedEmail.trim()) || null
      : null;
    const sanitizedQuestion = validator.escape(parsedQuestion);

    const data = await prisma.question.create({
      data: {
        name: sanitizedName,
        email: sanitizedEmail,
        question: sanitizedQuestion,
      },
      include: { answer: true },
    });

    return { status: "success", data };
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
};
