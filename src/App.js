
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import "./App.scss";
import Inicio from "./pages/inicio/inicio";
import PrimeirosPassos from "./pages/primeirosPassos/primeirosPassos" ;
import Cadastro from "./pages/cadastro/cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/primeirosPassos" element={<PrimeirosPassos />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
