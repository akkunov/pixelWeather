import {configureStore} from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlie.js";

const store = configureStore({
    reducer: {
        users: SearchSlice,
    },
})
export default store