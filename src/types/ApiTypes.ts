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
  category_line_item: number;
};
