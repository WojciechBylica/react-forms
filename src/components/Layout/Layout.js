import './style.css'
import Nav from '../Nav'

const Layout = ({ children }) => (
  <>
    <Nav />
    <header>
      <h1>Formularz</h1>
      <p>napisany bez użycia dodatkowych bibliotek</p>
    </header>
    <main>{children}</main>
    <footer className="footer">stopka</footer>
  </>
)

export default Layout
