export const EXTERNAL_API_BASE = "https://api.trywitty.co/api";
export const INTERNAL_API_BASE = process.env.NEXT_PUBLIC_URL;

export const getNavigationItems = (isSupplier: boolean) => {
  const baseItems = [
    {
      id: 1,
      href: isSupplier ? "/supplier" : "/client",
      icon: "home",
    },
    {
      id: 2,
      href: "/calendar/",
      icon: "calendar",
    },
  ];
  const navigationSupplierItems = [
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

  const navigationClientItems = [
    {
      id: 4,
      href: "/search-services",
      icon: "search",
    },
    {
      id: 5,
      href: "/profile",
      icon: "user",
    },
  ];

  if (isSupplier) {
    return [...baseItems, ...navigationSupplierItems];
  }

  return [...baseItems, ...navigationClientItems];
};
