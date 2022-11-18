import dataArr from "./data";
import Header from "./Header/Header";
import Main from "./Main/Main";
import { useState, useEffect } from "react";
import "./AppCountries.css";
import axios from "axios";


export default function AppCountries() {

    const [searchCountries, setSearch] = useState(dataArr);

    const filterCountries = (TxtToSearch) => {

        setSearch(() => {
            return dataArr.filter(v => {
                return ( v.name.common.toLowerCase().startsWith(TxtToSearch.toLowerCase()) );
            })
        });

    }

    return <>

        <Header searchCountries = {searchCountries} filterCountries = {filterCountries} />
        <Main searchCountries = {searchCountries}/>
        
    </>

}