import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx';

import './App.scss';
import './scss/_utillities.scss';

function App() {
  return (
    <div>
      {/* Main Navigation Header */}
      <Header />

      {/* Router Paths */}
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
