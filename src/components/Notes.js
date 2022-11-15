import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import noteContext from '../context/notes/NotesContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
export default function Notes() {
    const context=useContext(noteContext);
    const {notes,getNotes}=context
  console.log(context.notes)
  useEffect(()=>{
    console.log('hello!')
    getNotes();
  },[])
  return (
    <>
  <AddNote />
  
    <div style={{display:'flex',flexWrap:'wrap'}}>
      {
   notes.map((element)=>{
    return <div key={element._id}>
      <NoteItem note={element} />
    </div>
  })
}
    </div>
    </>
  )
}
