import { configureStore } from "@reduxjs/toolkit";

import { addTodoSlice } from"./src/features/todoSlice"
import { darkModeSlice } from "./src/features/darkModeSlice";

export default configureStore({
    reducer: {
        toDo: addTodoSlice.reducer,
        darkMode: darkModeSlice.reducer,
    }
})