import "./formulario.scss";
import "../botaoInicio/botaoInicio.scss";
import emailIcon from "../../assets/email-icon.png";
import nomeicon from "../../assets/agenda-icon.png";
import talher from "../../assets/talher-icon.png";
import BtnPrimeirosPassos from "../btnPrimeirosPassos/btnPrimeirosPassos";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Formulario = () => {
  const { register, handleSubmit } = useForm();
  const [dataUsuario, SetDataUsuario] = useState("");

  const onSubmit = (dataUsuario) => {
    return SetDataUsuario(dataUsuario);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input">
        <img src={nomeicon} alt="" srcSet="" />
        <input
          className="input-field"
          type="text"
          {...register("nome")}
          placeholder="Digite seu nome"
        />
      </div>
      <div className="input">
        <img src={emailIcon} alt="" srcSet="" />
        <input
          className="input-field"
          type="email"
          {...register("email")}
          placeholder="Digite seu email"
        />
      </div>
      <div className="input">
        <img src={talher} alt="" srcSet="" />
        <input
          className="input-field"
          type="text"
          {...register("restaurante")}
          placeholder="Nome do Restaurante"
        />
      </div>
      <div className="termos">
        <input type="checkbox" {...register("termos")} id="termos" />
        <label htmlFor="termos">
          li e aceito os <b>termos de uso.</b>
        </label>
      </div>
      <Link to="/home">
        <BtnPrimeirosPassos
          texto="Registrar"
        />
      </Link>
    </form>
  );
};

export default Formulario;
