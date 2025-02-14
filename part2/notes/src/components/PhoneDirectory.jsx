import Person from "./Person";

const PhoneDirectory = ({ persons, deleteEntry, editEntry }) => {
  return (
    <div>
      <h5>Directory</h5>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <Person key={person.id} person={person} deleteEntry={deleteEntry} editEntry={editEntry} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PhoneDirectory;
