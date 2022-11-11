import "./main.css";
import CountryBnner from "./CountryBanner/CountryBanner";



export default function Main(props) {
    return <div className="main">
        <CountryBnner searchCountries = {props.searchCountries}/>
    </div>

}