import React from 'react';

interface TaskProps {
    text: string;
    remove: React.MouseEventHandler;
}
const Task: React.FC<TaskProps> = props => {
    return (
        <div className="task">
          <span>{props.text}</span>
          <button type="button" onClick={props.remove}>Delete</button>
        </div>
    );
};

export default Task;