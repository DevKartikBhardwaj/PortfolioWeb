import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/App.scss";
import "./styles/Home.scss";
import "./styles/Links.scss";
import "./styles/Project&Contact.scss";
import "./styles/media.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/connect" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
