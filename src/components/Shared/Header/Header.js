import { signOut } from '@firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';



const Header = () => {
     const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    } 
    return (
        <div>
               <Navbar collapseOnSelect expand="lg"   bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                    <img height={32}  className='rounded' src={`https://spng.subpng.com/20190626/ryc/kisspng-motorcycle-decal-sport-bike-sticker-yamaha-yzf-r6-5d13f9a6bc1395.5887965815615901827704.jpg`} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           
                           
                           
                        </Nav>
                        <Nav>
                        <Nav.Link className="fw-bolder hover:text-white"as={Link} to="Home" >Home</Nav.Link>
                        <Nav.Link className="fw-bolder hover:text-white"as={Link} to="ContactUs" >Contact_Us</Nav.Link>
                       <Nav.Link className="fw-bolder hover:text-white"as={Link} to="ManageInventories" >Manage_Inventories</Nav.Link>
                          
                            <Nav.Link className="fw-bolder hover:text-white" as={Link} to="Blogs">
                                Blogs
                            </Nav.Link>
                            {
                                 user ?
                                  <div className="d-flex mx-auto ">
                                         <Nav.Link className="fw-bolder hover:text-white" as={Link}  to="Manage_Items">Manage_Items</Nav.Link>
                                         <Nav.Link className="fw-bolder hover:text-white" as={Link}  to="Add_Item">Add_Item</Nav.Link>
                                         <Nav.Link className="fw-bolder hover:text-white" as={Link}  to="My_Items">My_items</Nav.Link>
                                        <Nav.Link className='btn btn-link fw-bolder hover:text-white text-decoration-none' onClick={handleSignOut}>Log Out</Nav.Link>
                                 
                                  </div>
                                    
                                : 
                                <Nav.Link className="fw-bolder hover:text-white" as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;