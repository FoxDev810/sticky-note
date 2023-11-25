import { NoteCardWrapper, ActionButton, NoteDateWrapper } from "../../styles";
import { BiEdit, BiTrash } from "react-icons/bi";
import { INoteCardProps } from "../../types";
import moment from "moment";

export const NoteCard = ({
  note,
  handleEditNote,
  onDeleteNote,
}: INoteCardProps) => {
  const updated = moment(note.updatedAt);
  return (
    <NoteCardWrapper
      noteColor={note.color}
      onDoubleClick={() => handleEditNote(note)}
    >
      <div className="cardHeader"></div>
      <div className="cardBody">
        <div className="cardMenu">
          <div>
            <BiEdit
              style={ActionButton}
              size={22}
              onClick={() => handleEditNote(note)}
            />
            <BiTrash
              style={ActionButton}
              size={22}
              onClick={() => onDeleteNote(note._id)}
            />
          </div>
        </div>
        <p>{note.description} Characters</p>
        <NoteDateWrapper>
          <p>{`${updated.format("YYYY.MM.DD")} : ${updated.format(
            "HH:mm"
          )}`}</p>
        </NoteDateWrapper>
      </div>
    </NoteCardWrapper>
  );
};
