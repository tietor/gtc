import React from 'react';
import {useNavigate} from "react-router";
import {Table} from "react-bootstrap";
import countryList from "../data/countrydetails.json";

function PopulationCountry() {
    const navigation = useNavigate();
    const handleRowClick = (shortName) => {
        navigation(`/gtc/country/${shortName}`);
    };
    return (<React.Fragment>
            <h1>Länder nach Fläche</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name:</th>
                    <th>Einwohner:</th>
                    <th>Rang:</th>
                </tr>
                </thead>
                <tbody>
                {countryList.sort((a, b) => b.population.number - a.population.number).map((country, index) => (
                    <tr key={index}
                        onClick={() => handleRowClick(country.shortName)}>
                        <td>{country.name}</td>
                        <td>{country.population.number}</td>
                        <td>{country.population.rank}</td>
                    </tr>
                ))}

                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default PopulationCountry;