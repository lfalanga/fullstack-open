import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Foo from "./pages/Foo";
import CourseInfo from "./pages/CourseInfo";
import StateComponent from "./pages/StateComponent";
import StateComplex from "./pages/StateComplex";
import EventHandling from "./pages/EventHandling";
import Copilot from "./pages/Copilot";
import Unicafe from "./pages/Unicafe";
import Anecdotes from "./pages/Anecdotes";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        cursor: "pointer",
      }}
      className="button-primary"
    >
      Button
    </button>
  );
};

function App() {
  return (
    <>
      <div>
        <Header />
        <Button />
        <Routes>
          <Route path="/" element={<CourseInfo />} />
          <Route path="/foo" element={<Foo />} />
          {/* Generated using Copilot. */}
          <Route path="/copilot" element={<Copilot />} />
          <Route path="/state" element={<StateComponent />} />
          <Route path="/complex" element={<StateComplex />} />
          <Route path="/event" element={<EventHandling />} />
          <Route path="/unicafe" element={<Unicafe />} />
          <Route path="/anecdotes" element={<Anecdotes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
