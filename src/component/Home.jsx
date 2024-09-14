import React from 'react'
import './Home.css'
import   image from '../assets/image.png'
import { FaArrowRight } from "react-icons/fa6";
const Home = () => {
  return (
    < div className='w-full  homeStyle'>
    <div  className='  '>
        <div  className='styleHeading p-7'>
      
<h1  className='heading flex'> <span className=' text-[#849FAD] text-[60px] font-[800]'>Online &nbsp;</span> <span className='heading1'>Startup Accelerator</span> </h1>
<h2 className='heading2'>Grow your startup like crazy without giving up  penny  equity.</h2>
</div>
<div  className='image-sec colorStyle'>
    <img src='https://www.startups.com/_next/static/media/how-it-works-w-labels.18001163.png'/>
    </div>
    <div  className='allimage'>
    <img className='image1' src="https://www.startups.com/_next/static/media/1.4cf3919d.png
"  />
<img className='image2' src="https://www.startups.com/_next/static/media/2.5df91019.png" />
    <img className='image3' src="https://www.startups.com/_next/static/media/3.ad927713.png" alt="" />
    <div className=''></div>
</div>
    </div>
    </div>
  )
}

export default Home