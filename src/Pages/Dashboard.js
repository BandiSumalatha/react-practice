import { Tab,Tabs } from '@mui/material'
import React,{useState} from 'react'
import ParentInfo from '../Components/ParentInfo'
import ViewparentInfo from '../Components/ViewparentInfo'
const Dashboard = () => {
const [val, setVal]=useState("ParentInfo")
  return (
    <>    
    <div >
<Tabs value={val} onChange={(e,val)=>setVal(val)}>
<Tab  value="ParentInfo" label="ParentInfo"></Tab>
<Tab  value="viewParentInfo" label="viewParentInfo"></Tab>
</Tabs>   
{val==="ParentInfo"?<ParentInfo/>:null} 
   {val==="viewParentInfo"?<ViewparentInfo/>:null} 

    </div>
    </>

  )
}

export default Dashboard