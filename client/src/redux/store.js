import { configureStore } from "@reduxjs/toolkit";
import horsesReducer from "./reducers/horsesSlice"

export default configureStore({
    reducer: {
        horses: horsesReducer
    }
})