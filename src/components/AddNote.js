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
    
   
    const  handleClick=  (e)=>{

      e.preventDefault();
      const user=localStorage.getItem('id');
      let dumNote={
        
          
          "user": user,
          "title": title,
          "description": description,
          "tag": tag,
        }
      
      
     addNote(dumNote)
     setTitle("");
     setDescription("")
     setTag("")
    
     
    }
  return (
    <div>
       <h1>Add a note</h1>
    <form className='mb-3' >
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" id="title"  value={title}  required onChange={(e)=>{
      setTitle(e.target.value)
    }}/>
   
  </div>
  <div className="mb-3">
    <label className="form-label">Description</label>
    <input type="text" className="form-control" id="Description"  value={description}  onChange={(e)=>{
      setDescription(e.target.value)
    }}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" value={tag} onChange={(e)=>{
      setTag(e.target.value)
    }}/>
  </div>
  
  <button disabled={title.length<=5 || description.length<=5} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
  <h1>Your notes</h1>
    </div>
  )
}
