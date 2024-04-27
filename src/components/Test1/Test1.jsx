import React from 'react'
import './Test1.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { useRef } from'react';
const Test1 = () => {
    const container = useRef()

    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from(".navLogo",{
            opacity:0,
            y:-30,
            duration:1,
            delay:0.5
        })
        tl.from(".linkWrapper ul li",{
            opacity:0,
            y:-30,
            duration:1,
            stagger:0.3
        })
    },{dependencies:[],scope:container})
  return (
    <nav ref={container}>
        <h1 className='navLogo'>GSAP</h1>
        <div className='linkWrapper'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>
                {/* <button>Explore More</button> */}
            </ul>

        </div>
    </nav>
  )
}

export default Test1