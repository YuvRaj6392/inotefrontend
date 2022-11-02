

import { useState } from 'react'
import noteContext from './NotesContext'
const NoteState=(props)=>{
    const s1={
        "name":"yuvraj",
        "occupation":"software engineer"
    }

    const update=()=>{
        setTimeout(() => {
            setState({
                "name":"harry",
                "occupation":"Front end developer"
            }) 
        }, 2000);
    }

    const [state,setState]=useState(s1);

    return (
<noteContext.Provider value={{state:state,update:update}} >
        {props.children}
    </noteContext.Provider>
    )
    
}

export default NoteState
