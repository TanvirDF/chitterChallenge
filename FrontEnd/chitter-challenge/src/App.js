import ChitterWall from './Components/ChitterWall';
import './App.css';
import PostPeep from './Components/PostPeep';
import Chitter from './Components/Chitter';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState();

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path='/' element={<Chitter user={user} />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>

      </Router>

      {/* <ChitterWall /> */}
      {/* <PostPeep /> */}

    </>

  );
}

export default App;
