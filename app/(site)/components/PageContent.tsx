"use client";

interface PageContentProps {
  songs: Song[];
}

import { Song } from "@/type";
import React from "react";
import SongItem from "../../../components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";

const PageContent = ({ songs }: PageContentProps) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div className="flex items-center justify-center text-neutral-400 mt-5">
        No items found
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid:cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4 mt-4">
      {songs.map((item) => (
        <SongItem
          key={item.id}
          onClick={(id: string) => onPlay(id)}
          data={item}
        />
      ))}
    </div>
  );
};

export default PageContent;
