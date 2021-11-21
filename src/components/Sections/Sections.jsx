import React from 'react';

import TaskCard from '../TaskCard/TaskCard.jsx';

import './Sections.scss';

function Sections({ todos }) {
  return (
    <div className="sections container">
      <div className="sections-inprogress">
        <div className="sections-heading">Things you've gotta do 🧾</div>
        <div className="home container flex flex-row flex-row-wrap justify-space-between ">
          {todos && todos.length > 0 && todos.map((todo) => <TaskCard key={todo.taskId} todo={todo} />)}
        </div>
      </div>
      <div className="sections-completed">
        <div className="sections-heading">Job done ✔️</div>

        <div className="home container flex flex-row flex-row-wrap justify-space-between ">
          {todos && todos.length > 0 && todos.map((todo) => <TaskCard key={todo.id} todo={todo} />)}
        </div>
      </div>
    </div>
  );
}

export default Sections;
