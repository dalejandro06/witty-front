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

export type SupplierLocation = {
  id: number;
  state: State;
  city: State;
  status: boolean;
  available_all_services: boolean;
  supplier_profile: number;
};
export type State = { id: number; name: string };

export type AddLocationParams = {
  state_id: number;
  city_id: number;
  supplier_profile_id?: number;
  status: boolean;
  available_all_services: boolean;
};

export type EditLocationParams = {
  locationId: number;
} & AddLocationParams;

export interface UserData {
  id: number;
  image_supplier: string;
  profile_description: string;
  state: Departaments;
  city: Departaments;
  supplier_name: string;
  complete_owner_name: string;
  email: string;
  phone_number: string;
  physical_address: string;
  web_page: string;
  facebook_page: string;
  instagram_page: string;
  type_business: number;
}

export interface UpdateDataParams {
  user_id: string | number;
  image_supplier?: Blob | null;
  profile_description: string;
  email: string;
  phone_number: string;
  state_id: number;
  city_id: number;
  physical_address: string;
  web_page?: string;
  facebook_page?: string;
  instagram_page?: string;
}

export interface UpdatePasswordParams {
  old_password: string;
  new_password: string;
}

export type StatusResponse = {
  status: boolean;
  message?: string;
};

export type SupplierServiceInfo = {
  id: number;
  name: string;
  description: string;
  category: {
    id: number;
    category_line_item: Category;
    title: string;
    description: string;
  };
  costs: ServiceCosts[];
  allowed_locations: Departaments[];
  active: boolean;
  deleted_by_user: boolean;
  supplier_profile: number;
};

export type ServiceCosts = {
  id: number;
  emoji: string;
  name: string;
  value: number;
  type_duration: number;
  duration: number;
  service: number;
  currency: number;
};
