import React from 'react';
import {Table} from "react-bootstrap";
import countryList from "./../data/countrydetails.json";
import {useNavigate} from "react-router";





function ShortcutCountry() {
    const navigation = useNavigate();
    const handleRowClick = (shortName) => {
        navigation(`/gtc/country/${shortName}`);
    };

    return (<React.Fragment>
        <h1>Länder nach ISO 3166</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ISO 3166:</th>
                <th>Name:</th>
            </tr>
            </thead>
            <tbody>
            {countryList.sort((a, b) => a.shortName.localeCompare(b.shortName)).map((country, index) => (
                <tr key={index}
                    onClick={() => handleRowClick(country.shortName)}>
                    <td>{country.shortName}</td>
                    <td>{country.name}</td>
                </tr>
            ))}

            </tbody>
        </Table>
    </React.Fragment>)
}

export default ShortcutCountry;