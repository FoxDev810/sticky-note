import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NoteColors } from "../../../static";
import { Note, RootStore } from "../../../@types";
import { IUseNotesProps } from "../types";
import validator from "validator";
import { toast } from "react-toastify";
import {
  getNote,
  addNote,
  updateNote,
  deleteNote,
} from "../../../redux/actions/noteAction";
import { useTypedDispatch } from "../../../redux/store";
import sortBy from "sort-by";

export const useNotes = ({
  handleNoteModalOpen,
  handleConfirmModalOpen,
}: IUseNotesProps) => {
  const note = useSelector((state: RootStore) => state.note.data);
  const dispatch = useTypedDispatch();
  const [currentNote, setCurrentNote] = useState<Note>({
    _id: "",
    description: "",
    color: NoteColors[0],
    updatedAt: "",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getNote());
  }, []);

  note.sort(sortBy("-updatedAt"));

  const filteredNotes = note.filter((note: Note) => {
    const { description } = note;
    return description?.toLowerCase().includes(search.toLowerCase());
  });

  const handleAddNote = () => {
    handleNoteModalOpen();
    clearForm();
  };

  const handleNoteForm = ({ target }: any, field: string) => {
    const { value } = target;
    setCurrentNote({
      ...currentNote,
      [field]: value,
    });
  };

  const handleSaveNote = (e: FormDataEvent) => {
    e.preventDefault();
    if (
      validator.isLength(currentNote.description, {
        min: 20,
        max: 300,
      })
    ) {
      if (currentNote._id) {
        dispatch(updateNote(currentNote));
      } else {
        dispatch(addNote(currentNote));
      }
      handleNoteModalOpen();
    } else {
      toast.error("Description length must less 20 and more than 300", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleEditNote = (note: Note) => {
    setCurrentNote(note);
    handleNoteModalOpen();
  };

  const onDeleteNote = (id: string) => {
    handleConfirmModalOpen({ id });
  };

  const handleDeleteNote = (id: Note) => {
    dispatch(deleteNote(id));
  };

  const clearForm = () => {
    setCurrentNote({
      _id: "",
      description: "",
      color: NoteColors[0],
      updatedAt: "",
    });
  };

  return {
    handleAddNote,
    handleNoteForm,
    handleSaveNote,
    handleEditNote,
    handleDeleteNote,
    onDeleteNote,
    search,
    setSearch,
    notes: filteredNotes,
    currentNote,
  };
};
