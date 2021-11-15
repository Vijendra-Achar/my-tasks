import React, { useEffect, useState } from 'react';

import axios from 'axios';

import TaskCard from '../../components/TaskCard/TaskCard';

import './Home.scss';

import './../../scss/_utilities.scss';

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('Use effect is called');

    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((data) => {
        console.log('The Todo data', data);

        setTodos(data.data);
      })
      .catch((error) => {
        console.error('An error occured while fetching the todos -> ', error);
      });
  }, []);

  return (
    <div className="home container flex flex-row flex-row-wrap justify-space-between ">
      {todos && todos.length > 0 && todos.map((todo) => <TaskCard key={todo.id} todo={todo} />)}
    </div>
  );
}

export default Home;
