import { DefaultSession } from "next-auth";
// eslint-disable-next-line unused-imports/no-unused-imports, @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

import { SupplierUser } from ".";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      token: string;
      refreshToken: string;
      username: string;
      email: string;
      firstName: string;
      lastName: string;
      supplier?: SupplierUser | null;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    token: string;
    refreshToken: string;
    username?: string | null;
    email?: string | null;
    firstName: string;
    lastName: string;
    supplier?: SupplierUser | null;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    token: string;
    refreshToken: string;
    username?: string | null;
    email?: string | null;
    firstName: string;
    lastName: string;
    supplier?: SupplierUser | null;
  }
}
