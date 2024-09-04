import { Routes, Route } from "react-router-dom";
import Home from "./Container/Home/Index.jsx";
import About from "./Container/About/Index.jsx";
import Resume from "./Container/Resume/Index.jsx";
import Skills from "./Container/Skills/Index.jsx";
import Portfolio from "./Container/Portfolio/Index.jsx";
import Contact from "./Container/Contact/Index.jsx";
import Navbar from "./Components/Navbar/Index.jsx";

function App() {
  return (
    <>
      {/* {navbar} */}
      <Navbar />

      {/* Main content */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
        <Route path="skills" element={<Skills />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
