import React, { useState } from 'react';
import Header from './header';
import styles from "../app/page.module.css";

export const Carrito = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    alert('¿Estás seguro que quieres eliminar el libro?');
    const results = allProducts.filter((item) => item.id !== product.id);
    setAllProducts(results);
    const removedQuantity = product.quantity;
    const removedPrice = product.price * removedQuantity;
    setTotal(total - removedPrice);
    setCountProducts(countProducts - removedQuantity);
    if (countProducts - removedQuantity <= 0) {
      setCountProducts(0);
    }
  };

  const onCleanCart = () => {
    alert('¿Estás seguro que quieres vaciar el carrito?');
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const handleChange = (event, productId) => {
    const newQuantity = parseInt(event.target.value);
    const updatedProducts = allProducts.map((product) => {
      if (product.id === productId) {
        const quantityDifference = newQuantity - product.quantity;
        setCountProducts(countProducts + quantityDifference);
        setTotal(total + product.price * quantityDifference);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setAllProducts(updatedProducts);
  };

  const toggleCart = () => {
    setActive(!active);
  };

  return (
    <>
      <Header countProducts={countProducts} toggleCart={toggleCart} />
      <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
        {allProducts.length ? (
          <>
            <div className='row-product'>
              {allProducts.map((product) => (
                <div className='cart-product' key={product.id}>
                  <div className='info-cart-product'>
                    <span className='cantidad-producto-carrito'>
                      {product.quantity}
                    </span>
                    <img
                      className='img-producto-carrito'
                      src={product.urlImage}
                      alt={product.title}
                    />
                    <p className={styles.nameCarrito}>{product.title}</p>
                    <span className='precio-producto-carrito'>
                      ${product.price}
                    </span>
                  </div>
                  <div className='container-input'>
                    <input
                      type='text'
                      onChange={(event) => handleChange(event, product.id)}
                      className={styles.input}
                      placeholder='+ producto'
                    />
                  </div>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                    alt="cerrar"
                    className="icon-close"
                    onClick={() => onDeleteProduct(product)}
                  />
                </div>
              ))}
            </div>
            <div className='cart-total'>
              <h3>Total:</h3>
              <span className='total-pagar'>${total}</span>
            </div>
            <button className='btn-clear-all' onClick={onCleanCart}>
              Vaciar Carrito
            </button>
          </>
        ) : (
          <p className='cart-empty'>El carrito está vacío</p>
        )}
      </div>
    </>
  );
};
