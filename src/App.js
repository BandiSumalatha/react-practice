import './App.css';
import Header from './components/Header';
import ProductDeatil from './components/ProductDeatil';
import ProductListing from './components/ProductListing'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
         <Routes>
          <Route  path="/" exact element={<ProductListing/> } />
           <Route  path="/product/:productId" exact element={<ProductDeatil/>} />
           <Route>404 page not found</Route>
        </Routes>
      </BrowserRouter>
     </div>
  );
}

export default App;
