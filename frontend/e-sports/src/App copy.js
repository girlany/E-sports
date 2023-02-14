


import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom";
import About from "./pages/About";
import About2 from "./pages/About2";

import MyButton from "./components/Button";

import './teste.css';


const App = () => {
    return (
  
        <div className="teste2">
         

<div className="teste">

<h1 className="hh1">Registro E-sports</h1>

<Router>
    <MyButton id="main-button" to="" />
    <MyButton  to="about2" />
    <MyButton  to="about" />
  
    <Routes>
   
     
        <Route path="/about" 
            element={<About />} />

              <Route path="/about2" 
            element={<About2 />} />




    </Routes>
</Router>



</div>
               
           
               
        </div>
       


    

       
    )
}

export default App;