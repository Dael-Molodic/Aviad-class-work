import dataArr from "./data";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { useState, useEffect } from "react";
import "./AppCountries.css";


export default function AppCountries() {

    const [searchCountries, setSearch] = useState(dataArr);
    const [countriesNum, setCountriesNum] = useState( 250);

    const filterCountries = (TxtToSearch) => {

        setSearch(() => {
            return dataArr.filter(v => {
                return ( v.name.common.toLowerCase().startsWith(TxtToSearch.toLowerCase()) );
            })
        });

    }

    useEffect(() => {
        setCountriesNum(searchCountries.length);
    }, [searchCountries.length])

    return <>

        <Header filterCountries = {filterCountries} countriesNum = {countriesNum}/>
        <Main searchCountries = {searchCountries}/>
        
    </>

}