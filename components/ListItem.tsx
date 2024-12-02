"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem = ({ image, name, href }: ListItemProps) => {
  const router = useRouter();

  const onClick = () => {
    // add notification for push
    router.push(href);
  };
  return (
    <button
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
      onClick={onClick}
    >
      <div className="relative min-h-[64px] min-w-[64px] ">
        <Image className="object-cover" fill src={image} alt="image" />
      </div>
      <p className="font-bold text-lg truncate py-5">{name}</p>
      <div
        className="
      absolute
      transition
      opacity-0
      rounded-full
      flex
      items-center
      justify-center
      bg-indigo-500
      p-2
      drop-shadow-md
      right-5
      group-hover:opacity-100
      hover:scale-105
      "
      >
        <span className="text-black">
          <Play fill="black" />
        </span>
      </div>
    </button>
  );
};

export default ListItem;
