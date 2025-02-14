import { useEffect, useState } from "react";
import notesService from "../services/notes";
import Counter from "../components/Counter";
import NotesList from "../components/NotesList";
import FormNote from "../components/FormNote";
import AlertButton from "../components/AlertButton";
import Toolbar from "../components/Toolbar";
import CustomEvent from "../components/CustomEvent";
import StopPropagation from "../components/StopPropagation";
import "../assets/css/notes.css";

const Notes = () => {
  const [counter, setCounter] = useState(0);
  const [isPending, setIsPending] = useState(true);
  const [notes, setNotes] = useState(null);
  const [errorMessage, setErrorMessage] = useState("Some error message...");
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  // const notesToShow = Object
  //   .entries(notes)
  //   .filter(([_, v]) => v !== null)
  //   .filter((note) => note.important);  // add a filtering

  useEffect(() => {
    // console.log("Notes.jsx: useEffect");
    // console.log("Notes.jsx: useEffect: before axios.get");
    notesService
      .getAll()
      .then((initialNotes) => {
        // console.log("Notes.jsx: useEffect:", initialNotes.data);
        // console.log("Notes.jsx: useEffect:", initialNotes.data.length);
        // console.log(
        //   "Notes.jsx: useEffect: axios.get: received:",
        //   initialNotes.data.length,
        //   "notes."
        // );
        // setNotes(initialNotes);
        if (!isPending) {
          setNotes(initialNotes);
        }
      })
      .catch((error) => {
        console.error("App.jsx: useEffect: error connecting to server:", error);
      })
      .finally(() => {
        console.log("Notes.jsx: useEffect: finally block.");
        setIsPending(false);
      });
    // console.log("Notes.jsx: useEffect: after axios.get");
  }, [isPending]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const addNote = (event) => {
    event.preventDefault();
    // console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    };

    notesService
      .create(noteObject)
      .then((createdNote) => {
        console.log("Notes.jsx: POST:", createdNote);
        setNotes(notes.concat(createdNote));
        setNewNote("");
      })
      .catch((error) => {
        console.error("Notes.jsx: POST:", error);
      });
  };

  const onClickReset = () => setNewNote("");

  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const toggleImportance = (id) => {
    // console.log("Notes.jsx: toggleImportance:", id);
    const note = notes.find((n) => n.id === id);
    // console.log("Notes.jsx: toggleImportance:", note);
    const changedNote = { ...note, important: !note.important };

    notesService
      .update(id, changedNote)
      .then((updatedNote) => {
        console.log("Notes.jsx: PUT:", updatedNote);
        setNotes(notes.map((note) => (note.id !== id ? note : updatedNote)));
      })
      .catch((error) => {
        // console.error("Notes.jsx: PUT:", error);
        // alert(`The note '${note.content}' was already deleted from server.`);
        setErrorMessage(
          `Note '${note.content}' was already removed from server. ${error}`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  if (isPending) {
    return <div>Loading...</div>;
  } else {
    // console.log(counter);
    return (
      <div id="notes-container">
        <h3>Notes</h3>
        <Counter
          counter={counter}
          incrementCounter={incrementCounter}
          resetCounter={resetCounter}
        />
        <NotesList
          showAll={showAll}
          setShowAll={setShowAll}
          notesToShow={notesToShow}
          toggleImportance={toggleImportance}
          message={errorMessage}
        />
        <FormNote
          addNote={addNote}
          newNote={newNote}
          handleNoteChange={handleNoteChange}
          onClickReset={onClickReset}
        />
        <h5>Reading props in Event</h5>
        <AlertButton message="Uploading!">Upload</AlertButton>
        <h5>Event Propagation</h5>
        <Toolbar />
        <h5>Custom Event</h5>
        <CustomEvent onSmash={() => alert("Playing!")}>
          Play Movie
        </CustomEvent>{" "}
        <CustomEvent onSmash={() => alert("Uploading!")}>
          Upload Image
        </CustomEvent>
        <h5>Stop Propagation</h5>
        <StopPropagation />
      </div>
    );
  }
};

export default Notes;
