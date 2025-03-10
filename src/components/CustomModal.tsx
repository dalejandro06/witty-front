"use client";

import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalProps,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { ReactNode } from "react";

type LocalModalProps = {
  title?: string;
  body?: string | ReactNode;
  isOpen: boolean;
  modalProps?: Partial<ModalProps>;
  footerClass?: string;
  onOpenChange: () => void;
  cancelButton?: {
    text: string;
  } & ButtonProps;
  confirmButton: {
    text: string;
  } & ButtonProps;
};

function CustomModal({
  title,
  body,
  cancelButton,
  isOpen,
  onOpenChange,
  confirmButton,
  modalProps,
  footerClass,
}: LocalModalProps) {
  return (
    <Modal
      {...modalProps}
      backdrop={modalProps?.backdrop || "blur"}
      isOpen={isOpen}
      placement={modalProps?.placement || "center"}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-center gap-1 text-secondary-blue">
              {title}
            </ModalHeader>
            <ModalBody>{body}</ModalBody>
            <ModalFooter className={footerClass}>
              <Button
                variant="bordered"
                {...cancelButton}
                onPress={cancelButton?.onPress || onClose}
              >
                {cancelButton?.text || "Cancelar"}
              </Button>
              <Button {...confirmButton}>
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
