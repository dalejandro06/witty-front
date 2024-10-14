import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type FetchStatus = "idle" | "loading" | "error";

export interface SupplierUser {
  id: number;
  state: number;
  city: number;
  supplier_name: string;
  complete_owner_name: string;
  email: string;
  phone_number: string;
  physical_address: string;
  web_page: string | null;
  facebook_page: string | null;
  instagram_page: string | null;
  type_business: number;
}
