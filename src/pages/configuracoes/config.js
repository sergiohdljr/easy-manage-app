import './config.scss'
import MenuBotton from "../../componentes/menuBotton/menu"
import { EasyManageLogo } from '../historico/historico';


// construir config page
const Configuracao = () =>{
    return (
      <div className="config">
        <EasyManageLogo titulo="Configurações"></EasyManageLogo>
        <div className="container">
          <ConfigCard titulo="Administração" tituloBotao="Conta" btnTitulo="Compartilhar dados"></ConfigCard>
          <ConfigCard titulo="Gastos" tituloBotao="Editar Histórico" btnTitulo="Apagar Histórico"></ConfigCard>
        </div>

        <MenuBotton></MenuBotton>
      </div>
    );
}

const ConfigCard = ({titulo,tituloBotao,btnTitulo})=>{
    return(
        <div className="config-card">
            <h4>{titulo}</h4>
            <div className="card">
                <button>{tituloBotao}</button>
                <hr />
                <button>{btnTitulo}</button>
            </div>
        </div>
    )
}


export default Configuracao