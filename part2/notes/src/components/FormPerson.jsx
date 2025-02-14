import { Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";
import ResetButton from "./ResetButton";

const FormPerson = ({
  onSubmitting,
  onChangingName,
  onChangingPhoneNumber,
  onClickingReset,
  toggleEditMode,
  editMode,
  personId,
  newName,
  newPhoneNumber,
}) => {
  const label = editMode ? "Editing" : "Adding";

  return (
    <div>
      <h5>
        {label} Person{" "}
        {editMode ? <Link style={{ textDecoration: "none" }} onClick={toggleEditMode}>new</Link> : null}
      </h5>
      <form onSubmit={onSubmitting}>
        <div>
          <span style={{ display: editMode ? "inline" : "none" }}>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" readOnly value={personId} />
            <br />
          </span>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter a new name"
            value={newName}
            onChange={onChangingName}
          />
          <br />
          <label htmlFor="phonenumber">Phone number:</label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            placeholder="+1-555-123-4567."
            value={newPhoneNumber}
            onChange={onChangingPhoneNumber}
          />
          <br />
        </div>
        <div>
          <SubmitButton>Submit</SubmitButton>{" "}
          <ResetButton onClick={onClickingReset}>Reset</ResetButton>
        </div>
      </form>
    </div>
  );
};

export default FormPerson;
