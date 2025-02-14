import { Link } from "react-router-dom";

const Note = ({ note, toggleImportance }) => {
  // console.log("Note.jsx:", note);
  const label = note.important ? "make not important" : "make important";

  return (
    <li>
      {note.content}{ " " }
      <Link onClick={() => toggleImportance(note.id)}>
        {label}
      </Link>
    </li>
  );
};

export default Note;
