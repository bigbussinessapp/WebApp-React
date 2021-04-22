import React, { useState } from "react";
import Task from "./Task";
import CreateTask from "./CreateTask"
import Header from "../Header/Header";

import "./task.css";

function Tasks() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateTask onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Task
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      
    </div>
  );
}

export default Tasks;
