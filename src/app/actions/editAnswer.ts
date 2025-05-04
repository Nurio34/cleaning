"use server";

import { currentUser } from "@clerk/nextjs/server";
import validator from "validator";
import { prisma } from "../libs/prisma";
import { Answer } from "@prisma/client";

export const editAnswer = async (
  editedAnswer: string,
  questionId: string
): Promise<{ status: "success" | "fail" | "error"; data?: Answer }> => {
  try {
    const user = await currentUser();
    if (!user) return { status: "fail" };

    const isAdmin = user.emailAddresses[0].emailAddress === process.env.ADMIN;

    if (!isAdmin) return { status: "fail" };

    const sanitizedAnswer = validator.escape(editedAnswer);

    const data = await prisma.answer.update({
      where: { questionId },
      data: { description: sanitizedAnswer },
    });

    if (!data) return { status: "fail" };

    return { status: "success", data };
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
};
