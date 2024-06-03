"use client"
import React from 'react'
import { useState ,useEffect } from 'react'
const page = () => {
  const [count , setCount] = useState(0)
  return (
    <div>I am component {count}
    <button onClick={()=> setCount(count + 1)}>Click me</button>
    </div>
    
  )
}

export default page