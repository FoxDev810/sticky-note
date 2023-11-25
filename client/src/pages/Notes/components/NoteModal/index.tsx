import { CustomModal } from "../../../../components/CustomModal";
import { CustomTextInput } from "../../../../components/CustomTextInput";
import { NoteColors } from "../../../../static";
import { ColorsWrapper, NoteColorRadioInput } from "../../styles";
import { INoteModalProps } from "../../types";

export const NoteModal = ({
  handleSaveNote,
  handleNoteForm,
  handleModalOpen,
  isModalOpen,
  currentNote,
}: INoteModalProps) => {
  return (
    <form onSubmit={(e) => handleSaveNote(e)}>
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => handleModalOpen()}
        footer={true}
        title={currentNote._id ? "Edit note" : "Add note"}
        closable={true}
      >
        <CustomTextInput
          label="Description"
          type="textarea"
          placeholder="Enter a description"
          onChange={({ target }) => handleNoteForm({ target }, "description")}
          size="medium"
          width="400px"
          rows={8}
          minLength={20}
          maxLength={300}
          value={currentNote.description}
        />
        <p>{currentNote.description.length}/300</p>
        <ColorsWrapper>
          {NoteColors.map((color) => (
            <NoteColorRadioInput key={color} noteColor={color}>
              <label htmlFor={color} />
              <input
                type="radio"
                name="color"
                id={color}
                value={color}
                onChange={({ target }) => handleNoteForm({ target }, "color")}
                checked={currentNote.color === color}
              />
            </NoteColorRadioInput>
          ))}
        </ColorsWrapper>
      </CustomModal>
    </form>
  );
}
