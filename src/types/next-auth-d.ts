import { DefaultSession } from "next-auth";
// eslint-disable-next-line unused-imports/no-unused-imports, @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      token: string;
      refreshToken: string;
      name: string;
      email: string;
      firstName: string;
      lastName: string;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    token: string;
    refreshToken: string;
    name?: string | null;
    email?: string | null;
    firstName: string;
    lastName: string;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    token: string;
    refreshToken: string;
    name?: string | null;
    email?: string | null;
    firstName: string;
    lastName: string;
  }
}
