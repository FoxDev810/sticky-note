import { Request, Response } from "express";
import Note from "../model/noteModel";
import { INote } from "../interface/noteInterface";

export const getNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes = await Note.find();
    if (!notes) {
      res.status(404).json({ msg: "Not Found!", type: "error" });
    } else {
      res
        .status(200)
        .json({ notes, type: "success", msg: "Note load success!" });
    }
  } catch (error) {
    res.status(404).json({ msg: "Initial server error!", type: "error" });
  }
};

export const createNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const body = req.body as Pick<INote, "description" | "color" | "updatedAt">;

    const note: INote = new Note({
      description: body.description,
      color: body.color,
      updatedAt: Date.now(),
    });

    const newNote: INote = await note.save();

    if (!newNote) {
      res.status(200).json({ msg: "Not Found!", type: "error" });
    } else {
      res
        .status(200)
        .json({ msg: "Note created success!", type: "success", note: newNote });
    }
  } catch (error) {
    res.status(500).json({ msg: "Initial server error!" });
  }
};

export const updateNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateNote: INote | null = await Note.findByIdAndUpdate(
      { _id: id },
      {
        _id: id,
        description: body.description,
        color: body.color,
        updatedAt: Date.now(),
      }
    );
    if (!updateNote) {
      res.status(404).json({ msg: "Not Found!", type: "error" });
    } else {
      res.status(200).json({
        msg: "Note updated success!",
        type: "success",
        note: {
          _id: id,
          description: body.description,
          color: body.color,
          updatedAt: Date.now(),
        },
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "Initial Server Error!" });
  }
};

export const deleteNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedNote: INote | null = await Note.findByIdAndRemove(
      req.params.id
    );
    if (!deletedNote) {
      res.status(404).json({ msg: "Not Found!", type: "error" });
    } else {
      res.status(200).json({
        msg: "Note deleted success!",
        type: "success",
        note: deletedNote,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "Initial Server Error!" });
  }
};
