import React from 'react';
import {Table} from "react-bootstrap";

function Rates() {
    return (<React.Fragment>
        <div>
            <h1>Rates</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ISO 4217</th>
                    <th>Name</th>
                    <th>Countries</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CHF</td>
                    <td>Swiss Franc</td>
                    <td>Liechtenstein<br/>Switzerland</td>
                </tr>
                <tr>
                    <td>CZK</td>
                    <td>Czech Koruna</td>
                    <td>Czechia</td>
                </tr>
                <tr>
                    <td>EUR</td>
                    <td>Euro</td>
                    <td>Austria<br/>Belgium<br/>France<br/>Germany<br/>Italy<br/>Spain<br/>Vatican City</td>
                </tr>
                <tr>
                    <td>GBP</td>
                    <td>Pound Sterling</td>
                    <td>United Kingdom</td>
                </tr>
                <tr>
                    <td>SEK</td>
                    <td>Swedish Krona</td>
                    <td>Sweden</td>
                </tr>
                <tr>
                    <td>TRY</td>
                    <td>Turkish Lira</td>
                    <td>Turkey</td>
                </tr>
                <tr>
                    <td>USD</td>
                    <td>United States Dollar</td>
                    <td>United States</td>
                </tr>
                </tbody>
            </Table>
        </div>
    </React.Fragment>)
}

export default Rates;