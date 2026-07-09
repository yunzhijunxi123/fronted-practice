import { atom } from "recoil";

// 购物车共享状态
export const cartState = atom({
  key: "cartState",
  default: [],
});