import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/addTaskForm";
import Task from "./Task/task";

function App() {
    const [tasks, setTask] = useState([
        { id: '1', text: 'Text 1' },
        { id: '2', text: 'Text 2' },
        { id: '3', text: 'Text 3' },
    ]);

    const [currentTask, setCurrentTask] = useState('');

    const inputChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
        console.log(currentTask);
    };

    return (
        <div className="App">
            <AddTaskForm onInputChange={inputChangeText}/>
            {tasks.map((task) => (
                <Task key={task.id} text={task.text}/>
            ))}
        </div>
    );
}

export default App;

