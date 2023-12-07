import { configureStore } from '@reduxjs/toolkit'
import auth  from "./auth/index";

const reducer = {
  auth 
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});


