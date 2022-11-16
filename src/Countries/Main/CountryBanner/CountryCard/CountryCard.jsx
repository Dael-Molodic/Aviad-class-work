import "./CountryCard.css"

export default function CountryCard(props) {

    const country = props.Country;

    return <div style={{width: "100%", display: "flex", alignItems: "center"}}>

        <div className="counrtyImg" onClick={() => props.setPopupQuery(country.name.common)} style={{backgroundImage: `url("${country.flags.png}")`}}></div>
        
        <div className = "countryDetails">
            <div className = "country-name">{country.name.common}
                <span> - {country.capital}</span>
            </div>
            <div className = "continents">{country.continents}</div>
        </div>


    </div>


}