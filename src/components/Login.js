import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
  let history=useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:8080/api/auth/login`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                password:password
              })
          });
          const json=await(response.json());
          console.log(json)
          if(json.success===true)
          {
            //save the auth token and redirect

            localStorage.setItem('token',json.token);
            localStorage.setItem('id',json.id)
            history('/')
            props.showAlert("LoggedIn successfully","success")
          }
          else
          {
            props.showAlert("Invalid Credentials","danger")
          }
          await setEmail("");
          await setPassword("")
    }
  return (
    <div>
      <form  onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={e=>{
                setEmail(e.target.value)
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={e=>{
                setPassword(e.target.value)
            }}
          />
        </div>

        <button  className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
