import React from 'react';

interface TaskProps {
    key: string;
    text: string;
}
const Task: React.FC<TaskProps> = props => {
    return (
        <div className="task">
          <span>{props.text}</span>
          <button type="button">Delete</button>
        </div>
    );
};

export default Task;