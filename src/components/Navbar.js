import React from 'react'
import { useNavigate } from "react-router-dom";
import {Link,useLocation } from 'react-router-dom'
export default function Navbar() {
  const location=useLocation();
  let history=useNavigate();
  const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    history('/login')
    
  }
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse active" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active" :""}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active" :""}`} to="/about">About</Link>
        </li>
       
       
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex">
        
        <Link to='/login' className="btn btn-primary  mx-2" type="submit">Login</Link>
        <Link  to='/signup' className="btn btn-primary  mx-2" type="submit">Signup</Link>
      </form>:<button onClick={logout} className='btn btn-primary'>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}
