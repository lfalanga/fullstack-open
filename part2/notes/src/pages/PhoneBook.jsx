import { useEffect, useState } from "react";
import personsService from "../services/persons";
import Toast from "../components/Toast";
import SearchBar from "../components/SearchBar";
import PhoneDirectory from "../components/PhoneDirectory";
import FormPerson from "../components/FormPerson";
import Debugging from "../components/Debugging";
import "../assets/css/phone-book.css";

const PhoneBook = () => {
  const [toast, setToast] = useState({
    type: "info",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });
  const [isPending, setIsPending] = useState(true);
  const [persons, setPersons] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [personId, setPersonId] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => {
    // console.log("PhoneBook.jsx: useEffect");
    // console.log("PhoneBook.jsx: useEffect: before axios.get");
    personsService
      .getAll()
      .then((initialEntries) => {
        // console.log("PhoneBook.jsx: useEffect:", initialEntries);
        // console.log("PhoneBook.jsx: useEffect:", initialEntries.length);
        // console.log(
        //   "PhoneBook.jsx: useEffect: axios.get: received:",
        //   initialEntries.length,
        //   "notes."
        // );
        setPersons(initialEntries);
        setFilteredPersons(initialEntries);
      })
      .catch((error) => {
        console.error(
          "PhoneBook.jsx: useEffect: error connecting to server:",
          error
        );
      })
      .finally(() => {
        console.log("PhoneBook.jsx: useEffect: finally block.");
        setIsPending(false);
      });
    // console.log("App.jsx: useEffect: after axios.get");
  }, []);

  useEffect(() => {
    // This callback function will run after every render where 'persons' has changed.
    setFilteredPersons(persons);
  }, [persons]); // The dependency array [persons] ensures this effect only runs when 'persons' changes.

  useEffect(() => {
    // This callback function will run after every render where 'editMode' has changed.
    // console.log("PhoneBook.jsx: useEffect: editMode:", editMode);
    if (!editMode) {
      setPersonId("");
      setNewName("");
      setNewPhoneNumber("");
    }
  }, [editMode]); // The dependency array [editMode] ensures this effect only runs when 'editMode' changes.

  useEffect(() => {
    // This callback function will run after every render where 'toast' has changed.
    // console.log("PhoneBook.jsx: useEffect: toast:", toast);
    setTimeout(() => {
      setToast({ type: "info", message: null });
    }, 5000);
  }, [toast]); // The dependency array [toast] ensures this effect only runs when 'toast' changes.

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    // console.log(event.target.value);
    setNewPhoneNumber(event.target.value);
  };

  const onClickReset = () => {
    // console.log("PhoneBook.jsx: onClickReset");
    if (editMode) {
      setEditMode(false);
    } else {
      setNewName("");
      setNewPhoneNumber("");
    }
    // setEditMode(false); // Try adding a hook to blank out the form fields.
    // setPersonId("");
    // setNewName("");
    // setNewPhoneNumber("");
  };

  const isValidName = (name) => {
    if (name.trim() === "") {
      return false;
    }
    return !persons.some((person) => person.name === name);
  };

  const isValidNumber = (number) => {
    if (number.trim() === "") {
      return false;
    }
    return /^\+?[1-9]\d{1,14}$/.test(number);
  };

  const addPerson = (event) => {
    event.preventDefault();
    // console.log("button clicked", event.target);

    if (!isValidName(newName)) {
      alert(
        newName.trim() === ""
          ? "Name cannot be empty."
          : `${newName} is already added to phonebook.`
      );
      return;
    }

    if (!isValidNumber(newPhoneNumber)) {
      alert("Phone number must be a valid number.");
      return;
    }

    const personObject = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: String(persons.length + 1),
    };

    personsService
      .create(personObject)
      .then((createdPerson) => {
        console.log("PhoneBook.jsx: POST:", createdPerson);
        setPersons(persons.concat(createdPerson));
        setEditMode(false); // Try adding a hook to blank out the form fields.
        // setPersonId("");
        // setNewName("");
        // setNewPhoneNumber("");
        onClickReset();
        setToast({
          type: "success",
          message: `Added ${createdPerson.name}.`,
        });
      })
      .catch((error) => {
        console.error("PhoneBook.jsx: POST:", error);
        setToast({
          type: "error",
          message: `Failed to add ${personObject.name}.`,
        });
      });
  };

  const updatePerson = (event) => {
    let continueUpdate = true;
    event.preventDefault();
    // console.log("PhoneBook.jsx: updatePerson:", event.target);

    if (!isValidName(newName)) {
      const message =
        newName.trim() === ""
          ? "Name cannot be empty."
          : `${newName} is already added to phonebook. Do you want to proceed?`;
      continueUpdate =
        newName.trim() === ""
          ? alert(message)
          : confirm(message);
    }
    
    if (!isValidNumber(newPhoneNumber)) {
      alert("Phone number must be a valid number.");
      return;
    }

    if (!continueUpdate) {
      return;
    }

    const updatedPerson = {
      id: personId,
      name: newName,
      phoneNumber: newPhoneNumber,
    };

    // console.log("PhoneBook.jsx: updatePerson:", updatedPerson);
    personsService
      .update(personId, updatedPerson)
      .then((updated) => {
        console.log("PhoneBook.jsx: PUT:", updated);
        setPersons(
          persons.map((person) =>
            person.id !== updatedPerson.id ? person : updated
          )
        );
        setEditMode(false); // Try adding a hook to blank out the form fields.
        // setPersonId("");
        // setNewName("");
        // setNewPhoneNumber("");
        setToast({
          type: "success",
          message: `Updated ${updatedPerson.name}.`,
        });
      })
      .catch((error) => {
        console.error("PhoneBook.jsx: PUT:", error);
        // alert(
        //   `The person '${updatedPerson.name}' was already deleted from server.`
        // );
        setToast({
          type: "info",
          message: `The person '${updatedPerson.name}' was already deleted from server.`,
        });
        setPersons(persons.filter((p) => p.id !== updatedPerson.id));
      });
  };

  const deleteEntry = (id) => {
    // console.log("PhoneBook.jsx: deleteEntry:", id);
    const person = persons.find((n) => n.id === id);

    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .remove(id)
        .then((removeResponse) => {
          console.log("PhoneBook.jsx: DELETE:", removeResponse);
          setToast({
            type: "success",
            message: `Deleted ${person.name}.`,
          });
          setPersons(persons.filter((n) => n.id !== id));
        })
        .catch((error) => {
          console.error("PhoneBook.jsx: DELETE:", error);
          // alert(`The entry '${person.name}' was already deleted from server.`);
          setToast({
            type: "info",
            message: `The entry '${person.name}' was already deleted from server.`,
          });
          setPersons(persons.filter((n) => n.id !== id));
        });
    } else {
      console.log("PhoneBook.jsx: deleteEntry: cancelled.");
    }
  };

  const toggleEditMode = () => {
    // if (editMode) {
    //   setPersonId("");
    //   setNewName("");
    //   setNewPhoneNumber("");
    // }
    setEditMode(!editMode);
  };

  const editEntry = (id) => {
    // console.log("PhoneBook.jsx: editEntry:", id);
    const person = persons.find((n) => n.id === id);
    // console.log("PhoneBook.jsx: editEntry:", person);

    setEditMode(true); // Try adding a hook to blank out the form fields.
    setPersonId(person.id);
    setNewName(person.name);
    setNewPhoneNumber(person.phoneNumber);
  };

  const searchInPhoneDirectory = (event) => {
    // console.log("searchInPhoneDirectory:", persons);
    // console.log("searchInPhoneDirectory:", event.target.value);
    const searchTerm = event.target.value.toLowerCase();

    const filteredPersons = persons.filter(
      (person) =>
        person.name.toLowerCase().includes(searchTerm) ||
        person.phoneNumber.toLowerCase().includes(searchTerm)
    );
    setFilteredPersons(filteredPersons);
  };

  const resetFilter = () => {
    document.getElementById("filter").value = "";
    setFilteredPersons(persons);
  };

  if (isPending) {
    return <div>Loading...</div>;
  } else {
    return (
      <div id="phone-book-container">
        <h3>PhoneBook</h3>
        <Toast type={toast.type} message={toast.message} />
        <SearchBar
          onSearching={searchInPhoneDirectory}
          onReseting={resetFilter}
        />
        <PhoneDirectory
          persons={filteredPersons}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
        <FormPerson
          onSubmitting={editMode ? updatePerson : addPerson}
          onChangingName={handleNameChange}
          onChangingPhoneNumber={handlePhoneNumberChange}
          onClickingReset={onClickReset}
          toggleEditMode={toggleEditMode}
          editMode={editMode}
          personId={personId}
          newName={newName}
          newPhoneNumber={newPhoneNumber}
        />
        <Debugging variables={[persons, editMode, newName, newPhoneNumber]} />
      </div>
    );
  }
};

export default PhoneBook;
