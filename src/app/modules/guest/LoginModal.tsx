import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

function LoginModal({ isOpen, onOpenChange }: Props) {
  return (
    <Modal
      backdrop="blur"
      className="py-6"
      isOpen={isOpen}
      placement="bottom"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-center text-secondary-blue">
              ¿Quieres descubrir todos los servicios disponibles?
            </ModalHeader>
            <ModalBody>
              <Button
                fullWidth
                as={Link}
                className="font-semibold text-black"
                color="secondary"
                href="/welcome"
                size="lg"
              >
                Accede
              </Button>
              <Button
                fullWidth
                className="font-semibold text-black"
                size="lg"
                variant="bordered"
                onPress={onClose}
              >
                Quedarme aquí
              </Button>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
