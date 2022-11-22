import React, { useState } from "react";

export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

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
