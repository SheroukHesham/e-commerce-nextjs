"use client";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import {
  Heart,
  LucideMenu,
  Search,
  User,
  UserCog,
  VanIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NavbarAvatar from "./NavbarAvatar";
import { useAppSelector } from "@/app/lib/hooks";
import { CartDrawer } from "./CartDrawer";
import { Nav_Items } from "@/data";
import HeaderImage from "@/assets/Meubel House_Logos-05.svg";

const Navbar = ({ className }: { className?: string }) => {
  const token = useAppSelector((state) => state.user.jwt);
  const cart = useAppSelector((state) => state.cart.cartProducts);

  const [active, setActive] = useState<number>(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {}, []);

  const renderNavItems = Nav_Items.map((item, idx) => {
    return (
      <Link
        key={idx}
        href={item.href}
        className={`font-medium border-b-2 duration-200 ease-in ${active === idx ? "border-b-section-foreground" : "border-b-transparent"}`}
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
        <div className="flex justify-center items-center gap-10 ">
          {token ? (
            <User />
          ) : (
            <UserCog
              aria-hidden="true"
              className="size-6"
              opacity={0.9}
              cursor={"pointer"}
            />
          )}
          <Search
            aria-hidden="true"
            className="size-6"
            opacity={0.9}
            cursor={"pointer"}
          />
          <Heart
            aria-hidden="true"
            className="size-6"
            opacity={0.9}
            cursor={"pointer"}
          />
          <CartDrawer cart={cart} />
        </div>
      </>
    );
  };

  return (
    <div className={`py-3 px-10 md:px-30 mb-2 w-full ${className}`}>
      {/* Small Screens and above */}
      <div className="hidden sm:flex items-center  justify-between">
        <div className="flex gap-1 items-center min-w-fit ">
          <Image width={50} height={32} alt="" src={HeaderImage} />
          <h3 className="font-bold text-3xl">Funiro</h3>
        </div>

        <div className="  flex gap-15 justify-center w-full">
          {renderNavItems}
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
          src={HeaderImage}
          width={25}
          height={25}
          color="#27582e"
        />
        {renderRightSide()}
      </div>

      {/* Mobile Navbar */}
      <div
        className={` sm:hidden mt-2 flex flex-col justify-center items-center   rounded-md gap-y-3 ease-in-out overflow-hidden duration-400 ${mobileMenu ? "py-3 h-fit border-2" : "h-0 py-0 border-transparent"}`}
      >
        {renderNavItems}
      </div>
    </div>
  );
};

export default Navbar;
