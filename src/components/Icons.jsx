import React, { useEffect } from 'react'
import img1 from '../../public/icon1.png'
import img2 from '../../public/icon2.png'
import gsap from 'gsap'

const Icons = () => {
  useEffect(()=>{
    gsap.to(".icon img",{
      rotate:360,
      repeat:-1,
      duration:5,
      ease: "none"
    })
  }, [])
  return (
    <div className='icon fixed z-10 bottom-8 right-16'>
      <div className='mt-5 w-16 h-16'>
        <img src={img1} className='w-full h-full object-contain' />
      </div>
      <div className='mt-5 w-16 h-16 '>
        <img src={img2} className='w-full h-full object-contain' />
      </div>
    </div>
  )
}

export default Icons