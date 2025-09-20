import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import {Table} from "react-bootstrap";

function PopulationCountry() {
    const navigation = useNavigate();
    const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3005/countriesByPopulationSort', {
            method: 'GET',
        }).then(response => {
            response.json().then(data => {
                setCountryList(data);
            })
        });
    }, []);
    const handleRowClick = (shortName) => {
        navigation(`/gtc/country/${shortName}`);
    };
    return (<React.Fragment>
            <h1>Länder nach Bevölkerung</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name:</th>
                    <th>Einwohner:</th>
                    <th>Rang:</th>
                </tr>
                </thead>
                <tbody>
                {countryList.sort((a, b) => b.population - a.population).map((country, index) => (
                    <tr key={index}
                        onClick={() => handleRowClick(country.name)}>
                        <td>{country.name}</td>
                        <td>{country.population}</td>
                        <td>{country.rank_population}</td>
                    </tr>
                ))}

                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default PopulationCountry;