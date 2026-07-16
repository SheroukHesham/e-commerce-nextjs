"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Heart, LucideMenu, Search, VanIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NavbarAvatar from "./NavbarAvatar";
import { useAppSelector } from "@/app/lib/hooks";
import { CartDrawer } from "./CartDrawer";

interface INavItem {
  label: string;
  href: string;
}

const navItems: INavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/" },
  { label: "Categories", href: "/" },
];

const Navbar = ({ className }: { className?: string }) => {
  const token = useAppSelector((state) => state.user.jwt);
  const cart = useAppSelector((state) => state.cart.cartProducts);

  const [active, setActive] = useState<number>(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {}, []);

  const renderNavItems = navItems.map((item, idx) => {
    return (
      <Link
        key={idx}
        href={item.href}
        className={`font-semibold border-b-2 duration-200 ease-in ${active === idx ? "border-b-primary" : "border-b-transparent"}`}
        onClick={() => setActive(idx)}
      >
        {item.label}
      </Link>
    );
  });

  const renderRightSide = () => {
    return (
      <>
        {/* right */}
        <div className="flex justify-center items-center gap-5 ">
          <Search
            aria-hidden="true"
            className="size-5"
            opacity={0.9}
            cursor={"pointer"}
          />
          <Heart
            aria-hidden="true"
            className="size-5"
            opacity={0.9}
            cursor={"pointer"}
          />
          <CartDrawer cart={cart} />

          {token ? (
            <NavbarAvatar />
          ) : (
            <Link
              href={"/login"}
              className="font-semibold text-primary cursor-pointer border-b-2 border-transparent ease-in-out duration-300 hover:border-b-primary"
            >
              Login
            </Link>
          )}
        </div>
      </>
    );
  };

  return (
    <div className={`py-3 px-6 mb-2 w-full ${className}`}>
      {/* Small Screens and above */}
      <div className="hidden sm:flex items-center justify-between">
        <div className="flex  gap-3">
          <ModeToggle />
          <VanIcon />
        </div>

        <div className="w-full">
          <div className="flex gap-6 justify-center max-w-5xls">
            {renderNavItems}
          </div>
        </div>

        {renderRightSide()}
      </div>

      {/* Mobile Screens */}
      <div className="sm:hidden flex items-center justify-between ">
        <LucideMenu
          className="cursor-pointer"
          onClick={() => setMobileMenu((prev) => !prev)}
        />
        <Image
          alt="logo"
          src="/vercel.svg"
          width={25}
          height={25}
          color="#27582e"
        />
        {renderRightSide()}
      </div>

      {/* Mobile Navbar */}
      <div
        className={`sm:hidden mt-2 flex flex-col justify-center items-center   rounded-md gap-y-3 ease-in-out overflow-hidden duration-400 ${mobileMenu ? "py-3 h-fit border-2" : "h-0 py-0 border-transparent"}`}
      >
        {renderNavItems}
      </div>
    </div>
  );
};

export default Navbar;
