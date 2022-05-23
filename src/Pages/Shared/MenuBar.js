import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
// import useAuth from '../../../components/hooks/useAuth';
// import ProfilePopper from '../../../components/ProfilePopper/ProfilePopper';

const MenuBar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        toast.error('Logged Out')
        // localStorage.removeItem('accessToken');
      };
    // const { photoURL: img } = user;

   
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="primary"
            fixed="top"
            className={(isSticky || isCollapsed) ? "text-kalo shadow-sm bg-white py-2" : "py-4"}>
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/home"
                >
                    <img width="40"
                        height="40"
                        className="d-inline-block align-top mr-2" src="https://i.ibb.co/mqrYLbg/car-1.png" alt="" />
                    <strong className="rounded px-2 bg-base-100">Auto Parts</strong>
                </Navbar.Brand>

                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="rounded px-2 bg-base-100 hover:bg-gray-300" as={Link} to="/">Home</Nav.Link>

                        <Nav.Link className="rounded px-2 bg-base-100 mx-2 hover:bg-gray-300" as={Link} to="/carsCollection">Available Parts</Nav.Link>

                        <Nav.Link className="rounded px-2 bg-base-100 hover:bg-gray-300" as={Link} to="/contact">Contact Us</Nav.Link>

                        <Nav.Link className="rounded px-2 mx-2 bg-base-100 hover:bg-gray-300">
                            {
                                
                            user ? <button className="btn btn-ghost"  onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>
                            
                            }
                            
                        </Nav.Link>



                        {/* {user.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>} */}


                        {/* {!user?.email ?
                            <Link to="/login" className="btn-book">Login</Link>
                            :
                            <div>
                                <div className="user-img">
                                    <ProfilePopper />
                                </div>
                                <Toaster />
                            </div>

                        } */}




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;