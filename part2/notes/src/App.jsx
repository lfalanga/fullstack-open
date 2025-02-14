import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Notes from "./pages/Notes";
import Courses from "./pages/Courses";
import PhoneBook from "./pages/PhoneBook";
import ExchangeRate from "./pages/ExchangeRate";
import InfoCountries from "./pages/InfoCountries";
import Foo from "./pages/Foo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/courses" element={<Courses />} />{" "}
        <Route path="/phonebook" element={<PhoneBook />} />{" "}
        <Route path="/exchange" element={<ExchangeRate />} />{" "}
        <Route path="/countries" element={<InfoCountries />} />{" "}
        <Route path="/foo" element={<Foo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
