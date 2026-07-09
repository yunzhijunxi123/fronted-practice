import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartAtom";

export default function ShoppingCart() {
  //读写共享状态
  const [cart, setCart] = useRecoilState(cartState);

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>购物车 ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>购物车空空如也</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} - {item.price}元
              <button onClick={() => removeItem(i)} style={{ marginLeft: 10 }}>
                删除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}