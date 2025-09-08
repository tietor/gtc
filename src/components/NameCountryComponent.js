import React from 'react';
import {Table} from "react-bootstrap";
import countryList from "../data/countrydetails.json";
import {useNavigate} from "react-router";

function NameCountry() {
    const navigation = useNavigate();
    const handleRowClick = (shortName) => {
        navigation(`/gtc/country/${shortName}`);
    };

    return (<React.Fragment>
        <h1>Länder nach Name</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Offizieller Name</th>
            </tr>
            </thead>
            <tbody>
            {countryList.sort((a, b) => a.name.localeCompare(b.name)).map((country, index) => (
                <tr key={index}
                    onClick={() => handleRowClick(country.shortName)}>
                    <td>{country.name}</td>
                    <td>{country.officialName}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    </React.Fragment>);
}

export default NameCountry;