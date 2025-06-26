import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Link, useLocation } from "react-router";
import FumikaLogo from "~/components/logo.tsx";
import { navTargets } from "~/navigation.ts";

function FumikaNavbarItem({
  children,
  isSelected,
  to,
}: {
  children: React.ReactNode;
  isSelected: boolean;
  to: string;
}) {
  return (
    <NavbarItem isActive={isSelected}>
      <Link className={`${isSelected ? "text-primary-500 underline text-lg font-medium" : "text-foreground"}`} to={to}>
        {children}
      </Link>
    </NavbarItem>
  );
}

export default function FumikaNavbar() {
  const location = useLocation();

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <FumikaLogo />
          <p className="font-bold text-inherit pl-1">遥远的星辰</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navTargets.map((target) => (
            <FumikaNavbarItem key={target.href} isSelected={location.pathname === target.href} to={target.href}>
              {target.title}
            </FumikaNavbarItem>
          ))}
        </NavbarContent>
      </Navbar>
    </>
  );
}
