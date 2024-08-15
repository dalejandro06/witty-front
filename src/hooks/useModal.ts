import { useState } from "react";

export const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  const handleShowModal = (e: MouseEvent) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  return {
    modalOpen,
    setModalOpen,
    handleShowModal,
    loadingModal,
    setLoadingModal,
  };
};
