import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";

const Counter = ({ addNote, newNote, handleNoteChange, onClickReset }) => {
  return (
    <>
      <h5>New note</h5>
      <form onSubmit={addNote}>
        <label htmlFor="newnote">Content:</label>
        <input
          type="text"
          id="newnote"
          name="newnote"
          placeholder="Enter a new note"
          value={newNote}
          onChange={handleNoteChange}
        />
        <br />
        <SubmitButton>Submit</SubmitButton>{" "}
        <ResetButton onClick={onClickReset}>Reset</ResetButton>
      </form>
    </>
  );
};

export default Counter;
