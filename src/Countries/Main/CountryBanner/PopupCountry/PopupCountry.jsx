import "./PopupCountry.css";
import ReactDOM from "react-dom";


export default function PopupCountry(props) {

    if (!props.isOpen) return null;

    return ReactDOM.createPortal
    (
        <div className="popup-background" onClick={() => props.setPopupQuery("")}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>

                <div className="img" style={{backgroundImage: `url("${props.flag}")`}}></div>

                <h3>population:</h3>
                <div className = "population">{props.population}</div>

                <h3>languages:</h3>
                <div className = "languages">{
                    props.languages.map((v,i) => {
                        return <LanguagesList key = {i} languages = {v}/>
                    })
                }</div>

            </div>
        </div>, document.getElementById('countryPopup')
    )

}


function LanguagesList(props) {
    return <div className="languages-list">{props.languages}</div>
}