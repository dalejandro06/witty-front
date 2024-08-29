import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
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
    id: number;
    token: string;
    refreshToken: string;
    name: string;
    email: string;
    firstName: string;
    lastName: string;
  }
}
