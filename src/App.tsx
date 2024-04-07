import {Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import { LevelUi } from './pages/user/levels'
import { BookUi } from './pages/user/books'
function App() {

  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<BookUi/>} />
          <Route path="/admin/level" element={<LevelUi/>} />
          <Route path="/admin/book" element={<BookUi/>} />
          <Route path="/" element={<BookUi/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
