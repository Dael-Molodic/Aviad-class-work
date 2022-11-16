import "./search.css";


export default function Search(props) {

    return <input type="search" onInput = {(e) => props.filterCountries(e.target.value)}></input>    

}