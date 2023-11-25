import "styled-components";
import { theme } from "../theme";
import rootReducer from '../redux/reducers/index'
import { actionTypes, RootStore } from './index';
import { INote } from "../redux/types/noteType";

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}

export type Note = {
  _id: string;
  description: string;
  color: string;
  updatedAt: string;
};

export interface RootStore {
  note: INote
}

export interface INote {
  data: Note[],
  msg: string,
  success: Boolean,
  error: Boolean
};

export interface actionTypes {
  type: string,
  payload: Note,
  data: Note[]
}
