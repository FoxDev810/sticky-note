import { Note } from "../../@types";

export interface IDefaultModalProps {
  isModalOpen: boolean;
  handleModalOpen: (props?: any) => void;
  props?: any;
}

export interface INoteModalProps extends IDefaultModalProps {
  handleNoteForm: (e: any, field: string) => void;
  handleSaveNote: (e: any) => void;
  currentNote: Note;
}

export interface INoteCardProps {
  note: Note;
  handleEditNote: (note: Note) => void;
  onDeleteNote: (id: string) => void;
}

export interface IStyledProps {
  viewMode?: number;
  noteColor?: string;
}

export interface IUseNotesProps {
  handleNoteModalOpen: (props?: any) => void;
  handleConfirmModalOpen: (props?: any) => void;
}

export interface IConfirmModalProps extends IDefaultModalProps {
  onConfirm: () => void;
}
