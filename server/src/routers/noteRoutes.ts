import express from "express";
import {
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controller/noteController";

const noteRoutes = express();

noteRoutes.get('/', getNote);
noteRoutes.post('/', createNote);
noteRoutes.put('/:id', updateNote);
noteRoutes.delete('/:id', deleteNote);

export default noteRoutes;