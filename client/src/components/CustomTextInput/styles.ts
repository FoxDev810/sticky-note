import styled from "styled-components";
import { IStyledProps } from "./types";

export const InputWrapper = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  margin: 0.8rem 0;

  label {
    font-size: ${({ size }) =>
      size === "small" ? "0.8rem" : size === "large" ? "1.2rem" : "1rem"};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 0.3rem;
  }

  input,
  textarea {
    font-family: ${({ theme }) => theme.fonts.primary};
    width: ${({ width }) => width || "auto"};
    padding: ${({ size }) =>
      size === "small"
        ? "0.3rem 0.5rem"
        : size === "large"
        ? "0.7rem 1rem"
        : "0.5rem 0.8rem"};
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background: #fff;
    font-size: ${({ size }) =>
      size === "small" ? "0.8rem" : size === "large" ? "1.2rem" : "1rem"};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${({ theme }) => theme.colors.black};
    }
  }
`;
