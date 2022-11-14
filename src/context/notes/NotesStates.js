

import { useState } from 'react'
import noteContext from './NotesContext'
const NoteState=(props)=>{
  const notesInitial=
     [
      {
        "_id": "636555c8f181f0e226c66992",
        "user": "6365555af181f0e226c6698f",
        "title": "Monday Notes",
        "description": "It was a nice day today",
        "tag": "General",
        "createdAt": "2022-11-04T18:11:20.583Z",
        "updatedAt": "2022-11-04T18:11:20.583Z",
        "__v": 0
      },
      {
        "_id": "636555d9f181f0e226c66994",
        "user": "6365555af181f0e226c6698f",
        "title": "tuesday Notes",
        "description": "It was a nice day on tuesday",
        "tag": "General",
        "createdAt": "2022-11-04T18:11:37.068Z",
        "updatedAt": "2022-11-04T18:11:37.068Z",
        "__v": 0
      },
      {
        "_id": "636555d9f181f0e226c669934",
        "user": "6365555af181f0e226c6698f",
        "title": "wednesday Notes",
        "description": "It was a nice day on tuesday",
        "tag": "General",
        "createdAt": "2022-11-04T18:11:37.068Z",
        "updatedAt": "2022-11-04T18:11:37.068Z",
        "__v": 0
      },
      {
        "_id": "636555d9f181f0e2326c66994",
        "user": "6365555af181f0e226c6698f",
        "title": "thurday Notes",
        "description": "It was a nice day on tuesday",
        "tag": "General",
        "createdAt": "2022-11-04T18:11:37.068Z",
        "updatedAt": "2022-11-04T18:11:37.068Z",
        "__v": 0
      },
      {
        "_id": "636555d9f1381f0e226c636994",
        "user": "6365555af181f0e226c6698f",
        "title": "friday Notes",
        "description": "It was a nice day on tuesday",
        "tag": "General",
        "createdAt": "2022-11-04T18:11:37.068Z",
        "updatedAt": "2022-11-04T18:11:37.068Z",
        "__v": 0
      },
      
    ]

    const [notes,setNotes]=useState(notesInitial)

   const addNote=(note)=>
   {
    console.log("called!")
    console.log(notes)
    const noter=notes.concat(note);
    setNotes(noter)
   
 
    
   }

    //edit note
    const editNote=(title,description,tag)=>{

    }

    //delete note
    const deleteNode=(_id)=>{
      //TODO Backend call!
      console.log('delete the node with'+_id);
      var newNote=[];
      for(var i=0;i<notes.length;i++)
      {
        if(notes[i]._id===_id)
        {
          continue;
        }
        else
        {
          newNote.push(notes[i])
        }
      }
      console.log(newNote)
      setNotes(newNote);
      
    }


    


  
    return (
<noteContext.Provider value={{notes,addNote,deleteNode}} >
        {props.children}
    </noteContext.Provider>
    )
    
}

export default NoteState
