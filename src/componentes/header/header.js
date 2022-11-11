import './header.scss'
import logoEm from '../../assets/app-logo.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={logoEm} alt="" className="logo" />
      <div className="user">
        <h3>Bem vindo de volta!</h3>
        <h2>
          <b>nome</b>
        </h2>
      </div>
    </div>
  );
};

export default Header