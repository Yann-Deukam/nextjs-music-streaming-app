import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/type";
import { ListMusic, Plus } from "lucide-react";
import React from "react";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps {
  songs: Song[];
}

const Library = ({ songs }: LibraryProps) => {
  const authModal = useAuthModal();
  const { user } = useUser();
  const onPlay = useOnPlay(songs);
  const uploadModal = useUploadModal();
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    //TODO: Check for subscription
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <ListMusic size={26} color="#a3a3a3" />
          <p className="text-neutral-400 font-bold text-md">Your Library</p>
        </div>
        <span className="text-neutral-400 cursor-pointer hover:text-white transition">
          <Plus onClick={onClick} size={20} />
        </span>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3 text-white">
        {songs.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
