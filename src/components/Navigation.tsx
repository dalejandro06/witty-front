import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import FeatherIcon from "feather-icons-react";

import { getNavigationItems } from "@/config/config";
import { auth } from "@/auth";

async function Navigation() {
  const session = await auth();
  const navigationItems = getNavigationItems(
    Boolean(session?.user.supplier?.id),
  );

  return (
    <Navbar className="bg-navbar rounded-t-2xl h-full">
      <NavbarContent className="flex w-full" justify="center">
        {navigationItems.map((item) => (
          <NavbarItem key={item.id} className="w-full">
            <Button
              as={Link}
              className="px-0 mx-0 w-1/5 min-w-full"
              href={item.href}
              variant="light"
            >
              <FeatherIcon
                className="text-gray-400 stroke-[1.5px]"
                icon={item.icon}
              />
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}

export default Navigation;
