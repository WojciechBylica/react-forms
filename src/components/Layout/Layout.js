import './style.css'
import { NavLink } from 'react-router-dom'

const Layout = ({ children }) => (
  <>
    <nav className="nav">
      <img src="/logo192.png" width={48} height={48} alt="logo" />
      <NavLink className="nav__link" to="/">
        Formularz
      </NavLink>
    </nav>
    <header>
      <h1>Formularz</h1>
      <p>napisany bez użycia dodatkowych bibliotek</p>
    </header>
    <main>{children}</main>
    <footer className="footer">stopka</footer>
  </>
)

export default Layout
