import mainProductArr from "../products/product";
import Category from "./Category";
import "./Categorys.css";
 

 
function CategoryBanner(props) {
 
    let category = mainProductArr.map(v => v.category).filter((v,i,arr) => i === arr.indexOf(v))
    
    return <div className="category-banner">

        <div className="category-button" style={{height: "48%", width: "11%", fontWeight: "bold"}} onClick={() => props.filter()}>All product</div>
        {/* <span> | </span> */}

        { category.map(v => {
            return <Category name = {v} filter = {props.filter}/>
        }) }

        <div className="main-cart-shadow">
            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="cart" className="main-cart"></img>
            <div className="cart-item-count">{props.cartCounter}</div>
        </div>

    </div>
   
}

export default CategoryBanner;
