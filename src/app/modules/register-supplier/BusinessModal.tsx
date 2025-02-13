import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from "@heroui/react";

function BusinessModal({ isOpen, onOpenChange }: Omit<ModalProps, "children">) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              ¿Cuál es tu tipo de negocio?
            </ModalHeader>
            <ModalBody>
              <div>
                <p>Persona natural</p>
                <p>
                  Es cualquier persona como tú, con derechos y
                  responsabilidades, que toma decisiones y actúa en su propio
                  nombre.
                </p>
              </div>
              <div>
                <p>Sociedad</p>
                <p>
                  Es un grupo de personas que se unen para lograr un objetivo
                  compartido, ya sea en una comunidad o detrás de una marca.
                </p>
              </div>
              <div>
                <p>Empresa</p>
                <p>
                  Es una entidad formada por una o más personas que trabajan
                  juntas para ofrecer productos o servicios, siempre con el
                  objetivo de generar valor y crecer.{" "}
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="text-black font-semibold"
                color="secondary"
                onPress={onClose}
              >
                Entendido
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default BusinessModal;
