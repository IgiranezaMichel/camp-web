import {Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import { LevelUi } from './pages/user/levels'
function App() {

  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<LevelUi/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
