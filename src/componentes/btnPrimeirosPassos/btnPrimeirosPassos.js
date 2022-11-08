import "./btnPrimeirosPassos.scss";

const BtnPrimeirosPassos = ({ texto,tipo }) => {
  return (<button type={tipo} className="btnPrimeirosPassos">{texto}</button>);
};

export default BtnPrimeirosPassos;
