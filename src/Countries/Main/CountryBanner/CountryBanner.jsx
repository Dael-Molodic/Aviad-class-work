import CountryCard from "./CountryCard/CountryCard"
import "./countryBanner.css"
import PopupCountry from "./PopupCountry/PopupCountry"
import { useState } from "react";


export default function CountryBnner(props) {

    const [popupQuery, setPopupQuery] = useState("");
   
    return <div className="country-banner">

        {props.searchCountries.map((v) => {

            return <div key = {"C"+v.altSpellings[0]} className = "country-container">

                <CountryCard setPopupQuery = {setPopupQuery} key = {v.altSpellings[0]} query = {v.altSpellings[0]}
                name = {v.name.common} capital = {v.capital} continents = {v.continents} flag = {v.flags.png} />

                <PopupCountry setPopupQuery = {setPopupQuery} isOpen = {(v.altSpellings[0] === popupQuery) ? true : false} key = {"P"+v.altSpellings[0]}
                population = {v.population} languages = {Object.keys(v.languages).map(l => v.languages[l])} flag = {v.flags.png}/>

            </div>

        })}


    </div>
    
}