import React, { useEffect,useState } from 'react'
import axios from 'axios';
import {TableContainer,Table,TableHead,TableRow,Paper,TableBody} from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Edit from './Edit';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ViewparentInfo = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  const [value,setvalues]=useState([])
useEffect(()=>{
result()
},[])
  const result=()=>{
    axios.get("http://localhost:4000/getuserdata")
       .then(res=>setvalues(res.data))
       .catch(err=>console.log(err))
}
console.log("res==>",value)
const handleDelete=async(id)=>{
  console.log("_id",id)
 const response=await axios.delete(`http://localhost:4000/deleteuser/${id}`)
 console.log(response)
 if(response.status===200){
  result()
 }
       
}

//edit
const [open, setOpen] =useState(false);
const [edituserData,setEditUserData]=useState({})
const hanleEdit=(row)=>{
  setOpen(true);
  setEditUserData(row)
}
const handleClose = () => setOpen(false);
  return (
    <div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Edit edituserData={edituserData}/>
        </Box>
        </Modal>
    <div>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center">First Name</StyledTableCell>

          <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Relation</StyledTableCell>
              <StyledTableCell align="center">Residing</StyledTableCell>
              <StyledTableCell align="center">pobox</StyledTableCell>
              <StyledTableCell align="center">city</StyledTableCell>
              <StyledTableCell align="center">State</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center">phone</StyledTableCell>
              <StyledTableCell align="center">cellphone</StyledTableCell>
              <StyledTableCell align="center">workphone</StyledTableCell>
              <StyledTableCell align="center">email</StyledTableCell>
              <StyledTableCell align="center">EDit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
        {value.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.fname}
              </StyledTableCell>
              <StyledTableCell align="center">{row.lname}</StyledTableCell>
              <StyledTableCell align="center">{row.relation}</StyledTableCell>
              <StyledTableCell align="center">{row.Residing}</StyledTableCell>
              <StyledTableCell align="center">{row.pobox}</StyledTableCell>
              <StyledTableCell align="center">{row.city}</StyledTableCell>
              <StyledTableCell align="center">{row.state}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">{row.cellphone}</StyledTableCell>
              <StyledTableCell align="center">{row.workphone}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center"><EditIcon onClick={()=>hanleEdit(row)}/></StyledTableCell>
              <StyledTableCell align="center"><DeleteIcon onClick={()=>handleDelete(row._id)} /></StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
    </div>
   
    </div>
  )
}

export default ViewparentInfo