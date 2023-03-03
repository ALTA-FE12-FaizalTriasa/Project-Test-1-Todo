import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item{
    item: any
}
export interface TodoState{
    item: Item[]
}
const initialState: TodoState = {
    item: []
} 

export const addTodoSlice  = createSlice({
    name: "toDo",
    initialState , 
    reducers:{
        addTodo: (state, actions: PayloadAction<Item> ) => {
            state.item.push(actions.payload)
            return state
        },
        setTodo: (state, actions: PayloadAction<Item> ) => {
            state.item = actions.payload
            return state
        },
        removeTodo: (state, actions: PayloadAction<Item> ) => {
            const removeItem = state.item.filter((item:any) => {
                item.id !== actions.payload
            })
            state.item = removeItem
        },
        updateStatus: (state, actions: PayloadAction<Item>) => {
            const updateAt = (new Date().toLocaleString())
            state.item = state.item.map((item:any) => item.id === actions.payload.id ? { ...item, is_completed:true, updateAt} : item)
        }
    }
})

export const {addTodo} = addTodoSlice.actions