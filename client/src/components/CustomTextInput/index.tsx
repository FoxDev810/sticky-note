import { InputWrapper } from "./styles";
import { IProps } from "./types";

export const CustomTextInput = ({
  value,
  label,
  type = "text",
  onChange,
  placeholder,
  disabled,
  required,
  maxLength,
  minLength,
  autoFocus,
  onBlur,
  onFocus,
  width,
  rows,
  size = "medium",
}: IProps) => {
  return (
    <InputWrapper width={width} size={size}>
      {label && <label htmlFor={label}>{required ? `${label}*` : label}</label>}
      {type === "textarea" ? (
        <textarea
          id={label}
          placeholder={placeholder}
          aria-label={label}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          minLength={minLength}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          required={required}
          rows={rows}
        />
      ) : (
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          aria-label={label}
          onChange={onChange}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
        />
      )}
    </InputWrapper>
  );
}
