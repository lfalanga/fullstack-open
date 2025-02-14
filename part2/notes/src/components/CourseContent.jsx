import CoursePart from "./CoursePart";

const CourseContent = (props) => {
  // console.log("CourseContent:", props);

  const { parts } = props;

  return (
    <>
      {parts.map((part) => (
        <CoursePart key={part.id} part={part} />
      ))}
    </>
  );
};

export default CourseContent;
