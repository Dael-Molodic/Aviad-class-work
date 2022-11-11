import "./Product_card.css"


function ProductCard(props) {

    return (
        <div className = "item-container" style={{border: (props.storage) ? "solid 6px rgb(162, 123, 92)" :"solid 4px red"}}>
            <div className = "item-img">
                <img src={props.img}/>
            </div>

            <div className="product-detail">
                <h2>{props.name}</h2>
                <h2 className="price">{props.price}</h2>
            </div>

            {(props.storage)
                ? (
                    <div className = "add-to-cart" onClick = {(e) => props.addToCart(props.name)}>
                      <div className = "add-img"></div>
                   </div>
                )
                : (
                  <div className="sold-out"></div>  
                ) 
            }
            
        </div>
    )    
    
}

export default ProductCard