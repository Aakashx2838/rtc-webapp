import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";
import { Session } from "next-auth";

const getCurrentUser = async () => {
  try {
    const session = await getSession();

    if (!session) return null;

    if (!session?.user?.email) return null;

    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });

    if (!currentUser) return null;

    return currentUser;
  } catch (e: any) {
    return null;
  }
};

export default getCurrentUser;
