import { currentUser } from "@clerk/nextjs/server";
import Client from "./Client";
import { prisma } from "@/app/libs/prisma";

async function Contact() {
  const user = await currentUser();
  const isAdmin = user?.emailAddresses[0].emailAddress === process.env.ADMIN;

  const totalQuestions = await prisma.question.count();

  return <Client isAdmin={isAdmin} totalQuestions={totalQuestions} />;
}
export default Contact;
