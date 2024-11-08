import { Play } from "lucide-react";
import React from "react";

const PlayButton = () => {
  return (
    <button className="transition opacity-0 rounded-full bg-indigo-500 p-4 drop-shadow-md translate translate-y1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
      <span className="text-black">
        <Play fill="black" />
      </span>
    </button>
  );
};

export default PlayButton;
