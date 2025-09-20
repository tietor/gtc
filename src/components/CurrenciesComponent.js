import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";

function Currencies() {
    const [currencyList, setCurrencyList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/countries', {
            method: 'GET',
        }).then(response => {
            response.json().then(data => {
                setCurrencyList(data);
            })
        });
    }, []);


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