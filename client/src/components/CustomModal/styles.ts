import styled from "styled-components";
import { IStyledProps } from "./types";

export const ModalOverlay = styled.div<IStyledProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;

  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalWrapper = styled.div<IStyledProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.625rem;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.custom};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.625rem;
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.fontSizes.xl};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ModalCloseButton = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  transition: color 0.2s ease-in-out;
  margin-left: auto;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
  }
`;
