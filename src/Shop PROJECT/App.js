import CategoryBanner from "./Category/Category_banner";
import ProductBanner from "./products/Product_banner";
import "./App.css";
import { useEffect, useState } from "react";
import products from "./products/product";



export default function App() {

  const [currentProducts, setCategory] = useState(products);
  const [cartProducts ,setCartArr] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);


  const filter = (query) => {
    query ? setCategory(products.filter(v => v.category == query)) : setCategory(products);
  }

  const addToCart = (uniqueName) => {

    let mainProductObj = (currentProducts.find(v => v.title == uniqueName));
    let productToCart = Object.assign({}, mainProductObj);
    productToCart.storage = 1;
    
    if ( !(cartProducts.find(v => v.title == productToCart.title)) ) {

      setCartArr(prevcartProducts => [...prevcartProducts, productToCart]);
      mainProductObj.storage--;

    }

  }

  useEffect(() => {
    setCartCounter(cartProducts.length)
  }, [cartProducts.length])
  

  return ( <div>
    <CategoryBanner filter = {filter} cartCounter = {cartCounter} />
    <ProductBanner addToCart = {addToCart} currentProducts = {currentProducts} />
  </div>
  );

}
