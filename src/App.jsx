import './App.css'

import { Link, Routes, Route } from 'react-router-dom'
import ErrorPage from './comps/ErrorPage'
import HomePage from './comps/HomePage'

function App() {

  return (
    <div className="App">
      <HomePage />
      
      <Routes>
        <Route path='/ErrorPage' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
