

import { useState } from 'react'
import noteContext from './NotesContext'
const NoteState=(props)=>{
  const host="http://localhost:8080"
  const notesInitial=[]

    const [notes,setNotes]=useState(notesInitial)
    const getNotes=async ()=>
   {
    console.log('I have been called!')
    //api call
    const response = await fetch(`http://localhost:8080/api/notes?id=6373d041a5d6f8de6a11656c`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        "x-access-token":'eyJhbGciOiJIUzI1NiJ9.NjM3M2QwNDFhNWQ2ZjhkZTZhMTE2NTZj.xrafRUjDQXrNzMnxpHSxhbflj1ONOjfRZxmqBojpBV8'
      },
    });
    const json=await(response.json())

    console.log(json.message);
    setNotes(json.message) 
    
    
   
 
    
   }

    

   //add a note 
   const addNote=async (note)=>
   {
    //api call
    const response = await fetch(`http://localhost:8080/api/notes`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        "x-access-token":'eyJhbGciOiJIUzI1NiJ9.NjM3M2QwNDFhNWQ2ZjhkZTZhMTE2NTZj.xrafRUjDQXrNzMnxpHSxhbflj1ONOjfRZxmqBojpBV8'
      },
     
      body: JSON.stringify({
        user:note.user,
        title:note.title,
        description:note.description
      })
    });


    console.log(response.json()) 
    console.log("called!")
    console.log(notes)
    const noter=notes.concat(note);
    setNotes(noter)
   
 
    
   }

    //edit note
    const editNote=async (id,title,description,tag)=>{
      //API call
      console.log('edit note have been called!')
      const response = await fetch(`${host}/api/notes/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          "x-access-token":'eyJhbGciOiJIUzI1NiJ9.NjM3M2QwNDFhNWQ2ZjhkZTZhMTE2NTZj.xrafRUjDQXrNzMnxpHSxhbflj1ONOjfRZxmqBojpBV8'
        },
       
        body: JSON.stringify({
          title:title,
          description:description,
          tag:tag
        })
      });
      console.log(response.json()) 
      await getNotes()
      

      //Logic to edit
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        if(element._id===id)
        {
          element.title=title;
          element.description=description;
          element.tag=tag;
        }
        
      }
    }

    //delete note
    const deleteNode= async (_id)=>{
      //TODO Backend call!
      const response = await fetch(`${host}/api/notes/${_id}`, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json',
          "x-access-token":'eyJhbGciOiJIUzI1NiJ9.NjM3M2QwNDFhNWQ2ZjhkZTZhMTE2NTZj.xrafRUjDQXrNzMnxpHSxhbflj1ONOjfRZxmqBojpBV8'
        },
      });
      const json=await response.json();
      console.log(json.data)
      await getNotes()



      
    }


    


  
    return (
<noteContext.Provider value={{notes,addNote,deleteNode,getNotes,editNote}} >
        {props.children}
    </noteContext.Provider>
    )
    
}

export default NoteState
