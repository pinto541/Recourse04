import React from "react";
import { NavLink } from "react-router-dom";
import "./Common.css";

function Common({ name, imgsrc, visit, btname }) {
  return (
     <div className="asf">

      <div className="leftt">
        <h1>Improve Your Business with 
         <br/><span className="ee" style={{color:"darkblue", textAlign:"center"}}>
         Recourse Inc.</span>
         
        </h1>
        <h4> We at Recourse Provide Website Development,Mobile<br/> App Development to all the company who want to be<br/> Successful.</h4>
        
          <button>Our Services</button>
      </div>
      

      <div className="rightt">

        <img src="https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png"/>




      </div>

     </div>
  );
}

export default Common;
