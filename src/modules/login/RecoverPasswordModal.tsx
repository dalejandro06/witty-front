"use client";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

function RecoverPasswordModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <p className="text-center">
        ¿Olvidaste tu contraseña?{" "}
        <Link className="font-bold" onPress={onOpen}>
          Recupérala
        </Link>
      </p>

      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center gap-1 text-secondary-blue">
                Recupera tu contraseña
              </ModalHeader>
              <ModalBody>
                <p>
                  Enviaremos una link al correo{" "}
                  <strong className="text-secondary-blue">
                    wittyapp@example.com
                  </strong>{" "}
                  para que puedas restablecer tu contraseña.
                </p>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button
                  fullWidth
                  color="primary"
                  size="lg"
                  variant="bordered"
                  onPress={onClose}
                >
                  Cancelar
                </Button>
                <Button fullWidth color="primary" size="lg" onPress={onClose}>
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default RecoverPasswordModal;
