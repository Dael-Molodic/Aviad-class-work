import "./Categorys.css";


function Category(props) {

    return <div className="category-button" onClick = {() => props.filterProduct(props.name)}>
        {props.name}
    </div>

}

export default Category 