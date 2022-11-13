import "./CountryCard.css"

export default function CountryCard(props) {

    return <div style={{width: "100%", display: "flex", alignItems: "center"}}>

        <div className = "counrtyImg" onClick = {() => props.setPopupQuery(props.query)} style={{backgroundImage: `url("${props.flag}")`}}></div>
        
        <div className = "countryDetails">
            <div className = "country-name">{props.name}
                <span> - {props.capital}</span>
            </div>
            <div className = "continents">{props.continents}</div>
        </div>


    </div>

}