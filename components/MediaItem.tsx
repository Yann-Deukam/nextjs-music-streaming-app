import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/type";
import Image from "next/image";
import React from "react";

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

export default function MediaItem({ data, onClick }: MediaItemProps) {
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    //TODO: turn on music player
  };
  return (
    <div className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 transition-all ease-in-out duration-150 w-full p-2 rounded-sm">
      <div className="relative rounded-md min-h-12 min-w-12 overflow-hidden">
        <Image
          fill
          src={imageUrl || "/images/liked.png"}
          alt="media item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 verflow:hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-300  text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
}
