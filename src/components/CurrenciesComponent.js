import React from 'react';
import {Table} from "react-bootstrap";
import currencyList from "../data/currencies.json";

function Currencies() {
    return (<React.Fragment>
        <div>
            <h1>Currencies</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ISO 4217</th>
                    <th>Name</th>
                    <th>Countries</th>
                </tr>
                </thead>
                <tbody>
                {currencyList.map((currency, index) => (
                    <tr key={index}>
                        <td>{currency.iso}</td>
                        <td>{currency.name}</td>
                        <td>{currency.countries}</td>
                    </tr>))
                }
                </tbody>
            </Table>
        </div>
    </React.Fragment>)
}

export default Currencies;