import React, {useEffect, useState, FC} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import { DarkMode, handleToDark, handleToLigth } from "../../features/darkModeSlice";

import Layout from '../../components/Layout'


interface DetailProps{
    item?: any
    data?:any
    mode:boolean
}

const Detail:FC <DetailProps> = ({item, mode}) => {

    const navigate = useNavigate()
    const location = useLocation()
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const darkMode = useSelector((state: {darkMode: DarkMode}) => state.darkMode )
    const [loading, setLoading] = useState(false)

    const id:string = location?.state?.id
    async function getTaskTodo(){
        await axios.get(
            `https://api.todoist.com/rest/v2/tasks/${id}`,
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TODOIST_KEY}`
            }
        }
        )
        .then((responese) => {
            setLoading(true)
            setData(responese.data)
            console.log("task satuan", responese.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getTaskTodo()
    },[])
    return (
        <Layout 
        mode={darkMode?.value}>
        <div className="mx-auto mt-56 rounded-xl shadow-xl w-5/6 xl:w-4/6 border bg-base-300">
            { data && loading === true ? (
                
                        <div className="flex flex-col xl:grid xl:grid-cols-3 justify-start px-4 py-16 bg-base-200">
                            <div className="text-4xl h-10 xl:w-96 font-semibold xl:col-span-2">
                                {data.content}
                            </div>
                            <div className="flex flex-col text-xl mt-5 font-semibold xl:border-l-4 xl:border-t-0 border-t-4">
                            Estimate
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-700">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
                            </svg>    
                            {data.due.string}</p>
                            <br />
                            Priority
                            <p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-red-700">
                                <path fill-rule="evenodd" d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z" clip-rule="evenodd" />
                            </svg>
                            Priority {data.priority}</p> 
                            <br />
                            <button onClick={() => navigate('/')} className="btn bg-green-500 btn-xs w-28 mx-auto text-white">
                                Back
                            </button>
                            </div>
                            
                        </div>
            ) : (
                <h1 className="flex justify-center">Please wait ...</h1>
            )}
        </div>

        </Layout>
    )
}

export default Detail