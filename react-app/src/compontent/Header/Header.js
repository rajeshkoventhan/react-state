import { useState } from "react"

const Header = () =>{
 const [number,setnumber]= useState(0)

 const handle =()=>{
  setnumber (number+1)  
 }

 return(
 <div className="header">
 <h1>{number}</h1>
<button onClick={handle}>click</button>
 </div>
)   
}
export default Header;