import { configureStore } from "@reduxjs/toolkit";

import { addTodoSlice } from"./src/features/todoSlice"

export default configureStore({
    reducer: {
        addTodo: addTodoSlice.reducer,
    }
})