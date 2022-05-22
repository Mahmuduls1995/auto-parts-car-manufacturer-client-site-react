import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Navbar/Navbar';

function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        
        {/* <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
