import CountryCard from "./CountryCard/CountryCard"
import "./countryBanner.css"
import PopupCountry from "./PopupCountry/PopupCountry"
import { useState } from "react";


export default function CountryBnner(props) {

    const [popupQuery, setPopupQuery] = useState("");
   
    return <div className="country-banner">

        {props.searchCountries.map((v) => {

            return <div key = {v.name.common} className = "country-container">

                <CountryCard Country = {v} setPopupQuery = {setPopupQuery} key={v.name.common}/>

                <PopupCountry Country = {v} setPopupQuery = {setPopupQuery} isOpen = {(v.name.common === popupQuery) ? true : false} key={`${v.name.common} popup`}/>

            </div>

        })}


    </div>
    
}