/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { LevelUi } from './pages/user/levels'
import { BookUi } from './pages/user/books'
import { Camp } from './pages/user/camp'
import { Exam } from './pages/user/exam'
import { Dashboard } from './pages/user/index'
import { User } from './pages/user/accountHolder'
import { Logout } from './pages/logout'
import { Church } from './pages/user/church'
import { Authentication } from './pages/user/authentication'
import { LoginContext } from './contexts/loginContext'
import { SignIn } from './pages/signin'
import { DataState } from './types/DataState'
import { useEffect, useState } from 'react'
function App() {
  const [login,setLogin]=useState<DataState|undefined>(undefined);
  const data: DataState = {
    currentState:login,
    updateState: (data:any) => {setLogin(data) }
  }
  useEffect(
    ()=>{
      
    },[login]
  )
  return (
    <LoginContext.Provider value={data}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<BookUi />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/church" element={<Church />} />
            <Route path="/admin/level" element={<Authentication><LevelUi /></Authentication>} />
            <Route path="/admin/book" element={<Authentication><BookUi /></Authentication>} />
            <Route path="/admin/camp" element={<Authentication><Camp /></Authentication>} />
            <Route path="/admin/exams" element={<Authentication><Exam /></Authentication>} />
            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </LoginContext.Provider>
  )
}

export default App
