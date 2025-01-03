import { NextResponse } from "next/server";

import { auth } from "@/auth";

export const GET = auth(function GET(req) {
  if (req.auth) return NextResponse.json({ token: req.auth.user.token });

  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
