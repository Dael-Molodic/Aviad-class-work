import CategoryBanner from "./Category/Category_banner";
import ProductBanner from "./products/Product_banner";
import "./App.css";
import { useEffect, useState } from "react";
import storageManager from "./main function/storageManager";
import { cartArr, allProducts } from "./products/product";



export default function App() {

  const [displayedProducts, setDisplayedProducts] = useState(allProducts);
  const [cartArrLength ,setCartArrLength] = useState(0);


  const filterProduct = (filterQuery) => {
    filterQuery 
    ? setDisplayedProducts(allProducts.filter(v => v.category == filterQuery))
    : setDisplayedProducts(allProducts);
  }

  const addToCart = (productName) => {

    let mainProductObj = (displayedProducts.find(v => v.title == productName));
    let productToCart = Object.assign({}, mainProductObj);
    
    if ( cartArr.find(v => v.title == productToCart.title)) return;
    cartArr.push(productToCart);

    setCartArrLength(prevcartProducts => prevcartProducts + 1);
    
    storageManager("fromStorageToCart", productName);

  }


  return ( 
    <div>
      <CategoryBanner filterProduct = {filterProduct} cartArrLength = {cartArrLength} />
      <ProductBanner addToCart = {addToCart} displayedProducts = {displayedProducts} />
      <CartPopup />
    </div>
  );

}
