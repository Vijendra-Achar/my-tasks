import React from 'react';

import './TaskCard.scss';

function TaskCard({ todo }) {
  return (
    <div className="taskcard">
      <div className="taskcard-header flex align-center">
        <div className="taskcard-title">{todo.title}</div>
      </div>
      <div className="taskcard-body">{todo.description}</div>
    </div>
  );
}

export default TaskCard;
