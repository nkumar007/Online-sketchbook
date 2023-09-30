import {configureStore} from "@reduxjs/toolkit";
import menuReducer from "@/slice/menuSlice";
import toolboxReducer from "@/slice/toolboxSlice";

const store = configureStore({
  reducer: {
    // Here we will be adding reducers
    menu: menuReducer,
    toolbox: toolboxReducer,
  },
});

export default store;
