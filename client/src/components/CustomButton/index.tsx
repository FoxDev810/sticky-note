import { ButtonWrapper } from "./styles";
import { IProps } from "./types";

export const CustomButton = ({
  title,
  type = "button",
  onClick,
  leftIcon,
  rightIcon,
  disabled = false,
  variant = "solid",
  width,
  height,
  fontSize,
}: IProps) => {
  return (
    <ButtonWrapper
      width={width}
      height={height}
      variant={variant}
      fontSize={fontSize}
      disabled={disabled}
    >
      <button
        id={title ?? "button"}
        aria-label={title ?? "button"}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {title && <p>{title}</p>}
        {rightIcon && <span>{rightIcon}</span>}
      </button>
    </ButtonWrapper>
  );
};
