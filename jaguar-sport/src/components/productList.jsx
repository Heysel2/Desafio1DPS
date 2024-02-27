import React from "react";
import {data} from "../data";
import styles from "../app/page.module.css";
export const ProductList = ({
allProducts,
setAllProducts,
countProducts,
setCountProducts,
total,
setTotal,
}) => {
const onAddProduct = product => {
if (allProducts.find(item => item.id === product.id)) {
const products = allProducts.map(item =>
item.id === product.id
? { ...item, quantity: item.quantity + 1 }
: item
);
setTotal(total + product.price * product.quantity);
setCountProducts(countProducts + product.quantity);
return setAllProducts([...products]);
}
setTotal(total + product.price * product.quantity);
setCountProducts(countProducts + product.quantity);
setAllProducts([...allProducts, product]);
};
return (
<div className='container-items'>
{data.map(product => (
<div className='container-product'>
<div className='item' key={product.id}>
<figure>
<img src={product.urlImage} />
<p className={styles.name}>{product.title}</p>
</figure>
<div className='info-product'>
<p>{product.info}</p>
<p className='price'>${product.price}</p>
<button onClick={() => onAddProduct(product)}>
Añadir al carrito
</button>
</div>
</div>
</div>
))}
</div>
);
};