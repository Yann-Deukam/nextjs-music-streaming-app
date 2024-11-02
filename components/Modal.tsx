import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}: ModalProps) => {
  return (
    <Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <DialogOverlay className="bg-neutral-900/10 backdrop-blur-md fixed inset-0" />
      <DialogContent className="fixed drop-shadow-md border border-neutral-700  top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-x-[450px]  rounded bg-neutral-800 p-6 focus:outline-none  text-white ">
        <DialogTitle className="text-xl text-center font-bold mb-4">
          {title}
        </DialogTitle>
        <DialogDescription className="text-sm text-center leading-normal mb-4 text-[#5154f1]">
          {description}
        </DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
