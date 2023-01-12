import {useState} from "react"

const Header = () =>{
const [number,setnumber] = useState(0)
const [point,setpoint] = useState(0)

 const handle =()=>{
  setnumber (number + 1)  
 }

 const sethandle = ()=>{
  setpoint(point - 1)  
 }

 return(
 <div className="header">
 <h1>{number}</h1>
<button onClick={handle}>click</button>
<button onClick={sethandle}>click</button>
<h1>{point}</h1>
 </div>
)   
}
export default Header;

