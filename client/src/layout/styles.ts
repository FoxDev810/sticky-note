import styled from "styled-components";

export const Header = styled.section`
  background: ${({ theme }) => theme.colors.darkGrey}};
  padding: 0.5em 0.8em;
  z-index: 1;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: ${({ theme }) => theme.colors.white}};
  display: flex;
  align-items: center;
  justify-content: center;

  div:first-child {
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      cursor: pointer;
      border-radius: 50%;
      border: 2px solid #f2f2f2;
      background: ${({ theme }) => theme.colors.white}};
    }
  }
`;

export const ContentWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 2em 0.8em;
  height: calc(100vh - 80px);
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  cursor: pointer;
`;
