import './App.css'

import firebase from './firebase.js'
import { Link, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/homePage/HomePageMain'
import Footer from './comps/Footer'
import Header from './comps/Header'
import JobDetails from './pages/JobDetails'
import JobList from './pages/jobList/JobList'

function App() {

  const [dataTest, useDataTest] = useState([])

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
