import { useEffect } from "react";
import { NoteListWrapper, ActionsWrapper } from "./styles";
import { theme } from "../../theme";
import { useSelector } from "react-redux";
import { FiPlusCircle } from "react-icons/fi";
import { BsInbox } from "react-icons/bs";
import { CustomButton } from "../../components/CustomButton";
import { NoteModal } from "./components/NoteModal";
import { NoteCard } from "./components/NoteCard";
import { Empty } from "../../components/Empty";
import { ConfirmModal } from "./components/ConfirmModal";
import { useCustomModal } from "../../components/CustomModal/hooks/useCustomModal";
import { useNotes } from "./hooks/useNotes";
import { Note, RootStore } from "../../@types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NotesPage = () => {
  const alert = useSelector((state: RootStore) => state.note);
  const { isModalOpen: isNoteModalOpen, handleModalOpen: handleNoteModalOpen } =
    useCustomModal();

  useEffect(() => {
    if (alert.success === true) {
      toast.success(alert.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (alert.error === true) {
      toast.error(alert.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [alert]);

  const {
    isModalOpen: isConfirmModalOpen,
    handleModalOpen: handleConfirmModalOpen,
    modalProps: confirmModalProps,
  } = useCustomModal();

  const {
    handleSaveNote,
    handleNoteForm,
    handleEditNote,
    handleAddNote,
    handleDeleteNote,
    currentNote,
    search,
    setSearch,
    notes,
    onDeleteNote,
  } = useNotes({ handleNoteModalOpen, handleConfirmModalOpen });

  const hasNotes = notes.length > 0;
  return (
    <>
      <ActionsWrapper>
        <CustomButton
          variant="solid"
          title="Add"
          onClick={handleAddNote}
          rightIcon={<FiPlusCircle size={20} />}
          height="2rem"
        />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </ActionsWrapper>

      {!hasNotes ? (
        <Empty
          defaultMessage="No notes yet"
          icon={<BsInbox size={80} color={theme.colors.lightGrey} />}
          extra={search ? `No notes found for "${search}"` : ""}
        />
      ) : (
        <NoteListWrapper>
          {notes.map((note: Note) => (
            <NoteCard
              note={note}
              key={note._id}
              handleEditNote={handleEditNote}
              onDeleteNote={onDeleteNote}
            />
          ))}
        </NoteListWrapper>
      )}

      <NoteModal
        handleSaveNote={handleSaveNote}
        handleNoteForm={handleNoteForm}
        handleModalOpen={handleNoteModalOpen}
        isModalOpen={isNoteModalOpen}
        currentNote={currentNote}
      />

      <ConfirmModal
        isModalOpen={isConfirmModalOpen}
        handleModalOpen={handleConfirmModalOpen}
        onConfirm={() => handleDeleteNote(confirmModalProps.id)}
      />
      <ToastContainer />
    </>
  );
}
