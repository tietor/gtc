import React, {useState} from 'react';
import {Alert, Button, Form, FormGroup} from "react-bootstrap";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleChangeUsername(e) {
        setUsername(e.target.value);
    }


    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function loginUser() {
        if (username.trim() !== '' && password.trim() !== '') {
            fetch('http://localhost/backend-gtc/user.php?username=' + username, {
                method: 'GET',
            }).then(response => {
                response.text().then(text => {
                    if (text === 'Failed') {
                        setError('Login fehlgeschlagen. Versuche es später nochmals.');
                    } else {
                        if (text === password) {
                            localStorage.setItem('username', username);
                            window.location.href = '/gtc/home';
                        } else {
                            setError('Benutzername oder Passwort falsch.')
                        }
                    }
                })
            })
        } else {
            setError('Benutzername oder Passwort fehlen');
        }
    }

    return (<React.Fragment>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="test">
            <p>Benutzername:</p>
            <Form.Control type="text" placeholder="Benutzername" value={username} onChange={handleChangeUsername}/>
        </Form.Group>
        <FormGroup className="mb-3" controlId="hello">
            <p>Passwort:</p>
            <Form.Control type="password" placeholder="Passwort" value={password} onChange={handleChangePassword}/>
        </FormGroup>
        <Button variant="success" class="margin-bottom" onClick={loginUser}>Login</Button>
        {error !== '' && (<FormGroup className="mb-3" controlId="hello">
            <Alert variant="danger" className="mb-3">{error}</Alert> </FormGroup>)}
    </React.Fragment>);
}

export default Login;