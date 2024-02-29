import React from "react";
import { Link } from "react-router-dom";

export default function Heading() {
  
 
 
  return (

  
    <div className="container text-center">
      <h2>This is my BMI Calculator</h2>
      <h3>There are two types of BMI Calculator</h3>
      <div className="container d-flex justify-content-around">
        
       
          <Link to="/standard"><button type="button" className="btn btn-primary" >
           Standard
          </button></Link>
        
        
          <Link to="/metric"><button type="button" className="btn btn-danger" >
           Metric
          </button></Link>
        
        
      </div>
    </div>
  );
}
