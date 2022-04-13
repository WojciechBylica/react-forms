import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import FormHtml from './pages/FormHtml/FormHtml'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Formularz</NavLink>
      </nav>
      <h1>Formularz </h1>
      <Routes>
        <Route path="/" element={<FormHtml />} />
        <Route path="*" element={<Navigate />} />
      </Routes>
    </div>
  )
}
