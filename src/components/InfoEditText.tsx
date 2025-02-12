"use client";

import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";

type Props = {
  icon: string;
  infoText: string;
  canEdit?: boolean;
};

function InfoEditText({ icon, infoText, canEdit }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex gap-1 items-center my-2">
      <FeatherIcon className="text-secondary" icon={icon} size={20} />
      <p className="text-gray-500">{infoText}</p>
      {canEdit && (
        <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
          <FeatherIcon className="text-yellow-300" icon="edit-3" size={18} />
        </Button>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-gray-200">
          <ModalHeader>Editar campo</ModalHeader>
          <ModalBody>
            <Input />
          </ModalBody>
          <ModalFooter>
            <Button className="text-black font-semibold" color="secondary">
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default InfoEditText;
