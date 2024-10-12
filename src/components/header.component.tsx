import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid className="bg-slate-400">
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          I am Kamal
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink target="_blank" href="https://this.jeldikk.me">
          Resume
        </NavbarLink>
        <NavbarLink target="_blank" href="https://blog.jeldikk.me">
          Writings
        </NavbarLink>
        {/*
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink> */}
      </NavbarCollapse>
    </Navbar>
  );
}
