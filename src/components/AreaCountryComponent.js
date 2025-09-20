import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import {Table} from "react-bootstrap";

function AreaCountry() {
    const navigation = useNavigate();
    const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3005/countriesByAreaSort', {
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
            <h1>Länder nach Fläche</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name:</th>
                    <th>Fläche:</th>
                    <th>Rang:</th>
                </tr>
                </thead>
                <tbody>
                {countryList.sort((a, b) => b.area.number - a.area.number).map((country, index) => (
                    <tr key={index}
                        onClick={() => handleRowClick(country.name)}>
                        <td>{country.name}</td>
                        <td>{country.area}</td>
                        <td>{country.rank_area}</td>
                    </tr>
                ))}

                </tbody>
            </Table>
        </React.Fragment>
    )
}

export default AreaCountry;