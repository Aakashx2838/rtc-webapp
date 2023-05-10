import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();

    const { name, image } = body;

    if (!currentUser?.id || !currentUser?.email)
      return new NextResponse("Unauthorized", { status: 401 });

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        image,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (e: any) {
    console.log("e", e);
    return new NextResponse(e.message, { status: 500 });
  }
}
