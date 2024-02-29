import React ,{useState}from 'react'
import BmiValue from './BmiValue'

export default function TestData2() {
    const[feet,setFeet]=useState(0)
    const[pound,setpound]=useState(0)
    const[inches,setInches]=useState(0)
    const[BMI,setBMI]=useState(0)
       function computeBMI(){
    
    
    
    let BBMI=((pound)/(inches*inches))
    BBMI=BBMI*703

    setBMI(BBMI)
    

}
if(BMI!==0){
    return(<BmiValue value={BMI}/>)
}

  return (
    <div className='container'>
        <h2>This is my Standard BMI Calculator</h2>
      <form onSubmit={(event)=>{event.preventDefault();computeBMI()}}> 
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Enter Height in Feet</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{setFeet(event.target.value)}} value={feet} placeholder="Enter height in feet"/>
   
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputPassword1">Enter Height in Inches</label>
    <input type="text" class="form-control" id="exampleInputPassword1" onChange={(event)=>{setInches(event.target.value)}} value={inches} placeholder="Enter Height In Inches"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Enter Weight</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(event)=>{setpound(event.target.value)}} value={pound} placeholder="Enter Weight In Pounds"/></div>
  
  
  <button type="submit" className="btn btn-info my-3">Compute BMI</button>
</form>
    </div>

   
  )
  }
