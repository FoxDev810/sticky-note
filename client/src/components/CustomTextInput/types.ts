export interface IProps extends IStyledProps {
  value?: string;
  label?: string;
  type?: "text" | "textarea";
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  autoFocus?: boolean;
  onBlur?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface IStyledProps {
  width?: string;
  rows?: number;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}
