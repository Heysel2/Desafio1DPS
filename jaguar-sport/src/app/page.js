"use client"
import { useState } from 'react';
import { Carrito } from '@/components/carrito';
import { ProductList } from '@/components/productList';
import { ExtraProductos } from '@/components/extraproductos';

export default function Home() {
const [allProducts, setAllProducts] = useState([]);
const [total, setTotal] = useState(0);
const [countProducts, setCountProducts] = useState(0);
return (
<>
<Carrito
allProducts={allProducts}
setAllProducts={setAllProducts}
total={total}
setTotal={setTotal}
countProducts={countProducts}
setCountProducts={setCountProducts}
/>
<ProductList
allProducts={allProducts}
setAllProducts={setAllProducts}
total={total}
setTotal={setTotal}
countProducts={countProducts}
setCountProducts={setCountProducts}
/>
<ExtraProductos
allProducts={allProducts}
setAllProducts={setAllProducts}
total={total}
setTotal={setTotal}
countProducts={countProducts}
setCountProducts={setCountProducts}
/>
</>
);
}
