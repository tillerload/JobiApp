import './App.css'

import { Link, Routes, Route } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage'

function App() {

  return (
    <div className="App">
      <nav>
        <h1 className='uppercase underline'>wow!</h1>
        <ul>
          <li>
            <Link to='/ErrorPage'>Dont Click this</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path='/ErrorPage' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
