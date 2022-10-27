import "./formulario.scss";
// import icons from FontAwesomeIcon ;

const Formulario = () => {
  return (
    <form>
      <input className="input-field" type="text" placeholder="E-mail" />
      <input className="input-field" type="text" placeholder="Nome Completo" />
      <input
        className="input-field"
        type="text"
        placeholder="Nome da Empresa"
      />
      <button type="submit" className="btn-submit">
        cadastrar
      </button>
    </form>
  );
};

export default Formulario;
