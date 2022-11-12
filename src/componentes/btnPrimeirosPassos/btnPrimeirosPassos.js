import "./btnPrimeirosPassos.scss";
import React from "react";

const BtnPrimeirosPassos = ({ texto,tipo,handleclick }) => {
  return (<button type={tipo} onClick={handleclick} className="btnPrimeirosPassos">{texto}</button>);
};

export default BtnPrimeirosPassos;
