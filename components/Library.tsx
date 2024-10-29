import { ListMusic, Plus } from "lucide-react";
import React from "react";

const Library = () => {
  const onClick = () => {
    //Handle upload later
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
      <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
    </div>
  );
};

export default Library;
