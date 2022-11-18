import React from "react";
import { useEffect,useRef,useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NotesContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
export default function Notes() {
   
    const [etitle,seteTitle]=useState("");
    const [edescription,seteDescription]=useState("");
    const [etag,seteTag]=useState("General");
   
   
  const ref=useRef(null)
  const refclose=useRef(null)
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  console.log(context.notes);
  useEffect(() => {
    console.log("hello!");
    getNotes();
  }, []);
  
const [noteId,setNoteId]=useState('');

  const updateNote = (note) => {
    ref.current.click();
    setNoteId(note._id);
    seteTitle(note.title);
    seteDescription(note.description);
    seteTag(note.tag);

    
    
  };

  const updateModal=()=>{
    editNote(noteId,etitle,edescription,etag)
    refclose.current.click();
  }

  
  return (
    <>
      <AddNote />
      
<button ref={ref} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display:'none'}}>
  Launch demo modal 
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className='mb-3'>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" value={etitle}      onChange={(e)=>{
      seteTitle(e.target.value)
    }}/>
   
  </div>
  <div className="mb-3">
    <label className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" name="edescription" value={edescription} onChange={(e)=>{
      seteDescription(e.target.value)
    }}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={etag}  onChange={(e)=>{
      seteTag(e.target.value)
    }}/>
  </div>
  </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" ref={refclose} data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={updateModal}>update note</button>
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
