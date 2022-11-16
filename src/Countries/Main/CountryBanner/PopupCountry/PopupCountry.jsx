import "./PopupCountry.css";
import ReactDOM from "react-dom";


export default function PopupCountry(props) {

    if (!props.isOpen) return null;


    const country = props.Country;

    return ReactDOM.createPortal
    (
        <div className="popup-background" onClick={() => props.setPopupQuery("")}>

            <div className="popup-container" onClick={(e) => e.stopPropagation()}>

                <div className="img" style={{backgroundImage: `url("${country.flags.png}")`}}></div>

                <h3>population:</h3>
                <div className = "population">{country.population}</div>

                <h3>languages:</h3>
                <div className = "languages">

                   <LanguagesList languages = {country.languages}/>

                </div>

            </div>

        </div>, document.getElementById('portal')
    )

}


function LanguagesList(props) {

    const languageArr = Object.keys(props.languages).map(v => props.languages[v]).slice(0, 3);

    return <>

        {languageArr.map((v,i) => {

            return <div className="languages-list">{v}</div>

        })}

    </>
}