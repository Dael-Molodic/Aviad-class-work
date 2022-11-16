import { cartArr, allProducts } from "../products/product";

export default function starageManager(TransferDirection, productName) {

    let ToCart = false;
    let toStorage = false;

    if (TransferDirection == "fromStorageToCart") ToCart = true;
    else if (TransferDirection == "fromCartToStorage") toStorage = true;
    else return;

    const cartProduct = (cartArr.find(v => v.title == productName));
    cartProduct.amount = (ToCart) ? (cartProduct.amount + 1) : (cartProduct.amount - 1);
    
    const storageProduct = (allProducts.find(v => v.title == productName));
    storageProduct.amount = (toStorage) ? (storageProduct.amount + 1) : (storageProduct.amount - 1);

}

