import './menu.scss'
import HistoricoIcon from '../../assets/historico-icon.svg'
import config from '../../assets/config-icon.svg'
import homeIcon from '../../assets/home-icon.svg'

const MenuBotton = () =>{
    return (
      <div className="menuBottom">
        <Icon icone={HistoricoIcon}></Icon>
        <Icon icone={homeIcon}></Icon>
        <Icon icone={config}></Icon>
      </div>
    );
}

const Icon = ({icone}) =>{
    return (
      <div className="icon">
        <img src={icone} alt="" />
      </div>
    );
}

export default MenuBotton