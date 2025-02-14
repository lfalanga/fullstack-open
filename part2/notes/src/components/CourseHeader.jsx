const CourseHeader = (props) => {
  // console.log("CourseHeader:", props);

  const { name } = props;

  return (
    <>
      <th colSpan="2">{name}</th>
    </>
  );
};

export default CourseHeader;
