"use client";

import {
  Avatar,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";

type Props = {
  className?: string;
  isEdit?: boolean;
  file?: File | null;
  setFile?: (file?: File | null) => void;
};

function ProfileAvatar({ className, isEdit, setFile }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [image, setImage] = useState("");

  const handleImage = (item?: File | null) => {
    if (setFile && item) {
      setFile(item);
      setImage(URL.createObjectURL(item));
    }
  };

  if (isEdit && setFile) {
    return (
      <label className="absolute-from-grid">
        <Avatar
          isBordered
          className={`${className} `}
          classNames={{
            img: "w-40",
          }}
          color="success"
          src={image || "https://i.pravatar.cc/150?u=a04258114e29026302d"}
          onClick={onOpen}
        />
        <div className="w-full h-full bg-black bg-opacity-25 rounded-full flex justify-center items-center z-10">
          <FeatherIcon className="text-sky-400" icon="edit-2" />
        </div>
        <input
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
          name="profile"
          type="file"
          onChange={(e) => handleImage(e.target?.files?.item(0))}
        />
      </label>
    );
  }

  return (
    <div>
      <Avatar
        isBordered
        className={className}
        color="success"
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        onClick={onOpen}
      />
      <Modal
        hideCloseButton
        classNames={{
          base: "bg-transparent border-none shadow-none",
        }}
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              scale: 1,
            },
            exit: {
              scale: 0,
              opacity: 0,
            },
          },
        }}
        placement="center"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalBody className="grid place-items-center">
            <Image
              alt="Profile image"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ProfileAvatar;
