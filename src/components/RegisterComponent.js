import React, {useState} from 'react';
import {Alert, Button, Form, FormGroup} from "react-bootstrap";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function registerUser() {
        if (username.trim() !== '' && password.trim() !== '') {
            const data = {
                username: username,
                password: password
            }
            fetch('http://localhost/backend-gtc/user.php', {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(response => {
                response.text().then(text => {
                    if (text !== 'Successful') {
                        setError('Registrierung fehlgeschlagen. Benutzername bereits vergeben.');
                    } else {
                        setError('');
                        setSuccess('Registrierung erfolgreich! Du wirst gleich zum Login weitergeleitet.');
                        setTimeout(() => {
                            window.location.href = '/gtc/login';
                        }, 4000);
                    }
                })
            })
        } else {
            setError('Benutzername oder Passwort fehlen');
            setSuccess('');
        }
    }

    function handleChangeUsername(e) {
        setUsername(e.target.value);
    }


    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (<React.Fragment>
        <h1>Register</h1>
        <Form.Group className="mb-3" controlId="test">
            <p>Benutzername:</p>
            <Form.Control type="text" placeholder="Benutzername" value={username} onChange={handleChangeUsername}/>
        </Form.Group>
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