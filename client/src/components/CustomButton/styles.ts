import styled from "styled-components";
import { IStyledProps } from "./types";

export const ButtonWrapper = styled.div<IStyledProps>`
  display: flex;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    background: ${({ disabled, variant, theme }) =>
      disabled
        ? variant === "solid"
          ? theme.colors.grey
          : theme.colors.white
        : variant === "solid"
        ? theme.colors.gray
        : theme.colors.white};
    border: 0.0625rem solid
      ${({ disabled, theme }) =>
        disabled ? theme.colors.grey : theme.colors.blue};
    border-radius: 0.625rem;
    color: ${({ disabled, variant, theme }) =>
      disabled
        ? variant === "solid"
          ? theme.colors.white
          : theme.colors.grey
        : variant === "solid"
        ? theme.colors.white
        : theme.colors.blue};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "1em")};
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.2s;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    margin: 0.313rem;

    /* &:hover {
      background: ${({ disabled, color, theme }) =>
      disabled
        ? color === "solid"
          ? theme.colors.grey
          : theme.colors.white
        : color === "solid"
        ? theme.colors.white
        : theme.colors.blue};
      color: ${({ disabled, color, theme }) =>
      disabled
        ? color === "solid"
          ? theme.colors.white
          : theme.colors.grey
        : color === "solid"
        ? theme.colors.blue
        : theme.colors.white};
      border: 0.0625rem solid
        ${({ disabled, color, theme }) =>
      disabled
        ? color === "solid"
          ? theme.colors.white
          : theme.colors.grey
        : color === "solid"
        ? theme.colors.blue
        : theme.colors.white};
    } */

    &:focus {
      outline: none;
    }

    p {
      margin: 0 0.5rem;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
