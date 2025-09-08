import React, {useState} from 'react';
import {Button, Form, FormGroup} from "react-bootstrap";
import currencyRates from "../data/rates.json";

function Calculator() {
    const [fromValue, setFromValue] = useState("");
    const [result, setResult] = useState("");
    const [fromCurrency, setFromCurrency] = useState(currencyRates.length > 0 ? currencyRates[0].currency : "");
    const [toCurrency, setToCurrency] = useState(currencyRates.length > 0 ? currencyRates[0].currency : "");

    function handleChangeFromValue(e) {
        setFromValue(e.target.value);
    }

    function calculateAndSaveResult() {
        if (fromValue.trim() !== '') {
            const currencyRate = currencyRates.filter(rate => rate.currency === fromCurrency)[0].rates.filter(goalRate => goalRate.to === toCurrency)[0].value;
            const result = (fromValue * currencyRate).toFixed(2);
            setResult(result);
            const date = new Date();
            const dateString = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
            const data = {
                username: localStorage.getItem('username'),
                fromCurrency: fromCurrency,
                toCurrency: toCurrency,
                rate: currencyRate,
                fromValue: fromValue,
                result: result,
                date: dateString
            }
            fetch('http://localhost/backend-gtc/rates.php', {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(response => {
                response.text().then(text => console.log(text));
            })
        }
    }

    function handleChangeFromCurrency(e) {
        setFromCurrency(e.target.value);
    }

    function handleChangeToCurrency(e) {
        setToCurrency(e.target.value);
    }

    return (
        <React.Fragment>
            <h1>Calculator</h1>
            <Form>
                <Form.Group className="mb-3">
                    <p>Ursprungswährung:</p>
                    <Form.Select onChange={handleChangeFromCurrency} value={fromCurrency}>
                        {currencyRates.map((rate) => rate.currency).map((currency) => (
                            <option>{currency}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="fromCurrency">
                    <Form.Control type="number" value={fromValue} onChange={handleChangeFromValue}
                                  placeholder="Ursprungswert"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="test">
                    <p>Zielwährung:</p>
                    <Form.Select onChange={handleChangeToCurrency} value={toCurrency}>
                        {currencyRates.map((rate) => rate.currency).map((currency) => (
                            <option>{currency}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <FormGroup className="mb-3" controlId="hello">
                    <Form.Control type="number" placeholder="Resultat" value={result} readOnly/>
                </FormGroup>
                <Button variant="success" class="margin-bottom" onClick={calculateAndSaveResult}>Berechnen</Button>
            </Form>

        </React.Fragment>
    )
}

export default Calculator;