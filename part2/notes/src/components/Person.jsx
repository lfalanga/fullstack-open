import { Link } from "react-router-dom";

const Person = ({ person, deleteEntry, editEntry }) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.phoneNumber}</td>
      <td>
        <Link onClick={() => deleteEntry(person.id)}>delete</Link>{" : "}
        <Link onClick={() => editEntry(person.id)}>edit</Link>
      </td>
    </tr>
  );
};

export default Person;
