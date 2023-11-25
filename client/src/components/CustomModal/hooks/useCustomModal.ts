import { useState } from "react";

export function useCustomModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState<any>({});

  function handleModalOpen(props?: any) {
    if (props && !isModalOpen) {
      setModalProps(props);
    } else {
      setModalProps({});
    }
    setIsModalOpen(!isModalOpen);
  }

  return {
    isModalOpen,
    handleModalOpen,
    modalProps,
  };
}
