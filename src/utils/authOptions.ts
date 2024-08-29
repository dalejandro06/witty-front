import Credentials from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";

import { EXTERNAL_API_BASE } from "../config/config";

import { NEXTAUTH_SECRET } from "@/utils/getEnv";

export const authOptions: AuthOptions = {
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
  secret: NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
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
          refreshToken: data.refresh,
          name: data.user.username,
          email: data.user.email,
          firstName: data.user.first_name,
          lastName: data.user.last_name,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          id: user.id,
          token: user.token,
          refreshToken: user.refreshToken,
          name: user.name,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      }

      return token;
    },
    session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.id,
          token: token.token,
          refreshToken: token.refreshToken,
          name: token.name,
          firstName: token.firstName,
          lastName: token.lastName,
          email: token.email,
        },
      };
    },
  },
  pages: {
    signIn: "/login",
  },
};
