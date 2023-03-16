import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Myorder from './Pages/Myorder';
import Logout from './Pages/Logout';
import Dashboard from './Pages/Dashboard';
import Myschedule from './Pages/Myschedule';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Edit from './Components/Edit';
// import Private from './Components/Private';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Sidebar>
      <Routes>
      
      <Route path="/" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
       <Route path="/myorder" element={<Myorder/>}/>
        <Route path="/myschedule" element={<Myschedule/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/Signup" exact element={<Signup />} />
        <Route path="/edit" exact element={<Edit />} />

        </Routes>
        </Sidebar>
      </BrowserRouter>
      </div>
  );
}

export default App;
