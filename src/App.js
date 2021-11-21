import Header from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';

import './App.scss';
import './scss/_utilities.scss';

function App() {
  return (
    <div>
      {/* Main Navigation Header */}
      <Header />

      {/* Router Paths */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/sign-up" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
