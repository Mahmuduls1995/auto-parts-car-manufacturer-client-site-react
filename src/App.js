import './App.css';
// import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuBar from './Pages/Shared/MenuBar';
import Login from './Pages/UserLogin/Login';
import SignUp from './Pages/UserLogin/SignUp';
import OrderPd from './Pages/OrderPd/OrderPd';
function App() {
  return (
    <div className="mx-w-7xl mx-auto px-12">
     {/* <Navbar></Navbar> */}
     <MenuBar></MenuBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/orderPd/:id" element={
         
            <OrderPd></OrderPd>
      
        }></Route>
        
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
