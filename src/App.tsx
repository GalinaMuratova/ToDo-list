import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/addTaskForm";
import Task from "./Task/task";

function App() {
    const [tasks, setTask] = useState([
        { id: '1', text: 'To conquer the world' },
        { id: '2', text: 'Subjugate humanity' },
        { id: '3', text: 'Cook dinner' },
    ]);

    const [currentTask, setCurrentTask] = useState('');

    const inputChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentTask(event.target.value);
    };

    const addTask = () => {
        const taskId = String(Date.now());

        const newTask = {
            id: taskId,
            text: currentTask
        };
        setTask([...tasks, newTask]);
    };
    const deleteTask = (id: string) => {
        const taskCopy = [...tasks];
        const index = tasks.findIndex(task => task.id === id)
        taskCopy.splice(index, 1);
        setTask(taskCopy);
    };

    return (
        <div className="App">
            <h1>To do list</h1>
            <AddTaskForm onInputChange={inputChangeText} onAddTask={addTask} />
            {tasks.map((task) => (
                <Task key={task.id} text={task.text} remove={() => deleteTask(task.id)}/>
            ))}
        </div>
    );
}

export default App;

