import { EmptyWrapper } from "./styles";
import { IProps } from "./types";

export function Empty({ extra, icon, defaultMessage }: IProps) {
  return (
    <EmptyWrapper>
      {icon}
      <h1>{!extra ? defaultMessage : extra}</h1>
    </EmptyWrapper>
  );
}
