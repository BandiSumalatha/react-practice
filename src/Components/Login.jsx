import React,{ useState} from 'react'
import axios from 'axios';
import { Paper,Box ,TextField} from '@mui/material';
import { useNavigate,Link, json } from 'react-router-dom';

const Login = () => {

  const navigate=useNavigate()

    const [input,setInput]=useState({
        email:'',
        password:'',
    })

const handleLogin=(e)=>{
  e.preventDefault()
 axios.post("http://localhost:4000/login",input)
.then(res=>{
  if(res.data=="Valid User"){
    setInput({
      email:'',
      password:'',
    })
    sessionStorage.setItem("userdata",JSON.stringify(input.email))
navigate("/Dashboard")
  }
})
.catch(err=>console.log(err))
  


// const loggedUser=JSON.parse(localStorage.getItem('user'))
// if(input.email===loggedUser.email&&input.password===loggedUser.password){
//   localStorage.setItem("loggedin",true)
  // navigate('/')
// }
// else{
//   alert('you have entered incorrenct email and password')
// }
  }


  return (
    <div style={{position:"relative", left:"400px",paddingTop:"60px"}}>
 <form onSubmit={handleLogin
        }>
 <Box
      sx={{
    
        display: 'flex',
        flexWrap: 'wrap',
         justifyContent:'center',
        alignItems:'center',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 500,
        },
      }}
    >
      
      
      <Paper  elevation={4} style={{borderRadius:"25px"}}>
        <h3 style={{textAlign:'center'}}>Login form</h3>
        <div style={{margin:'5rem'}}>
        
                    <div>
        <label>email</label>

        <TextField 
        name='email'
        value={input.email}
        onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        fullWidth />
               <br/>
<br/>
        </div>
        <div>
        <label>password</label>
        <TextField 
        name='password'
        value={input.password}
        onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        fullWidth />
        <br/>
        <br/>
<button type='submit'>SUMBMIT</button>
        </div>
        <h6>have already an account? <Link to='/Signup'>Signup</Link></h6>

        </div>
      
        </Paper>
    </Box>

    </form>  
    </div>


  
  )
}

export default Login