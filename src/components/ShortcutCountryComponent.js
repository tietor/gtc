import React, {useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {useNavigate} from "react-router";

function ShortcutCountry() {
    const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3005/countriesByShortNameSort', {
            method: 'GET',
        }).then(response => {
            response.json().then(data => {
                setCountryList(data);
            })
        });
    }, []);

    const navigation = useNavigate();
    const handleRowClick = (iso) => {
        navigation(`/gtc/country/${iso}`);
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
            {countryList.sort((a, b) => a.iso.localeCompare(b.iso)).map((country, index) => (
                <tr key={index}
                    onClick={() => handleRowClick(country.name)}>
                    <td>{country.iso}</td>
                    <td>{country.name}</td>
                </tr>
            ))}

            </tbody>
        </Table>
    </React.Fragment>)
}

export default ShortcutCountry;