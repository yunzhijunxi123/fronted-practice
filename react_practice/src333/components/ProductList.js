import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartAtom";

const products = [
  { id: 1, name: "足球", price: 99 },
  { id: 2, name: "篮球", price: 199 },
  { id: 3, name: "羽毛球", price: 299 },
];

export default function ProductList() {
  //读写共享状态
  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = (product) => {
    setCart([...cart, product]);//添加产品
  };

  return (
    <div>
      <h2>商品列表</h2>
      {products.map((p) => (
        <div key={p.id} style={{ margin: "10px 0" }}>
          <span>{p.name} - {p.price}元 </span>
          <button onClick={() => addToCart(p)}>加入购物车</button>
        </div>
      ))}
    </div>
  );
}