import {configureStore} from "@reduxjs/toolkit"
import reducer from "../features/todo/TodoSlice";

const Store = configureStore({
    reducer:reducer
})

export default Store;