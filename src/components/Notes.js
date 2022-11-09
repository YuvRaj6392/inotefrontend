import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/NotesContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';
export default function Notes() {
    const context=useContext(noteContext);
    const {notes}=context
  console.log(context.notes)
 
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
