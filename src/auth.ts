import NextAuth from "next-auth";

import { authOptions } from "./utils/authOptions";

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authOptions);
