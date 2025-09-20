import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Table} from "react-bootstrap";

function CountryDetail() {
    const {countryCode} = useParams();
    const [countryDetail, setCountryDetail] = useState();


    useEffect(() => {
        console.log(countryCode);
        fetch('http://localhost:3005/country/' + countryCode, {
            method: 'GET',
        }).then(response => {
            response.json().then(data => {
                console.log(data);
                setCountryDetail(data);
            })
        });
    }, [countryCode]);


    return (<React.Fragment>
        <h1>Länderdetails {countryDetail?.name}</h1>
        <Table striped bordered hover>
            <tbody>
            <tr>
                <td>Name:</td>
                <td>{countryDetail?.name}</td>
            </tr>
            <tr>
                <td>ISO 3166:</td>
                <td>{countryDetail?.iso}</td>
            </tr>
            <tr>
                <td>Offizieller Name:</td>
                <td>{countryDetail?.official_name}</td>
            </tr>
            <tr>
                <td>Hauptstadt:</td>
                <td>{countryDetail?.capital_city}</td>
            </tr>
            <tr>
                <td>Grösste Stadt:</td>
                <td>{countryDetail?.biggest_town}</td>
            </tr>
            <tr>
                <td>Vorwahl:</td>
                <td>{countryDetail?.phone_prefix}</td>
            </tr>
            <tr>
                <td>Fläche:</td>
                <td>{countryDetail?.area}</td>
            </tr>
            <tr>
                <td>Rang Fläche:</td>
                <td>{countryDetail?.rank_area}</td>
            </tr>
            <tr>
                <td>Einwohner:</td>
                <td>{countryDetail?.population}</td>
            </tr>
            <tr>
                <td>Rang Anzahl Einwohner:</td>
                <td>{countryDetail?.rank_population}</td>
            </tr>
            <tr>
                <td>Länderdomain:</td>
                <td>{countryDetail?.domain}</td>
            </tr>
            <tr>
                <td>Währung:</td>
                <td>{countryDetail?.currency}</td>
            </tr>
            <tr>
                <td>Abkürzung Währung:</td>
                <td>{countryDetail?.abbreviation_currency}</td>
            </tr>
            </tbody>
        </Table>
    </React.Fragment>)
}

export default CountryDetail;