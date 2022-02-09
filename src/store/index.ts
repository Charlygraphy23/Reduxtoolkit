import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./reducers/countRreducers";

const store = configureStore({
  reducer: {
    CounterReducer: CounterReducer
  }
});

export default store;
export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
