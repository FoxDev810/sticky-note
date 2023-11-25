import { CustomButton } from "../CustomButton";
import {
  ModalOverlay,
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "./styles";
import { IProps } from "./types";
import { IoClose } from "react-icons/io5";

export const CustomModal = ({
  isOpen = false,
  children,
  onClose,
  onConfirm,
  closable = true,
  title,
  footer,
  confirmText = "Save",
  cancelText = "Cancel",
}: IProps) => {
  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={closable ? onClose : () => null} />
      <ModalWrapper isOpen={isOpen}>
        <ModalContent>
          <ModalHeader>
            {title && <ModalTitle>{title}</ModalTitle>}
            {closable && (
              <ModalCloseButton>
                <IoClose onClick={onClose} size={25} />
              </ModalCloseButton>
            )}
          </ModalHeader>

          <ModalBody>{children}</ModalBody>

          {footer && (
            <ModalFooter>
              {closable && (
                <CustomButton
                  title={cancelText}
                  variant="outline"
                  onClick={onClose}
                />
              )}
              <CustomButton
                title={confirmText}
                variant="solid"
                type="submit"
                onClick={onConfirm}
              />
            </ModalFooter>
          )}
        </ModalContent>
      </ModalWrapper>
    </>
  );
}
