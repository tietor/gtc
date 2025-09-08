import React from 'react';
import {useParams} from "react-router";
import countryList from "./../data/countrydetails.json";
import {Table} from "react-bootstrap";

function CountryDetail() {
    const {countryCode} = useParams();
    const country = countryList.find(country => country.shortName === countryCode);
    return (<React.Fragment>
        <h1>Länderdetails {country.name}</h1>
        <Table striped bordered hover>
            <tbody>
            <tr>
                <td>Name:</td>
                <td>{country.name}</td>
            </tr>
            <tr>
                <td>ISO 3166:</td>
                <td>{country.shortName}</td>
            </tr>
            <tr>
                <td>Offizieller Name:</td>
                <td>{country.officialName}</td>
            </tr>
            <tr>
                <td>Hauptstadt:</td>
                <td>{country.capitalCity}</td>
            </tr>
            <tr>
                <td>Grösste Stadt:</td>
                <td>{country.largestCity}</td>
            </tr>
            <tr>
                <td>Vorwahl:</td>
                <td>{country.callingCode}</td>
            </tr>
            <tr>
                <td>Fläche:</td>
                <td>{country.area.number}</td>
            </tr>
            <tr>
                <td>Rang Fläche:</td>
                <td>{country.area.rank}</td>
            </tr>
            <tr>
                <td>Einwohner:</td>
                <td>{country.population.number}</td>
            </tr>
            <tr>
                <td>Rang Anzahl Einwohner:</td>
                <td>{country.population.rank}</td>
            </tr>
            <tr>
                <td>Länderdomain:</td>
                <td>{country.topLevelDomain}</td>
            </tr>
            <tr>
                <td>Währung:</td>
                <td>{country.currency.name}</td>
            </tr>
            <tr>
                <td>Abkürzung Währung:</td>
                <td>{country.currency.code}</td>
            </tr>
            </tbody>
        </Table>
    </React.Fragment>)
}

export default CountryDetail;