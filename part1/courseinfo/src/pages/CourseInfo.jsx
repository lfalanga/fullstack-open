const Header = (props) => {
  return (
    <>
      <h5><strong>{props.course}</strong></h5>
    </>
  );
};

const Content = ({ parts }) => {
  // console.log(props);
  return (
    <>
      <tr>
        <Part part={parts[0]} />
      </tr>
      <tr>
        <Part part={parts[1]} />
      </tr>
      <tr>
        <Part part={parts[2]} />
      </tr>
    </>
  );
};

const Part = ({ part }) => {
  // console.log(props);
  return (
    <>
      <td>{part.name}</td>
      <td style={{ textAlign: "right" }}>{part.exercises} exercises</td>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <td>Total number of exercises</td>
      <td style={{ textAlign: "right" }}>
        <strong>
          {props.parts.reduce(
            (accumulator, currentValue) => accumulator + currentValue.exercises,
            0
          )}{" "}
          exercises
        </strong>
      </td>
    </>
  );
};

function CourseInfo() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <div>
        <table className="u-full-width">
          <thead>
            <tr>
              <th colSpan={2} style={{fontVariant: "small-caps"}}>
                <Header course={course.name} />
              </th>
            </tr>
          </thead>
          <tbody>
            <Content parts={course.parts} />
            <tr>
              <Total parts={course.parts} />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CourseInfo;
