import React from "react";

export default function NoteItem(props) {
  console.log(props.note.title);
  return (
    <div>
      <div className="card me-3 my-3" >
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">
           {props.note.description}
          </p>
        </div>
      </div>
    </div>
  );
}
