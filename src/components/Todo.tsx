import React, {useState,FC} from 'react'
import axios from 'axios'


const Todo = () => {

    const [data, setData] = useState([{
        content: '',
        due_date: '',
        priority: ''
}])
    // const handleSubmit = (e:any) => {
    //     e.prevenDefault()

    //     console.log(value)
    // }
    const addTodo = async (e:any) => {
        e.prevenDefault()
        axios.post(
            `  https://api.todoist.com/rest/v2/tasks `,
            {
                content: [e.content],
                due_string: [e.due_string],  
                priority: [e.priority]
            },
            {
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TODOIST_KEY}`
                }
            }
        )
        .then((reponse) => {
            console.log(reponse.data)
            setData([...data, e])
        })
        .catch((error) => {
            console.log(error)
        })

    }
    // async function AddTodos() {
        // }
    const handleAddTodo = () => {
        console.log(data)
    }
    console.log(data)
    return (
        <form onSubmit={(e) => addTodo(e)}>
        <div className="card w-5/6 xl:w-3/6 bg-base-100 shadow-xl border mx-auto mt-10">
            <div className="card-body">
                <h2 className="card-title text-xl md:text-4xl font-semibold mb-5">Todo List</h2>
                <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 pb-6 bg-base-200 md:justify-center lg:justify-center">
                <input className="input border-2 input-info w-30 sm:w-96 sm:mx-auto md:w-60 xl:w-96 text-l lg:text-xl text-center placeholder-slate-400 md:h-12 md:mt-4 lg:mt-4 placeholder:text-center
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" 
                type="text" placeholder='Add Todo' onChange={(e) => setData({ ...data, content:e.target.value})} value={data.content}/>
            <div className="justify-center space-y-2 lg:space-y-4 lg:pt-0">
            <select value={data.due_date} onChange={(e) => setData({ ...data, due_date:e.target.value})} className="select border-2 select-bordered w-full max-w-xs">
                <option disabled>Deadline</option>
                <option value={"today"}>Today</option>
                <option value={"Tommoow at 12:00"}>Tommorow at 12:00</option>
                <option value={"Next week"}>Next Week</option>
            </select>
            
            <select value={data.priority} onChange={(e) => setData({ ...data, priority:e.target.value})} className="select border-2 select-bordered w-full max-w-xs">
                <option disabled>Priority</option>
                <option value={1}>Prority 1</option>
                <option value={2}>Prority 2</option>
                <option value={3}>Prority 3</option>
                <option value={4}>Prority 4</option>
            </select>
            </div>
            <div className='md:pt-2'>
                <button className="btn bg-slate-500 w-32 text-white">Add Task</button>
            </div>
            </div>
            </div>
        </div>
        </form>
        
    )
}


export default Todo