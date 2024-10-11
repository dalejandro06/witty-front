export const EXTERNAL_API_BASE = "https://api.trywitty.co/api";
export const INTERNAL_API_BASE = process.env.NEXT_PUBLIC_URL;

export const navigationItems = [
  {
    id: 1,
    href: "/supplier",
    icon: "home",
  },
  {
    id: 2,
    href: "/calendar",
    icon: "calendar",
  },
  {
    id: 3,
    href: "/services",
    icon: "briefcase",
  },
  {
    id: 4,
    href: "/location/saved-locations",
    icon: "map-pin",
  },
  {
    id: 5,
    href: "/profile",
    icon: "user",
  },
];
