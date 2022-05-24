import './App.css';
// import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuBar from './Pages/Shared/MenuBar';
import Login from './Pages/UserLogin/Login';
import SignUp from './Pages/UserLogin/SignUp';
import OrderPd from './Pages/OrderPd/OrderPd';
import PrivateAuth from './Pages/UserLogin/PrivateAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import Makeadmin from './Pages/Dashboard/Makeadmin';
function App() {
  return (
    <div className="mx-w-7xl mx-auto px-12">
      {/* <Navbar></Navbar> */}
      <MenuBar></MenuBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="makeAdmin" element={<Makeadmin></Makeadmin>}></Route>

        </Route>



        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/orderPd/:id" element={
          <PrivateAuth>
            <OrderPd></OrderPd>
          </PrivateAuth>

        }></Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
