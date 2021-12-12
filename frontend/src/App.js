import "./App.css";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Menu from "./components/Menu";
import Nosotros from "./components/Nosotros";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Main />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/nosotros" component={Nosotros} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
