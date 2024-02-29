import React from 'react'

export default function BmiValue(props) {
  
    if(props.value<=18.5){
        return(
            <div className="container text-center">
            <div className="container"><h3>The Result is:</h3></div>
            <h4>Your value of BMI is  {props.value} and you are an UnderWeight Person.</h4>
            </div>)
          
    }
    else if(props.value>18.5 && props.value<=24.9){
        return(
            <div className="container text-center">
            <div className="container"><h3>The Result is:</h3></div>
            <h4>Your value of BMI is  {props.value} and you are an OverWeight Person.</h4>
            </div>)
          
    }
    else if(props.value>25 && props.value<=29.9){
        return(
            
            <div className="container text-center">
            <div className="container"><h3>The Result is:</h3></div>
            <h4>Your value of BMI is  {props.value} and you are an OverWeight Person.</h4>
            </div>)
          
    }
    else{
        return(
            <div className="container text-center">
            <div className="container"><h3>The Result is:</h3></div>
            <h4>Your value of BMI is  {props.value} and you are an Obese Person.</h4>
            </div>)  
    }
  
}
