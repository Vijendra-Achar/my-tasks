import React from 'react';

import './TaskCard.scss';

function TaskCard({ todo }) {
  return (
    <div className="taskcard">
      <div className="taskcard-header flex align-center">
        <div className="taskcard-title">{todo.name}</div>

        <div className="taskcard-check-mark">✔️</div>
      </div>
      <div className="taskcard-body">{todo.body}</div>
    </div>
  );
}

export default TaskCard;
