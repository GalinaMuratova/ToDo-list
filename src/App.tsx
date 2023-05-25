import React from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/addTaskForm";
import Task from "./Task/task";

function App() {
  return (
    <div className="App">
        <AddTaskForm/>
        <Task/>
    </div>
  );
}

export default App;
