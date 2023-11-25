import styled from "styled-components";

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 3rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey};
    margin-top: 1rem;
  }
`;
