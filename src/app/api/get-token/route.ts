import { auth } from "@/auth";

export async function GET() {
  const session = await auth();

  return Response.json({ token: session?.user.token });
}
