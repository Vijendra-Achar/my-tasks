import React, { useEffect, useState } from 'react';

import { getJSONplaceHolderComments } from '../../apiCalls/axios.js';

import Sections from './../../components/Sections/Sections.jsx';

import './Home.scss';

import './../../scss/_utilities.scss';

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('Use effect is called');

    getJSONplaceHolderComments()
      .then((data) => {
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
