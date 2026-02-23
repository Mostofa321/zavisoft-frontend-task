import React, { FC } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Typography } from "../typography/typography";
import ChevronDownIcon from "../assets/ChevronDownIcon";
import SearchIcon from "../assets/SearchIcon";
import UserIcon from "../assets/UserIcon";

const Navbar: FC = () => {
  return (
    <div className="px-4 lg:px-8 pt-[32px] pb-6">
      {/* Navigation Container */}
      <nav className="max-w-[1320px] mx-auto flex w-full  items-center justify-between rounded-[12px] lg:rounded-[24px] bg-white p-4 lg:p-[32px]">
        {/* ========================================== */}
        {/* LEFT SECTION */}
        {/* ========================================== */}

        {/* Desktop Left: Navigation Links */}
        <div className="hidden flex-1 items-center gap-10 lg:flex">
          <Link href="#" className="flex items-center gap-1">
            <Typography variant="rubik-base">New Drops</Typography>
            <Image src="/fire.png" alt="Fire Icon" width={16} height={16} />
          </Link>
          <Link href="#" className="flex items-center gap-1">
            <Typography variant="rubik-base">Men</Typography>
            <ChevronDownIcon />
          </Link>
          <Link href="#" className="flex items-center gap-1">
            <Typography variant="rubik-base">Women</Typography>
            <ChevronDownIcon />
          </Link>
        </div>

        {/* Mobile Left: Hamburger Menu */}
        <div className="flex flex-1 items-center lg:hidden">
          <button
            aria-label="Open Menu"
            className="text-[#111111] hover:text-gray-600"
          >
            <Menu className="h-5 w-5 stroke-[2.5]" />
          </button>
        </div>

        {/* ========================================== */}
        {/* CENTER SECTION: LOGO */}
        {/* ========================================== */}

        <div className="flex justify-center">
          <Link
            href="/"
            className="text-4xl font-black tracking-tighter text-[#1a1a1a] md:text-5xl"
            style={{ fontFamily: "Arial Black, Impact, sans-serif" }}
          >
            <Image src="/logo.png" alt="Logo" width={128} height={32} className="w-20 h-5 lg:w-32 lg:h-8" />
          </Link>
        </div>

        {/* ========================================== */}
        {/* RIGHT SECTION: ACTIONS */}
        {/* ========================================== */}

        <div className="flex flex-1 items-center justify-end gap-5 md:gap-6">
          {/* Search (Hidden on Mobile) */}
          <button
            aria-label="Search"
            className="hidden  lg:block w-5.5 h-5.5"
          >
            <SearchIcon className="w-full h-full" />
          </button>

          {/* User Profile (Visible on both) */}
          <button
            aria-label="User Profile"
            className="w-3.25 h-3.5 lg:w-5 lg:h-5"
          >
            <UserIcon className="w-full h-full" />
          </button>

          {/* Shopping Cart Badge (Visible on both) */}
          <button
            aria-label="Cart"
            className="flex h-5 w-5 lg:h-8 lg:w-8 items-center justify-center rounded-full bg-yellow text-[14px] lg:text-[16px] font-open-sans font-semibold text-dark-gray transition-transform hover:scale-105"
          >
            0
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
