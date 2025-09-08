import React from 'react';
import {Table} from "react-bootstrap";
import ratesList from "../data/rates.json";

function Rates() {
    return (<React.Fragment>
        <h1>Rates</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>von</th>
                <th>nach</th>
                <th>CHF</th>
                <th>EUR</th>
                <th>USD</th>
                <th>GBP</th>
            </tr>
            </thead>
            <tbody>
            {ratesList.map((rate) => (
                <tr>
                    <td colspan="2">{rate.currency}</td>
                    {rate.rates.map(rate => (
                        <td>{rate.value}</td>
                    ))}
                </tr>))
            }
            </tbody>
        </Table>
        <p>Tabelle der Devisenkurse (Stand: 01.01.2023)</p>
    </React.Fragment>)
}

export default Rates;