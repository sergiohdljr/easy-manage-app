import './botaoInicio.scss'

const BtnInicial = ({texto,btnclass}) => {
    return (
    <button  className={btnclass} >{texto}</button>
    );
}

export default BtnInicial ; 