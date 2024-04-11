import {Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import { LevelUi } from './pages/user/levels'
import { BookUi } from './pages/user/books'
import { Camp } from './pages/user/camp'
import { Exam } from './pages/user/exam'
import { Dashboard } from './pages/user/index'
import { User } from './pages/user/accountHolder'
import { Logout } from './pages/logout'
import { Church } from './pages/user/church'
function App() {

  return (
    <>
     <Router>
      <div>
        <Routes>
          <Route path="/" element={<BookUi/>} />
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="/admin/church" element={<Church/>} />
          <Route path="/admin/level" element={<LevelUi/>} />
          <Route path="/admin/book" element={<BookUi/>} />
          <Route path="/admin/camp" element={<Camp/>} />
          <Route path="/admin/exams" element={<Exam/>} />
          <Route path="/admin/user" element={<User/>} />
          <Route path="/admin/logout" element={<Logout/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
