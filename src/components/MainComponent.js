import React from 'react';
import Home from "./HomeComponent";
import {Navigate, Route, Routes} from 'react-router-dom';
import Header from "./HeaderComponent";
import Rates from "./RatesComponent";
import Currencies from "./CurrenciesComponent";
import ShortcutCountry from "./ShortcutCountryComponent";
import CountryDetail from "./CountryDetailComponent";
import NameCountry from "./NameCountryComponent";
import AreaCountry from "./AreaCountryComponent";
import PopulationCountry from "./PopulationCountrycomponent";
import Calculator from "./CalculatorComponent";
import Register from "./RegisterComponent";
import Login from "./LoginComponent";
import Calculation from "./CalculationComponent";

function Main() {
    return (
        <React.Fragment>
            <Header></Header>
            <Routes>
                <Route path='/gtc/home' element={<Home/>}/>
                <Route path='/gtc/currencies' element={<Currencies/>}/>
                <Route path='/gtc/calculator' element={<Calculator/>}/>
                <Route path='/gtc/rates' element={<Rates/>}/>
                <Route path='/gtc/countries/shortnamesort' element={<ShortcutCountry/>}/>
                <Route path='/gtc/countries/namesort' element={<NameCountry/>}/>
                <Route path='/gtc/countries/areasort' element={<AreaCountry/>}/>
                <Route path='/gtc/countries/populationsort' element={<PopulationCountry/>}/>
                <Route path='/gtc/country/:countryCode' element={<CountryDetail/>}/>
                <Route path='/gtc/register' element={<Register/>}/>
                <Route path='/gtc/Login' element={<Login/>}/>
                <Route path='/gtc/calculations' element={<Calculation/>}/>
                <Route path="/" element={<Navigate to="/gtc/home"/>}/>
            </Routes>
        </React.Fragment>)
}

export default Main;