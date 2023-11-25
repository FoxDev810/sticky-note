import { CustomModal } from "../../../../components/CustomModal";
import { IConfirmModalProps } from "../../types";

export const ConfirmModal = ({
  isModalOpen,
  handleModalOpen,
  onConfirm,
}: IConfirmModalProps) => {
  return (
    <CustomModal
      isOpen={isModalOpen}
      onClose={handleModalOpen}
      onConfirm={() => {
        onConfirm();
        handleModalOpen();
      }}
      title="Are you sure?"
      confirmText="Delete"
      cancelText="Cancel"
      footer={true}
      closable={true}
    />
  );
};
