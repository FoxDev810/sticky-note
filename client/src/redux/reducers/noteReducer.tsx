import { actionTypes, INote } from "../../@types/index";
import {
  GET_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  ALERT_ERRORS,
  ALERT_SUCCESS,
  CLEAR_ALERT,
} from "../types/noteType";

const initialState: INote = {
  data: [],
  msg: "",
  success: false,
  error: false,
};

const noteReducer = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case GET_NOTE:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case EDIT_NOTE:
      return {
        ...state,
        data: state.data.map((note) =>
          note._id === action.payload._id ? action.payload : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        data: state.data.filter((note) => note._id !== action.payload._id),
      };
    case ALERT_SUCCESS:
      return {
        ...state,
        success: true,
        error: false,
        msg: action.payload,
      };
    case ALERT_ERRORS:
      return {
        ...state,
        success: false,
        error: true,
        msg: action.payload,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        success: false,
        error: false,
        msg: "",
      };
    default:
      return state;
  }
};

export default noteReducer;
