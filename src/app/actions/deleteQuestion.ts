"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../libs/prisma";
import { Question } from "@prisma/client";

export const deleteQuestion = async (
  id: string
): Promise<{ status: "success" | "fail" | "error"; data?: Question }> => {
  try {
    const user = await currentUser();
    if (!user) return { status: "fail" };

    const isAdmin = user?.emailAddresses[0].emailAddress === process.env.ADMIN;

    if (!isAdmin) return { status: "fail" };

    const data = await prisma.question.delete({ where: { id } });

    if (!data) return { status: "fail" };

    return { status: "success", data };
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }
};
