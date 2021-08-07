import React from "react";
import { Switch,Route,Link} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import './Pages/page.css'

// import { useState } from "react";
export default function App(){
  // const [state, setState] = useState(0);


return(
  <div className="MAIN">
    
    <nav className="nav">
     <Link className="Link" to="/home">Home</Link> 
  <Link className="Link" to="/about">About</Link> 
  <Link className="Link" to ="/contact">Contact</Link>
   <Link className="Link" to="/Login">Login</Link>
   </nav>
   <section className="navsection">
   

   {/* <h1>Hello World...</h1>
    <button onClick={() => setState(state+1)}>Click</button>
    {state}  */}

    <Switch>
     <Route path="/contact">
       <Contact />
     </Route> 
     <Route path="/about">
       <About />
     </Route> 
     <Route path="/Login">
       <Login />
     </Route>
   <Route path="/" >
       <Home />
     </Route> 
     </Switch>
  
      {/* <Forms />  */}
      </section>
   
  </div>

)
}




// // import logo from './logo.svg';
// import './Style.css';

// import UserCard from './UserCard';

// import React, {useState} from 'react';

// function App() {
//     const [count, setCount] = useState(0);
//     const [isLog, setIsLog] = useState(false);
      
//     const handleLogClick = () => {
//       setIsLog(!isLog);
//     };

//     return (
//         <div className="App">
//           {isLog ? (<p>We are logged in</p>
//           ): (
//           <p>You are logged out, please sign in</p>)}
//           <button className="btn" onClick={handleLogClick}>{isLog ? <span>Logout</span>: <span>Login</span>}</button>
//           {/* <UserCard count = {count} handleClick={handleClick}handleClick2={handleClick2}/> */}
//         </div>
//     );
// };


//export default App;

