"use client";

import { FC } from "react";

//* Type definitions
interface IImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

//* Dependency Library imports

//* Component dependencies
import Modal from "@/app/components/Modal";
import Image from "next/image";

//* Redux

//* Configurations

const ImageModal: FC<IImageModalProps> = ({ isOpen, onClose, src }) => {
  //* Hooks

  //* Props

  //* State

  //* Effects

  //* Functions
  if (!src) return null;

  //* Render

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image className="object-cover" fill alt="Image" src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
