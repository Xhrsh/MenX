import logo from './logo.svg';
import './App.css';
import Login from "./com/home"
import Userpage  from './com/userpage';
import Casual from "./com/next/casual"
import Westernwear from './com/next/westernwear';
import Tees from './com/next/tees'
import Polo from './com/next/polo'
import Pant from './com/next/pant'
import Hoodies from './com/next/hoodies'
import Short from './com/next/short'
import Accessories from './com/next/accessories'
import Cs from './com/next/cs'
import CartPage from './com/next/Cart';
import Profile from './com/next/profie';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
function App() {
  return (
<>
<Router>
  <Routes>
    <Route exact path='/' element={<Login />}/>
    <Route exact path="/userpage" element={<Userpage/>}/>
    <Route exact path="/casual" element={<Casual/>}/>
    <Route exact path="/westernwear" element={<Westernwear/>}/>
    <Route exact path="/tees" element={<Tees/>}/>
    <Route exact path="/hoodies" element={<Hoodies/>}/>
    <Route exact path="/accessories" element={<Accessories/>}/>
    <Route exact path="/polo" element={<Polo/>}/>
    <Route exact path="/pant" element={<Pant/>}/>
    <Route exact path="/short" element={<Short/>}/>
    <Route exact path="/cs" element={<Cs/>}/>
 <Route exact path='/profie' element={<Profile/>}></Route> 
   <Route exact path="/Cart" element={<CartPage/>}></Route>
  </Routes>
</Router>
</>
  );
}

export default App;
