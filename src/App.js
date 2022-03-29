import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import UserDetail from './Components/UserDetail/UserDetail';
import Users from './Components/Users/Users';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>
        <Route path="/user/:userId" element={<UserDetail></UserDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
