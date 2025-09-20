import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {useNavigate} from "react-router";

function NameCountry() {
    const navigation = useNavigate();
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/countriesByNameSort', {
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
                    onClick={() => handleRowClick(country.name)}>
                    <td>{country.name}</td>
                    <td>{country.official_name}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    </React.Fragment>);
}

export default NameCountry;