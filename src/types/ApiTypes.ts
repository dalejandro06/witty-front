export type SubCategoriesParams = {
  category_line_item: number;
};

export type RegisterParams = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

export type Register = {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type Category = {
  color: string;
  icon: string;
  id: number;
  title: string;
};

export type SubCategory = {
  id: number;
  total_services: number;
  title: string;
  description: string;
  category_line_item: Category;
};

export type ForgotPassword = {
  email: string;
};

// GEOLOCATIONS
export interface Departaments {
  id: number;
  name: string;
}

export type RegisterSupplierParams = {
  user: string;
  state: string;
  city: string;
  supplier_name: string;
  complete_owner_name: string;
  email: string;
  phone_number: string;
  physical_address: string;
  web_page: string;
  type_business: string;
};

export interface RegisterSupplierResponse {
  id: number;
  user: number;
  state: number;
  city: number;
  supplier_name: string;
  complete_owner_name: string;
  email: string;
  phone_number: string;
  physical_address: string;
  web_page: string;
  facebook_page: null;
  instagram_page: null;
  type_business: number;
}

export type HomeSupplierMetrics = {
  locations: number;
  services: number;
  onboarding_completed: boolean;
  supplier_photo: boolean;
  date_onboarding_completed: Date;
};
