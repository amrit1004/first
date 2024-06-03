import fs from "fs/promises"
import React from 'react'
// import { useState ,useEffect } from 'react'
const page = () => {
  let a = fs.readFile(".gitignore");
  a.then(e=>{console.log(e.toString( ))});
  // const [count , setCount] = useState(0)
  return (
    <div>I am component 
      {/* {count} */}
    {/* <button onClick={()=> setCount(count + 1)}>Click me</button> */}
    </div>
    
  )
}

export default page