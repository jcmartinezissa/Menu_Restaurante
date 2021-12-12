import "./App.css";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Menu from "./components/Menu";
import Nosotros from "./components/Nosotros";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
