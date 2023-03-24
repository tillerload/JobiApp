import './App.css'

import { Link, Routes, Route } from 'react-router-dom'
import ErrorPage from './comps/ErrorPage'
import HomePage from './comps/HomePage'
import Footer from './comps/Footer'
import Header from './comps/Header'
import JobDetails from './JobDetails'
import JobList from './comps/JobList'

function App() {

  return (
    <div className="App">
      <Header />
      <JobList />
      <Footer />

      <Routes>
        <Route path='/ErrorPage' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
