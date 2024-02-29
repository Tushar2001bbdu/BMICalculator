import React,{useState} from 'react'
import BmiValue from './BmiValue'

export default function TestData() {
    const[cm,setcm]=useState(0)
 const[kg,setkg]=useState(0)
 const[BMI,setBMI]=useState(0)
 function computeBMI(){
    let metres=cm/100
    let BBMI=kg/(metres*metres);
    setBMI(BBMI)

 }
 if(BMI!==0){
    return(<BmiValue value={BMI}/>)
}
 
  return (
    <div className='container'>
        <h2>This is my Metric BMI Calculator</h2>
      <form onSubmit={(event)=>{event.preventDefault();computeBMI()}}> 
  <div classNme="form-group">
    <label htmlFor="exampleInputEmail1">Enter Height in centimetres</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{setcm(event.target.value)}} value={cm} placeholder="Enter height in feet"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Enter Weight in Kilograms</label>
    <input type="text" class="form-control" id="exampleInputPassword1" onChange={(event)=>{setkg(event.target.value)}} value={kg} placeholder="Enter Weight in Kilograms"/>
  </div>
  
  
  <button type="submit" className="btn btn-info my-3">Compute BMI</button>
</form>
    </div>
  )
}
