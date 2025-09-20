import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";

function Rates() {
    const [ratesList, setRatesList] = useState(new Map());

    useEffect(() => {
        fetch('http://localhost:3005/rates', {
            method: 'GET',
        }).then(response => {
            response.json().then(data => {
                const currencyData = new Map();
                data.forEach(currency => {
                    currencyData.set(currency.from_currency);
                })
                currencyData.forEach((value, key) => {
                    currencyData.set(key, data.filter(rate => rate.from_currency === key));
                });
                setRatesList(currencyData);
            });
        });
    }, [ratesList]);


    return (<React.Fragment>
        <h1>Rates</h1>
        {<Table striped bordered hover>
            <thead>
            <tr>
                <th>von</th>
                <th>nach</th>
                <th>Kurs</th>
            </tr>
            </thead>
            <tbody>
            {Array.from(ratesList.entries()).map(([fromCurrency, rates]) => (
                <React.Fragment key={fromCurrency}>
                    {rates.map((rate, index) => (
                        <tr key={`${fromCurrency}-${rate.to_currency}`}>
                            {index === 0 && (
                                <td rowSpan={rates.length}>{fromCurrency}</td>
                            )}
                            <td>{rate.to_currency}</td>
                            <td>{rate.rate}</td>
                        </tr>
                    ))}
                </React.Fragment>
            ))}
            </tbody>
        </Table>}
        <p>Tabelle der Devisenkurse (Stand: 01.01.2023)</p>
    </React.Fragment>)
}

export default Rates;