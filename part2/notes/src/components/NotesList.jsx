import Note from "./Note";
import Notification from "./Notification";

const Counter = ({
  showAll,
  setShowAll,
  notesToShow,
  toggleImportance,
  message,
}) => {
  return (
    <>
      <h5>Listing Notes</h5>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <Notification message={message} />
      <ul>
        {notesToShow === null ? (
          <li>null</li>
        ) : (
          notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={toggleImportance}
            />
          ))
        )}
      </ul>
    </>
  );
};

export default Counter;
