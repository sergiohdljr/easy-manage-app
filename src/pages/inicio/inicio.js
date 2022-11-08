import BtnInicial from '../../componentes/botaoInicio/botaoInicio';
import './inicio.scss'
import { Link } from 'react-router-dom';

const Inicio = ()=>{
    return (
      <main className="inicio">
        <figure className="logo">
          <img src="./logo.png" alt="logo" />
          <h2>
            Easy
            <br />
            Manage
          </h2>
        </figure>
        <section className="bem-vindo">
          <h1>Bem vindo!👋</h1>
          <Link to="/cadastro">
            <BtnInicial btnclass="btnInicial" texto="Cadastre-se"/>
          </Link>
        </section>
      </main>
    );
}

export default Inicio;

