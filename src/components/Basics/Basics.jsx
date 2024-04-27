import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import './Basics.css'
function Basics() {
  const container = useRef()
  useGSAP(()=>{
    gsap.to(".box",{
      x:1200,
      delay:1,
      duration:3,
      rotate:360,
      borderRadius:"50%",
      backgroundColor:"blue",
      repeat:2, 
      yoyo:true // Go Initial to Final and come back from final to initial
    })
    gsap.from(".box1",{
      x:1200,
      delay:1,
      duration:3,
      rotate:360,
      borderRadius:"10px",
      backgroundColor:"purple",
      repeat:2,
      yoyo:true
    })
    gsap.to("h1",{
      opacity:1,
      stagger:0.8,
      x:50,
      duration:1,
      delay:2,
      repeat:-1,
      yoyo:true
      // marginTop:"20px"
    })
  },{dependencies:[],scope:container,revertOnUpdate:true})
  return(
    <div ref={container} >
     <div className="box"></div>
     <div className="box1"></div>
     <h1 style={{opacity:0}}>This will come First</h1>
     <h1 style={{opacity:0}}>This will come Second</h1>
     <h1 style={{opacity:0}}>This will come Third</h1>
    </div>
  )
}
export default Basics