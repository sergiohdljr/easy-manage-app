import "./btnPrimeirosPassos.scss";

const BtnPrimeirosPassos = ({ texto,tipo,handleclick }) => {
  return (<button type={tipo} onClick={handleclick} className="btnPrimeirosPassos">{texto}</button>);
};

export default BtnPrimeirosPassos;
