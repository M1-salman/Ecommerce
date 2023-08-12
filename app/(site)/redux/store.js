import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { getTotals } from "../slice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

store.dispatch(getTotals());
