import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import FormHtml from './pages/FormHtml/FormHtml'
import './App.css'
import { Layout } from './components'

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<FormHtml />} />
          <Route path="*" element={<Navigate />} />
        </Routes>
      </Layout>
    </div>
  )
}
