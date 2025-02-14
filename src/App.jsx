import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Foo from "./pages/Foo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foo" element={<Foo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
