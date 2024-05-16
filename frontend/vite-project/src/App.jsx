import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContext from '../../../../rout_exp/routing/src/Context/Context'
import ROUTES from './Routes/routes'
import axios from 'axios'

function App() {
  const router=createBrowserRouter(ROUTES)
  const [data,setData]=useState([])
const [loading,setLoading]=useState(true)
const [error,setError]=useState("")
useEffect(() =>{
  axios.get('//http://localhost:8080/category').then(res=>{
    setData([...res.data])
    setLoading(false)
  }).catch(error=>{
    setError(error)
    setLoading(false)
})
},[])
const contextData={data,setData,error,setError,loading,setLoading}
  return (
    <MainContext.Provider value={contextData}>
<RouterProvider router={router}/>
    </MainContext.Provider>
  )
}

export default App
