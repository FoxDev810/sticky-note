export interface IProps extends IStyledProps {
  title?: string;
  type?: "button" | "submit" | "reset";
  onClick: (() => void) | undefined;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface IStyledProps {
  width?: string;
  height?: string;
  fontSize?: string;
  disabled?: boolean;
  variant?: "solid" | "outline";
}
