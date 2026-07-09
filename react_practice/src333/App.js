import React from "react";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Recoil练习</h1>
      <hr />
      <div style={{ display: "flex", gap: 60 }}>
        <ProductList />
        <ShoppingCart />
      </div>
    </div>
  );
}