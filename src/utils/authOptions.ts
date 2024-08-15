import Credentials from "next-auth/providers/credentials";

import { NEXTAUTH_SECRET } from "@/src/utils/getEnv";

export const authOptions = {
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        // TODO: revisar
        maxAge: 3600,
        secure: true,
      },
    },
  },
  sesion: {
    strategy: "jwt",
    maxAge: 3600,
  },
  secret: NEXTAUTH_SECRET,
  providers: [
    Credentials({
      type: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        return credentials;
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/login",
  },
};
