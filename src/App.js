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
import RequireAdmin from './Pages/UserLogin/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blogs from './Pages/Portfolio/Blogs';
function App() {
  return (
    <div className="mx-w-7xl mx-auto px-12">
      {/* <Navbar></Navbar> */}
      <MenuBar></MenuBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route  index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>

          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="makeAdmin" element={<RequireAdmin><Makeadmin></Makeadmin></RequireAdmin>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="manageOrder" element={<ManageOrder></ManageOrder>}></Route>
          <Route path="manageProduct" element={<ManageProduct></ManageProduct>}></Route>

        </Route>



        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/orderPd/:id" element={
          <PrivateAuth>
            <OrderPd></OrderPd>
          </PrivateAuth>

        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
