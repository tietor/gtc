import React from 'react';
import {Table} from "react-bootstrap";

function Currencies() {
    return (<React.Fragment>
        <h1>Currencies</h1>
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
            <tr>
                <td colspan="2">CHF</td>
                <td>1.00000000</td>
                <td>1.01019620</td>
                <td>1.08160580</td>
                <td>0.89400415</td>
            </tr>
            <tr>
                <td colspan="2">EUR</td>
                <td>0.98990673</td>
                <td>1.00000000</td>
                <td>1.07068890</td>
                <td>0.88498073</td>
            </tr>
            <tr>
                <td colSpan="2">USD</td>
                <td>0.92455124</td>
                <td>0.93397813</td>
                <td>1.00000000</td>
                <td>0.82655265</td>
            </tr>
            <tr>
                <td colSpan="2">GBP</td>
                <td>1.11856310</td>
                <td>1.12996810</td>
                <td>1.20984430</td>
                <td>1.00000000</td>
            </tr>
            <tr></tr>
            </tbody>
        </Table>
        <p>Tabelle der Devisenkurse (Stand: 01.01.2023)</p>
    </React.Fragment>)
}

export default Currencies;