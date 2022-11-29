import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("")
  let history=useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:8080/api/auth/`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                password:password,
                name:name
              })
          });
          const json=await(response.json());
          console.log(json)
          if(json.success===true)
          {
            history('/login');
            props.showAlert("Account has been created successfully.Kindly login!")
          }
          else
          {
            props.showAlert(json.error,"danger")
          }
          await setEmail("");
          await setPassword("")
          await setName("")
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
          <label  className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={e=>{
                setName(e.target.value)
            }}
          />
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
