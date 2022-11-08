import Header from "../../componentes/header/header";
import BtnInicial from "../../componentes/botaoInicio/botaoInicio";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <BtnInicial btnclass="btnInicial" texto="Cadastre-se" />
    </div>
  );
};

export default Home;
