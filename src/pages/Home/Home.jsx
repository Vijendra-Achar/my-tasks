import React, { useEffect, useState } from 'react';

import { getJSONplaceHolderComments } from '../../apiCalls/axios.js';

import { getTasks } from './../../apiCalls/firebase/firebase-firestore.js';

import Sections from './../../components/Sections/Sections.jsx';

import './Home.scss';

import './../../scss/_utilities.scss';

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('Use effect is called');

    getTasks()
      .then((data) => {
        console.log('The Final Todo data', data);
        setTodos(data);
      })
      .catch((error) => {
        console.log('Home page error -> ', error);
      });
  }, []);

  return (
    <div className="home">
      <Sections todos={todos} />
    </div>
  );
}

export default Home;
