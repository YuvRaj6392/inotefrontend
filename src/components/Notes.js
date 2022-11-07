import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/NotesContext';
import NoteState from '../context/notes/NotesStates';
import NoteItem from './NoteItem';
export default function Notes() {
    const context=useContext(noteContext);
  console.log(context.notes)
 
  return (
    <div style={{display:'flex'}}>
      {
  context.notes.map((element)=>{
    return <div>
      <NoteItem note={element} />
    </div>
  })
}
    </div>
  )
}
