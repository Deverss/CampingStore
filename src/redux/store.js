import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/index";
import product from "./product";
import cart from "./cart/index";
import search from "./search/index";
import category from "./category/index";
const reducer = {
  auth,
  product,
  cart,
  search,
  category,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
