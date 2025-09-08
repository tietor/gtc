
import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";

function Calculation() {
    const [calculations, setCalculations] = useState([]);

    useEffect(() => {
        fetch('http://localhost/backend-gtc/rates.php', {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCalculations(data);
            })
    }, []);

    return (
        <React.Fragment>
            <h1>Calculations</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Benutzername</th>
                    <th>Datum</th>
                    <th>Ursprungswährung</th>
                    <th>Zielwährung</th>
                    <th>Umwandlungskurs</th>
                    <th>Ursprungsbetrag</th>
                    <th>Zielbetrag</th>
                </tr>
                </thead>
                <tbody>
                {calculations.map((calculation, index) => (
                    <tr key={index}>
                        <td>{calculation.username}</td>
                        <td>{calculation.date}</td>
                        <td>{calculation.from_currency}</td>
                        <td>{calculation.to_currency}</td>
                        <td>{calculation.exchange_rate}</td>
                        <td>{calculation.from_value}</td>
                        <td>{calculation.to_value}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </React.Fragment>
    );
}

export default Calculation;