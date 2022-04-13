import './style.css'
import { NavLink } from 'react-router-dom'

const Layout = ({ children }) => (
  <>
    <nav className="nav">
      <NavLink className="nav__link" to="/">
        Formularz
      </NavLink>
    </nav>
    <header>
      <h1>Formularz z walidacją</h1>
    </header>
    <main>{children}</main>
    <footer className="footer">stopka</footer>
  </>
)

export default Layout
