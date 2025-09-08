import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";


function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (localStorage.getItem('username')) {
            setUsername(localStorage.getItem('username'));
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            setUsername('');
        }
    }, []);

    function logoutUser() {
        localStorage.removeItem('username');
        window.location.href = '/gtc/home';
        setIsLoggedIn(false);
        setUsername('');
    }

    return (<Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="/">GTC</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav className="me-auto">
                    <Nav.Link href="/gtc/home">Home</Nav.Link>
                    <Nav.Link href="/gtc/currencies">Currencies</Nav.Link>
                    <Nav.Link href="/gtc/rates">Rates</Nav.Link>
                    <Nav.Link href="/gtc/calculator">Calculator</Nav.Link>
                    <Nav.Link href="/gtc/calculations">Calculations</Nav.Link>
                    <NavDropdown title="Länder">
                        <NavDropdown.Item href="/gtc/countries/shortnamesort">Sortiert nach ISO 3166</NavDropdown.Item>
                        <NavDropdown.Item href="/gtc/countries/namesort">Sortiert nach Name</NavDropdown.Item>
                        <NavDropdown.Item href="/gtc/countries/areasort">Sortiert nach Fläche</NavDropdown.Item>
                        <NavDropdown.Item href="/gtc/countries/populationsort">Sortiert nach
                            Bevölkerung</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            {isLoggedIn && (<React.Fragment>
                <Navbar.Toggle/>

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>Eingeloggt als {username}</Navbar.Text>
                    <Nav className="me-auto">
                        <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </React.Fragment>)}
            {!isLoggedIn && (<React.Fragment>
                <Navbar.Toggle/>

                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="/gtc/login">Login</Nav.Link>
                        <Nav.Link href="/gtc/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </React.Fragment>)}
        </Container>
    </Navbar>)
}

export default Header;