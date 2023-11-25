import {
  GET_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  ALERT_ERRORS,
  ALERT_SUCCESS,
  CLEAR_ALERT,
} from "../types/noteType";
import { Note } from "../../@types";
import { getAPI, postAPI, putAPI, deleteAPI } from "../../utils/FetchData";

export const getNote = () => async (dispatch: React.Dispatch<any>) => {
  try {
    const res = await getAPI("note");

    if (res.data.type === "error") {
      dispatch({
        type: ALERT_ERRORS,
        payload: res.data.msg,
      });
    } else {
      dispatch({
        type: GET_NOTE,
        payload: res.data.notes,
      });
    }
  } catch (err: any) {
    dispatch({
      type: ALERT_ERRORS,
      payload: err.response.data,
    });
  }
};

export const addNote =
  (formData: Note) => async (dispatch: React.Dispatch<any>) => {
    try {
      const res = await postAPI("note", formData);

      if (res.data.type === "error") {
        dispatch({
          type: ALERT_ERRORS,
          payload: res.data.msg,
        });
      } else {
        dispatch({
          type: ADD_NOTE,
          payload: res.data.note,
        });
        dispatch({
          type: ALERT_SUCCESS,
          payload: res.data.msg,
        });
      }
    } catch (err: any) {
      dispatch({
        type: ALERT_ERRORS,
        payload: err.response.data,
      });
    }
  };

export const updateNote =
  (formData: Note) => async (dispatch: React.Dispatch<any>) => {
    try {
      const res = await putAPI(`note/${formData._id}`, formData);

      if (res.data.type === "error") {
        dispatch({
          type: ALERT_ERRORS,
          payload: res.data.msg,
        });
      } else {
        dispatch({
          type: EDIT_NOTE,
          payload: res.data.note,
        });
        dispatch({
          type: ALERT_SUCCESS,
          payload: res.data.msg,
        });
      }
    } catch (err: any) {
      dispatch({
        type: ALERT_ERRORS,
        payload: err.response.data,
      });
    }
  };

export const deleteNote =
  (formData: Note) => async (dispatch: React.Dispatch<any>) => {
    try {
      const res = await deleteAPI(`note/${formData}`);

      if (res.data.type === "error") {
        dispatch({
          type: ALERT_ERRORS,
          payload: res.data.msg,
        });
      } else {
        dispatch({
          type: DELETE_NOTE,
          payload: res.data.note,
        });
        dispatch({
          type: ALERT_SUCCESS,
          payload: res.data.msg,
        });
      }
    } catch (err: any) {
      dispatch({
        type: ALERT_ERRORS,
        payload: err.response.data,
      });
    }
  };

export const clearAlert = () => async (dispatch: React.Dispatch<any>) => {
  try {
    dispatch({
      type: CLEAR_ALERT,
    });
  } catch (err: any) {
    console.log(err);
  }
};
