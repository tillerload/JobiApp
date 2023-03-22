import './App.css'

import { Link, Routes, Route } from 'react-router-dom'
import ErrorPage from './comps/ErrorPage'
import HomePage from './comps/HomePage'
import Footer from './comps/Footer'

function App() {

  return (
    <div className="App">
      <HomePage />
      <Footer />

      <Routes>
        <Route path='/ErrorPage' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
