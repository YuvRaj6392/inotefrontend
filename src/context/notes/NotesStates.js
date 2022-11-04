

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
      }
    ]
  const [notes,setNotes]=useState(notesInitial)
    return (
<noteContext.Provider value={{notes,setNotes}} >
        {props.children}
    </noteContext.Provider>
    )
    
}

export default NoteState
