import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import noteContext from '../context/notes/NotesContext';
import NoteState from '../context/notes/NotesStates';
export default function Home() {
  const context=useContext(noteContext);
  console.log(context.notes)
 useEffect(()=>{
  setTimeout(() => {
      context.setNotes( [
        {
          "_id": "636555c8f181f0e226c66992",
          "user": "6365555af181f0e226c6698f",
          "title": "tuesdat Notes",
          "description": "It was a nice day today",
          "tag": "General",
          "createdAt": "2022-11-04T18:11:20.583Z",
          "updatedAt": "2022-11-04T18:11:20.583Z",
          "__v": 0
        },
        {
          "_id": "636555d9f181f0e226c66994",
          "user": "6365555af181f0e226c6698f",
          "title": "saturday Notes",
          "description": "It was a nice day on tuesday",
          "tag": "General",
          "createdAt": "2022-11-04T18:11:37.068Z",
          "updatedAt": "2022-11-04T18:11:37.068Z",
          "__v": 0
        }
      ])
  }, 5000);
 },[])
  return (
    <div >
    <div className="container m-3">
    <h1>Add a note</h1>
    <form className='mb-3'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  <h1>Your notes</h1>
    </div>
{
  context.notes.map((element)=>{
    return <div>
      {element.title}
    </div>
  })
}
    </div>
  )
}
