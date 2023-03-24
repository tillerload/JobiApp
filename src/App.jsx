import './App.css'

import { Link, Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import Footer from './comps/Footer'
import Header from './comps/Header'
import JobDetails from './pages/JobDetails'
import JobList from './pages/JobList'

function App() {

  return (
    <div className="App">
      <Header />
      <ErrorPage />
      <Footer />

      <Routes>
        <Route path='/ErrorPage' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
