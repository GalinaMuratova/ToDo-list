import React from 'react';

interface AddTaskFormProps {
    onInputChange: React.ChangeEventHandler;
}

const AddTaskForm: React.FC<AddTaskFormProps> = props => {
    return (
        <div>
            <form className="form-task">
                <input type="text" onChange={props.onInputChange} placeholder="Add new task"/>
                <button type="button">Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;