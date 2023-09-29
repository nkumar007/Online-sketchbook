import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "@/slice/menuSlice";

const store = configureStore({
  reducer: {
    // Here we will be adding reducers
    menu: menuReducer,
  },
});

export default store;
