import Logo from "../../objects/Logo";
import Sobre from "../../objects/Sobre"
import Menu from "../../objects/Menu"
import "./styles.css"

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="actions">
        <Sobre />
        <Menu />
      </div>
    </div>
  )
}

export default Header;