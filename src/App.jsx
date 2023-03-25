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

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/ErrorPage' element={<ErrorPage />} />
          <Route path='/JobDetails' element={<JobDetails />} />
          <Route path='/JobList' element={<JobList />} />
        </Routes>

      <Footer />
    </div>
  )
}

export default App
