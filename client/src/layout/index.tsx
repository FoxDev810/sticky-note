import { NavBar } from "./components/NavBar";
import { ContentWrapper } from "./styles";
import { IProps } from "./types";

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}
