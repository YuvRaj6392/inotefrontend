import React from "react";
import { useState } from "react";
import { useContext } from 'react'
import noteContext from '../context/notes/NotesContext';
export default function NoteItem(props) {
  const context=useContext(noteContext);
  const {deleteNode}=context;

  console.log(props.note.title);
  
  return (
    <div>
      <div className="card me-3 my-3" >
        <div className="card-body">
          <h5 className="card-title">{props.note.title}
           <i class="fa-solid fa-trash" onClick={()=>{deleteNode(props.note._id)}} ></i>
          <i class="fa-solid fa-file-pen ms-3"  onClick={()=>props.updateNote(props.note)}></i></h5>
          <p className="card-text">
           {props.note.description}
          </p>
         
        </div>
      </div>
     



<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}



