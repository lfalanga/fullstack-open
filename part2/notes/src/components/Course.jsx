import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import CourseTotals from "./CourseTotals";

const Course = (props) => {
  // console.log("Course:", props);

  const { course } = props;
  // console.log("course.parts:", course.parts); 

  // Calculate the total number of exercises
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <table>
      <thead>
        <tr>
          <CourseHeader name={course.name} />
        </tr>
      </thead>
      <tbody>
        <CourseContent parts={course.parts} />
      </tbody>
      <tfoot>
        <tr>
          <CourseTotals total={totalExercises} />
        </tr>
      </tfoot>
    </table>
  );
};

export default Course;
