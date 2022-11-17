import React from "react";
import { useEffect,useRef,useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NotesContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
export default function Notes() {
   
   const [note,setNote]=useState({etitle:"",edescription:"",etag:""})
  const ref=useRef(null)
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  console.log(context.notes);
  useEffect(() => {
    console.log("hello!");
    getNotes();
    //eslint-disable-next
  }, []);
  
const [noteId,setNoteId]=useState('');

  const updateNote = (currentNote) => {
    ref.current.click();
    setNoteId(currentNote._id)
    setNote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
    
    
  };

  const updateModal=()=>{
    editNote(noteId,note.etitle,note.edescription,note.etag)
  }


  const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  
  return (
    <>
      <AddNote />
      
<button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:'none'}}>
  Launch demo modal 
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className='mb-3'>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control"  name="etitle" value={note.etitle}     onChange={onChange}/>
   
  </div>
  <div className="mb-3">
    <label className="form-label">Description</label>
    <input type="text" className="form-control" id="eDescription"  name="edescription" value={note.edescription}     onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag"  name="etag"   value={note.etag}   onChange={onChange}/>
  </div>
  </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={updateModal}>update note</button>
      </div>
    </div>
  </div>
</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.map((element) => {
          return (
            <div key={element._id}>
              <NoteItem updateNote={updateNote} note={element} />
            </div>
          );
        })}
      </div>
    </>
  );
}
