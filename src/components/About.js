import noteContext from '../context/notes/NotesContext'
import React,{ useContext } from 'react'
import { useEffect } from 'react'
export default function About() {
  const a=useContext(noteContext)
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  },[])
  return (
    <div>
    This is About {a.state.name} and his occupation is {a.state.occupation}
    </div>
  )
}
