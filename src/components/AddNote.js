import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import noteContext from '../context/notes/NotesContext';
export default function AddNote() {
    const context=useContext(noteContext);
    const  {notes,addNote}=context
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [tag,setTag]=useState("General");
    console.log(context)
   
    const  handleClick=  (e)=>{
      e.preventDefault();
      let dumNote={
        
          "_id": "63612551125d9f1381f0e226c636994",
          "user": "636551255af181f0e226c6698f",
          "title": "Game Notes",
          "description": "It was a nice day on tuesday",
          "tag": "General",
          "createdAt": "2022-11-04T18:11:37.068Z",
          "updatedAt": "2022-11-04T18:11:37.068Z",
          "__v": 0
        }
      
      console.log(dumNote)
     addNote(dumNote)
    
     
    }
  return (
    <div>
       <h1>Add a note</h1>
    <form className='mb-3'>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="title" id="title"   onChange={(e)=>{
      setTitle(e.target.value)
    }}/>
   
  </div>
  <div className="mb-3">
    <label className="form-label">Description</label>
    <input type="text" className="Description" id="Description" onChange={(e)=>{
      setDescription(e.target.value)
    }}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Tag</label>
    <input type="text" className="tag" id="tag" onChange={(e)=>{
      setTag(e.target.value)
    }}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
  <h1>Your notes</h1>
    </div>
  )
}
