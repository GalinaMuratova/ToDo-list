import React from 'react';

const AddTaskForm = () => {
    return (
        <div>
            <form className="form-task">
                <input type="text" placeholder="Add new task"/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;