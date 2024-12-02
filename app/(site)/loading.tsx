"use client";

import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

export default function loading() {
  return (
    <Box className="flex items-center justify-center h-full">
      <BounceLoader size={40} color="#6366f1" />
    </Box>
  );
}
