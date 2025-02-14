const CoursePart = (props) => {
  // console.log("CoursePart:", props);

  const { part } = props;

  return (
    <tr>
      <td>{part.name}</td>
      <td>{part.exercises}</td>
    </tr>
  );
};

export default CoursePart;
