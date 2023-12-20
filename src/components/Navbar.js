import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/BrandLogo.png';

import 'bootstrap/dist/css/bootstrap.min.css';

export const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="black" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"> <Link to="/" style={{ textDecoration: 'none', marginLeft: '30px' }}> <img src={logo} alt="" /> </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{ color: 'white' }}> Web3Makr </Nav.Link>
                            <Nav.Link href="#action2" style={{ color: 'gray' }}> White Paper </Nav.Link>
                            <Nav.Link href="#action3" style={{ color: 'gray' }}> Services </Nav.Link>
                            <Nav.Link href="#action4" style={{ color: 'gray' }}> Tool </Nav.Link>
                            <Nav.Link href="#action5" style={{ color: 'gray' }}> Contact us </Nav.Link>


                        </Nav>
                        <Form className="d-flex" >
                            <Button
                                style={{
                                    backgroundColor: 'black',
                                    color: '#18ADE4',
                                    border: '#18ADE4 1px solid',
                                    borderRadius: '5px',
                                    padding: '10px 30px',
                                    marginRight: '50px',
                                    marginLeft: '50px'

                                }}
                            >Start for free</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
