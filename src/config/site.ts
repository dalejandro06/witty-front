export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Witty App",
  description:
    "Busca, ofrece, agenda servicios de otras personas, en un solo lugar!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Ingresar",
      href: "/login",
    },
  ],
  navMenuItems: [
    {
      label: "Ingresar",
      href: "/login",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};
