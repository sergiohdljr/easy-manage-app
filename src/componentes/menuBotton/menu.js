import "./menu.scss";
import HistoricoIcon from "../../assets/historico-icon.svg";
import config from "../../assets/config-icon.svg";
import homeIcon from "../../assets/home-icon.svg";
import { useNavigate } from "react-router-dom";

const MenuBotton = () => {
  return (
    <div className="menuBottom">
      <BotaoNavegacao rota="/historico" icone={HistoricoIcon}></BotaoNavegacao>
      <BotaoNavegacao rota="/home" icone={homeIcon}></BotaoNavegacao>
      <BotaoNavegacao rota="/config" icone={config}></BotaoNavegacao>
    </div>
  );
};

const BotaoNavegacao = ({ icone, rota }) => {
  const redirect = useNavigate();
  return (
    <button
      onClick={() => {
        redirect(rota);
      }} className="icon">
      <img src={icone} alt="" />
    </button>
  );
};

export default MenuBotton;
