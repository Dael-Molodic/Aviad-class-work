import {speakers} from "./product";
import ProductCard from "./Product_card";
import "./Product_banner.css";


function ProductBanner(props) {

    return <div className="products-container">
        <div className="product-banner">
            {props.currentProducts.map((v,i) => {
                return <ProductCard key = {i} name = {v.title} img = {v.img} price = {v.price} storage = {v.storage} addToCart = {props.addToCart}/>
            })}
        </div>
    </div>
   
}

export default ProductBanner