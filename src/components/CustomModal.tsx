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
  onConfirmBtn: () => void;
  cancelBtnText?: string;
  confirmBtnText?: string;
  isOpen: boolean;
  onOpenChange: () => void;
};

function CustomModal({
  title,
  body,
  onCancelBtn,
  onConfirmBtn,
  cancelBtnText,
  confirmBtnText,
  isOpen,
  onOpenChange,
}: ModalProps) {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      placement="bottom"
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
                size="md"
                onPress={onConfirmBtn || onclose}
              >
                {confirmBtnText || "Enviar"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;
