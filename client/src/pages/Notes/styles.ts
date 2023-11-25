import styled from "styled-components";
import { IStyledProps } from "./types";

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.8em;

  input {
    background: ${({ theme }) => theme.colors.lightGrey};
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    width: 50%;

    &:focus {
      outline: none;
    }
  }
`;

export const NoteCardWrapper = styled.div<IStyledProps>`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  height: fit-content;
  word-break: break-all;
  
  :hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  .cardHeader {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 8px;
    background-color: ${({ noteColor }) => noteColor}
  }

  .cardBody {
    padding: 1em;
  }

  .cardMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  h1 {
    font-size: 1.3em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1em;
    font-weight: 400;
    margin: 0;
    margin-bottom: 0.5em;
  }
`;

export const NoteDateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.6em;
  margin-top: 1.2em;
  color: ${({ theme }) => theme.colors.white};

  p {
    margin: 0;
    margin-left: 0.5em;
  }
`;

export const NoteListWrapper = styled.div<IStyledProps>`
  display: grid;
  grid-template-columns: repeat(${({ viewMode }) => viewMode}, 1fr);
  grid-auto-rows: min-content;
  gap: 1em;
  overflow: auto;
  height: 100%;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.grey};
  }
`;

export const ColorsWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin: 1em 0;
`;

export const NoteColorRadioInput = styled.div<IStyledProps>`
  input[type="radio"] {
    appearance: none;
    width: 25px;
    height: 25px;
    background-color: ${({ noteColor }) => noteColor};
    border-radius: 50%;
    transition: 100ms;
    cursor: pointer;
  }
  input[type="radio"]:checked {
    border: 2px solid ${({ theme }) => theme.colors.white};
    outline: 3px solid ${({ noteColor }) => noteColor};
    transition: 100ms;
  }
`;

export const ActionButton = {
  margin: "0 3",
  cursor: "pointer",
};
