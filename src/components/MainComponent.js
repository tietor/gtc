import React from 'react';
import Home from "./HomeComponent";
import {Route, Routes} from 'react-router-dom';
import Header from "./HeaderComponent";
import Currencies from "./CurrenciesComponent";
import Rates from "./RatesComponent";
import {Navigate} from "react-router-dom";

function Main() {
    return (
        <React.Fragment>
            <Header></Header>
            <Routes>
                <Route path='/gtc' element={<Home/>}/>
                <Route path='/gtc/currencies' element={<Currencies/>}/>
                <Route path='/gtc/rates' element={<Rates/>}/>
                <Route path="/" element={<Navigate to="/gtc" />} />
            </Routes>
        </React.Fragment>)
}

export default Main;