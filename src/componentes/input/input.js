import "./input.scss"

const Input = ({icon,placeholder,tipo,valor,setarValor}) => {
return (
  <div className="input">
    <img src={icon} alt="" srcset="" />
    <input className="input-field" type={tipo} placeholder={placeholder} value={valor} onChange={(e)=> setarValor}/>
  </div>
);
}

export default Input; 