import React, {useEffect, useState} from 'react'
import axios from 'axios'

import Layout from '../../components/Layout'
import Todo from '../../components/Todo'
import TodoList from '../../components/TodoList'
import { addTodo } from '../../features/todoSlice'
const Home = () => {
    
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(false)
   
    

// async function getTodo(){
//     axios.get(
//     `  https://api.todoist.com/rest/v2/tasks `,
//     {
//         headers: {
//             Authorization: `Bearer ${import.meta.env.VITE_TODOIST_KEY}`
//         }
//     }
//     )
//     .then((responese) => {
//         setLoading(true)
//         setData(responese.data)
//         console.log(responese.data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }

// const deleteTodo = async (data.id) => {
//     await axios.delete(`https://api.todoist.com/rest/v2/tasks/${id}`,
//     {
//         headers: {
//             Authorization: `Bearer ${import.meta.env.VITE_TODOIST_KEY}`
//         }
//     })
//     .then((response) => {
//         alert("data has deleted")
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// }


    return (
        <Layout>
            <Todo
            />
            <TodoList />
        </Layout>
    )
}

export default Home