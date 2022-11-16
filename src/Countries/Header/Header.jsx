import "./header.css";
import Search from "./Search/Search";

export default function Header(props) {

    return <div className="header">

        <div>
            <h1>Countries (<span>{props.searchCountries?.length}</span>)</h1> 
        </div>
        <div className="search">
            <h2>Search:</h2>
            <Search filterCountries = {props.filterCountries} />
        </div>
        
    </div>

}