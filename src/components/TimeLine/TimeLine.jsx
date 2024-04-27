import React from "react";
import "./TimeLine.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
const TimeLine = () => {
    const container = useRef()
    const tl = gsap.timeline()
    useGSAP(()=>{
        tl.to(".tlBox1",{
            x:1000,
            duration:2,
            delay:1,
            rotate:360
        })
        tl.to(".tlBox2",{
            x:1000,
            duration:2,
            rotate:360,
            backgroundColor:"lightblue"
        })
        tl.to(".tlBox3",{
            x:1000,
            duration:2, 
            rotate:360,
            borderRadius:"50%"
        })
    },{dependencies:[],scope:container})
  return (
    <div ref={container}>
      <div className="tlBox1"></div>
      <div className="tlBox2"></div>
      <div className="tlBox3"></div>
    </div>
  );
};

export default TimeLine;
