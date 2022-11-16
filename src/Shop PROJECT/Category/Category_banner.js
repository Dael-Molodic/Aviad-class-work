import { allProducts } from "../products/product";
import Category from "./Category";
import "./Categorys.css";
 

 
function CategoryBanner(props) {
 
    let category = Array.from(new Set(allProducts.map(v => v.category)));
    
    return (
        <div className="category-banner">

            <div className="category-button all-product" onClick={() => props.filterProduct()}>All product</div>

            { category.map(v => {
                return <Category name = {v} filterProduct = {props.filterProduct} key = {v}/>
            }) }

            <div className="main-cart-shadow">
                <img src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png" alt="cart" className="main-cart"></img>
                <div className="cart-item-count">{props.cartArrLength}</div>
            </div>

        </div>
    )
   
}

export default CategoryBanner;
