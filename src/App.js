import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import NoteState from './context/notes/NotesStates'
import Alert from './components/Alert'
import Login from './components/Login'
import Signup from './components/Signup'
import { useState } from 'react'
export default function App() {
  const [alert,setAlert]=useState('');
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },3000);
  }
  return (
    <NoteState showAlert={showAlert}>
    <Router>
    <Navbar />
    <Alert alert={alert} />
    <div className="container">
    
      <Routes>
        <Route exact path='/' element={<Home showAlert={showAlert} />}   />
        <Route exact path='/about' element={<About />}   />
        <Route exact path='/login' element={<Login showAlert={showAlert} />}   />
        <Route exact path='/signup' element={<Signup showAlert={showAlert} />}   />
      </Routes>
    </div> 
    </Router>
    </NoteState>
  )
}
