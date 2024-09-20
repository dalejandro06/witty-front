"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { ReactNode } from "react";

type ModalProps = {
  title: string;
  body: string | ReactNode;
  onCancelBtn?: () => void;
  cancelBtnText?: string;
  isOpen: boolean;
  placementent?:
    | "center"
    | "bottom"
    | "auto"
    | "top"
    | "top-center"
    | "bottom-center";
  onOpenChange: () => void;
  confirmButton: {
    text: string;
    type?: "button" | "reset" | "submit";
    form?: string;
    loading: boolean;
    onPress?: () => void;
  };
};

function CustomModal({
  title,
  body,
  onCancelBtn,
  cancelBtnText,
  isOpen,
  onOpenChange,
  confirmButton,
  placementent,
}: ModalProps) {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      placement={placementent || "bottom"}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-center gap-1 text-secondary-blue">
              {title}
            </ModalHeader>
            <ModalBody>{body}</ModalBody>
            <ModalFooter className="justify-end">
              <Button
                size="md"
                variant="bordered"
                onPress={onCancelBtn || onClose}
              >
                {cancelBtnText || "Cancelar"}
              </Button>
              <Button
                color="primary"
                form={confirmButton.form}
                isLoading={confirmButton.loading}
                size="md"
                type={confirmButton.type || "button"}
                onPress={confirmButton.onPress}
              >
                {confirmButton.text || "Enviar"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
