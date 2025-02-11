"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Session } from "next-auth";

import LogoWhite from "@/assets/logo-white.svg";

type Props = {
  session: Session | null;
  showButton?: boolean;
};

const Navbar = ({ session, showButton = true }: Props) => {
  return (
    <NextUINavbar
      className="h-[70px] bg-primary-blue"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image alt="Logo Navbar" src={LogoWhite} />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      {showButton && (
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          {/* <ThemeSwitch /> */}
          {session && session.user ? (
            session.user.supplier ? (
              <Button
                as={Link}
                className="text-black font-bold"
                color="secondary"
                href="/services/create"
              >
                Nuevo Servicio
              </Button>
            ) : (
              <Button
                as={Link}
                className="text-black font-bold"
                color="secondary"
                href="/search-services"
              >
                Buscar un servicio
              </Button>
            )
          ) : (
            <Button
              as={Link}
              className="font-bold text-black"
              color="secondary"
              href="/welcome"
            >
              Accede
            </Button>
          )}
        </NavbarContent>
      )}
    </NextUINavbar>
  );
};

export default Navbar;
