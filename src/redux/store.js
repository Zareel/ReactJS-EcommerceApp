import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "../redux/storeSlice";

export const store = configureStore({
  reducer: { storeReducer },
});
