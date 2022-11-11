import "./CountryCard.css"

export default function CountryCard(props) {

    return <div onClick = {() => props.setPopupQuery(props.query)} style={{width: "100%", display: "flex", alignItems: "center"}}>

        <div className = "playersImg" style={{backgroundImage: `url("${props.flag}")`}}></div>
        
        <div className = "Players">
            <div className = "country-name">{props.name}
                <span> - {props.capital}</span>
            </div>
            <div className = "scoer-div">{props.continents}</div>
        </div>


    </div>

}