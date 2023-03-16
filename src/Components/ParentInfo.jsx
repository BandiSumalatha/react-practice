import React,{useState} from 'react';
import {Grid,Paper,TextField,Button} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ParentInfo = () => {
      const [data,setData]=useState({
        fname:"",
        lname:"",
        relation:"",
        Residing:"",
        address:"",
        pobox:"",
        city:"",
        state:"",
        zipcode:"",
        phone:"",
        cellphone:"",
        workphone:"",
        email:""
      })
      const onChange=(e)=>{
        const {value,name}=e.target;
        setData((state)=>({...state,[name]:value}))
    }
    const onSubmit=async(e)=>{
      e.preventDefault();
      const payload=data
      const result=await axios.post("http://localhost:4000/userdata",payload)
      console.log(result,"reslut")
      if(result.status===200){
        setData({
          fname:"",
          lname:"",
          relation:"",
          Residing:"",
          address:"",
          pobox:"",
          city:"",
          state:"",
          zipcode:"",
          phone:"",
          cellphone:"",
          workphone:"",
          email:""
        })
        toast.success('data saved successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
                }
       }
      
      
  return (
    
    <div className='parentdata'>
              <ToastContainer />

        <form onSubmit={onSubmit}>
        <Paper>
        <div style={{width:"80rem",background:"#0002", padding:"10px",position:"static",marginTop:"20px"}}>
<p>Add info</p>
    </div>
    <div style={{padding:"20px"}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
          <TextField
          type="text"
          fullWidth
          required
          label="First Name"
          name="fname"
          value={data.fname}
          onChange={onChange}
        />
       
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <TextField
          type="text"
          fullWidth
          required
          id="outlined-required"
          label="Last Name"
          name="lname"
          value={data.lname}
          onChange={onChange}
        />
        
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
        <TextField
        type="text"
        fullWidth
          required
          id="outlined-required"
          label="Relation"
          name="relation"
          value={data.relation}
          onChange={onChange}
        />
       
          </Grid>
       
       
      </Grid>
   
    </div>
    <div style={{padding:"20px"}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >

    <Select 
    value={data.Residing} 
    name="Residing" label=" Student" onChange={onChange} fullWidth >
        
        <MenuItem value={"india"}>india</MenuItem>
          <MenuItem value={"uk"}>uk</MenuItem>
          <MenuItem value={"us"}>us</MenuItem>
    
  </Select>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <TextField
          type="text"
          fullWidth
          required
          id="outlined-required"
          label="Address"
          name="address"
          value={data.address}
          onChange={onChange}
        />
        
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
        <TextField
        type="text"
        fullWidth
          required
          id="outlined-required"
          label="pobox"
          name="pobox"
          value={data.pobox}
          onChange={onChange}
        />
       
     </Grid>
    </Grid>
   
    </div>
    <div style={{padding:"20px"}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
          <TextField
          type="text"
          fullWidth
          required
          id="outlined-required"
          label="city"
          name="city"
          value={data.city}
          onChange={onChange}
        />
       
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <TextField
          type="text"
          fullWidth
          required
          id="outlined-required"
          label="State"
          name="state"
          value={data.state}
          onChange={onChange}
        />
        
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
        <TextField
        fullWidth
        type="number"
          required
          id="outlined-required"
          label="zipcode"
          name="zipcode"
          value={data.zipcode}
          onChange={onChange}
        />
       
          </Grid>
       
       
      </Grid>
    </div>
    <div style={{padding:"20px"}}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
          <TextField
          type="number"
          fullWidth
          required
          id="outlined-required"
          label="Phone"
          name="phone"
          value={data.phone}
          onChange={onChange}
        />
       
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
          <TextField
          type="number"
          fullWidth
          required
          id="outlined-required"
          label="cellphone"
          name="cellphone"
          value={data.cellphone}
          onChange={onChange}

        />
        
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
        <TextField
        type="number"
        fullWidth
          required
          id="outlined-required"
          label="workphone"
          name="workphone"
          value={data.workphone}
          onChange={onChange}
        />
       </Grid>
       </Grid>
      </div>
    <div style={{padding:"20px"}}>
    <Grid container spacing={{ xs: 5, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
     <Grid item xs={8}>
        <TextField
        type="text"
        fullWidth
          required
          id="outlined-required"
          label="email"
          name="email"
          value={data.email}
          onChange={onChange}
        />
        </Grid>
        <Grid item xs={2} style={{marginTop:"6px"}}>
        <Button 
        type='submit'
        variant="contained" size="medium" style={{background:"orange"}} endIcon={<SaveIcon />} onSubmit={onSubmit}>
          Save
        </Button>
        </Grid>
       </Grid>
    </div>
    </Paper>
    </form>
    </div>
      )
}

export default ParentInfo