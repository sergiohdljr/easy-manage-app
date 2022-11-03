import "./formulario.scss";
import "../botaoInicio/botaoInicio.scss"
import emailIcon from "../../assets/email-icon.png";
import nomeicon from "../../assets/agenda-icon.png";
import talher from "../../assets/talher-icon.png"
import Input from "../input/input";
import BtnPrimeirosPassos from "../btnPrimeirosPassos/btnPrimeirosPassos";


const Formulario = () => {
  return (
    <form>
      <Input
        icon={emailIcon}
        placeholder="E-mail"
        tipo="email" />
      <Input
        icon={nomeicon}
        placeholder="Nome Completo"
        tipo="text" />
      <Input
        icon={talher}
        placeholder="Nome do restaurante"
        tipo="text"/>
      <div className="termos">
        <input type="checkbox" name="termos" id="termos" />
        <label htmlFor="termos">
          li e aceito os <b>termos de uso.</b>
        </label>
      </div>
      <BtnPrimeirosPassos texto="Registrar" />
    </form>
  );
};

export default Formulario;
