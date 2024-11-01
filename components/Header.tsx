"use client";

import { ChevronLeft, ChevronRight, Home, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();

  const handleLogout = () => {
    //handle logout
  };
  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-indigo-700 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <span className="text-black ">
              <Home size={20} />
            </span>
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <span className="text-black ">
              <Search size={20} />
            </span>
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="
                bg-transparent
                text-neutral-200
                font-medium
              "
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {}}
                className="
                bg-white
               px-6
               py-2
              "
              >
                Login
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
