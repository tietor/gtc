import React, {useState} from 'react';
import {Alert, Button, Form, FormGroup} from "react-bootstrap";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function registerUser() {
        if (username.trim() !== '' && password.trim() !== '' && firstname.trim() !== '' && lastname.trim() !== '') {
            const data = {
                username: username,
                firstname: firstname,
                lastname: lastname,
                password: password
            }
            fetch('http://localhost:3005/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => {
                if (response.ok) {
                    setSuccess('Registrierung erfolgreich! Du wirst gleich zum Login weitergeleitet.');
                    setTimeout(() => {
                        window.location.href = '/gtc/login';
                    }, 4000);
                    return;
                }

                if (response.status === 409) {
                    setError('Registrierung fehlgeschlagen. Benutzername bereits vergeben.');
                    return;
                }
                if (!response.ok) {
                    setError('Registrierung fehlgeschlagen.')
                }
            })
        } else {
            setError('Bitte alle Felder ausfüllen!');
            setSuccess('');
        }
    }

    function handleChangeUsername(e) {
        setUsername(e.target.value);
    }


    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function handleChangeFirstname(e) {
        setFirstname(e.target.value);
    }

    function handleChangeLastname(e) {
        setLastname(e.target.value);
    }

    return (<React.Fragment>
        <h1>Register</h1>
        <Form.Group className="mb-3" controlId="test">
            <p>Benutzername:</p>
            <Form.Control type="text" placeholder="Benutzername" value={username} onChange={handleChangeUsername}/>
        </Form.Group>
        <FormGroup className="mb-3" controlId="hello">
            <p>Vorname:</p>
            <Form.Control type="text" placeholder="Vorname" value={firstname} onChange={handleChangeFirstname}/>
        </FormGroup>
        <FormGroup className="mb-3" controlId="hello">
            <p>Nachname:</p>
            <Form.Control type="text" placeholder="Vorname" value={lastname} onChange={handleChangeLastname}/>
        </FormGroup>
        <FormGroup className="mb-3" controlId="hello">
            <p>Passwort:</p>
            <Form.Control type="password" placeholder="Passwort" value={password} onChange={handleChangePassword}/>
        </FormGroup>
        <Button variant="success" class="margin-bottom" onClick={registerUser}>Registrieren</Button>
        {error !== '' && (<FormGroup className="mb-3" controlId="hello">
            <Alert variant="danger" className="mb-3">{error}</Alert> </FormGroup>)}
        {success !== '' && (<FormGroup className="mb-3" controlId="hello">
            <Alert variant="success" className="mb-3">{success}</Alert></FormGroup>)}
    </React.Fragment>)
}

export default Register;