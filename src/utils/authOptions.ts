import Credentials from "next-auth/providers/credentials";

import { EXTERNAL_API_BASE } from "../config/config";

import { NEXTAUTH_SECRET } from "@/utils/getEnv";

export const authOptions = {
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
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
        const { email, password } = credentials;
        const url = `${EXTERNAL_API_BASE}/v1/accounts/get-token-user/`;
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!res.ok) {
          throw new Error("Credenciales inválidas");
        }
        const data = await res.json();

        return {
          id: data.user.id,
          token: data.access,
          username: data.user.username,
          email: data.user.email,
          first_name: data.user.first_name,
          last_name: data.user.last_name,
        };
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/login",
  },
};
