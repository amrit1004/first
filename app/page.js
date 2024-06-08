import React from 'react'
import Image from 'next/image'
const Home = () => {
  return (
    <div className='container relative mx-auto bg-red-50'>
       <Image className="mx-auto " fill={true} src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
    </div>
  )
}

export default Home