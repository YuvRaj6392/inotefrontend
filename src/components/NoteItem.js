import React from "react";
import { useState } from "react";
import { useContext } from 'react'
import noteContext from '../context/notes/NotesContext';
export default function NoteItem(props) {
  const context=useContext(noteContext);
  const {deleteNode}=context;

  
  
  return (
    <div>
      <div className="card me-3 my-3" >
        <div className="card-body">
          <h5 className="card-title">{props.note.title}
           <i className="fa-solid fa-trash" onClick={()=>{deleteNode(props.note._id)}} ></i>
          <i className="fa-solid fa-file-pen ms-3"  onClick={()=>props.updateNote(props.note)}></i></h5>
          <p className="card-text">
           {props.note.description}
          </p>
          <p className="lead">{props.note.tag}</p>
         
        </div>
      </div>
     



<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}



