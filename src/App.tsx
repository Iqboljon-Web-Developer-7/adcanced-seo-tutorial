import { Route, Routes } from 'react-router-dom'
import About from './Features/About/About'
import Contact from './Features/Contact/Contact'

const App = () => {
  return (
    <>
    <h1>Home</h1>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App