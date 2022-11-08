
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import "./App.scss";
import Inicio from "./pages/inicio/inicio";
import Cadastro from "./pages/cadastro/cadastro";
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
