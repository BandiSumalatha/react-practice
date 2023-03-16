import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Private = ({Component}) => {
    const navigate=useNavigate()
    useEffect(()=>{

        const user=JSON.parse(sessionStorage.getItem("userdata"))
        if(!user){
            navigate("/")
        }
    },[])
  return (
    <div>{Component}</div>
  )
}

export default Private