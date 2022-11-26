import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import "./App.scss";
import Inicio from "./pages/inicio/inicio";
import Cadastro from "./pages/cadastro/cadastro";
import Home from './pages/home/home';
import Historico from './pages/historico/historico';
import Configuracao from './pages/configuracoes/config';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/config" element={<Configuracao />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
