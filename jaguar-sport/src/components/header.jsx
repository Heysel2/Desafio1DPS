import React from 'react';

const Header = ({ countProducts, toggleCart }) /*recibe las propiedades */ => {
  return (
    <header>
      <h1>Jaguar Sport</h1>
      <div className='container-icon'>
        <div className='container-cart-icon' onClick={toggleCart}>
          <img
            src="https://e7.pngegg.com/pngimages/833/426/png-clipart-black-shopping-cart-icon-for-free-black-shopping-cart.png"
            alt="carrito"
            className="icon-cart" />
          <div className='count-products'>
            <span id='contador-productos'>{countProducts}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
