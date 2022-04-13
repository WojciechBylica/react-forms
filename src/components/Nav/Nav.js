import { NavLink } from 'react-router-dom'
const logo = '/logo192.png'

const Nav = () => (
  <nav className="nav">
    <img src={logo} width={48} height={48} alt="logo" />
    <NavLink className="nav__link" to="/">
      Formularz
    </NavLink>
  </nav>
)

export default Nav
