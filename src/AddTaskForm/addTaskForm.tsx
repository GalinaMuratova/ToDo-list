import React from 'react';

interface AddTaskFormProps {
    onInputChange: React.ChangeEventHandler;
    onAddTask: React.MouseEventHandler;
}

const AddTaskForm: React.FC<AddTaskFormProps> = props => {
    return (
        <div>
            <form className="form-task">
                <input className="input-task" type="text" onChange={props.onInputChange} placeholder="Add new task"/>
                <button className="add-btn" type="button" onClick={props.onAddTask}>Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;