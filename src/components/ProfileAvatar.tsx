"use client";
import {
  Avatar,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

function ProfileAvatar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Avatar
        isBordered
        className="w-28 h-28"
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