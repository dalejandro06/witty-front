import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

type Props = {
  isOpen: boolean | undefined;
  onOpenChange: () => void;
};

function RateModalHelp({ isOpen, onOpenChange }: Props) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              ¿Qué es una tarifa de servicio?
            </ModalHeader>
            <ModalBody>
              <p>
                Para comenzar a ofrecer este servicio, primero debes definir un
                costo inicial. Puedes establecer diferentes tarifas para
                diversos aspectos del servicio, como el tipo de sexo, el
                escenario, o cualquier otra variante que consideres relevante.
              </p>
              <p>
                Estas configuraciones te permitirán aplicar distintos cargos
                según las características específicas de cada servicio que
                ofrezcas.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                className="text-black"
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

export default RateModalHelp;
