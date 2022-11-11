import Header from "../../componentes/header/header";
import BtnInicial from "../../componentes/botaoInicio/botaoInicio";
import "./home.scss";
import MenuBotton from "../../componentes/menuBotton/menu";

const Home = () => {
  return (
    <div className="home">
      <MenuBotton></MenuBotton>
      <Header />
      <BtnInicial btnclass="btnInicial" texto="Adicionar" />
    </div>
  );
};

export default Home;
