import { useEffect } from "react";
//import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Page1 = () => {
   
  useEffect(() => {
    gsap.to('.page1', {
      scrollTrigger: {
        trigger: '.page1',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      scale: 0.5, // Scale down to 50%
      opacity: 0, // Fade out
      transformOrigin: 'center center', // Transform origin to the center
      ease: 'power5.inOut', // Ease for smooth animation
    });
  }, []);
  
  return (
   
    <div className="page1">
       <div className="left">
        <div className="textcontainer">
        <h2>Dental Clinic At Home</h2>
        <p>
          The New Era Of Dental Care
        </p>
        <div className="buttons">
        <button className="btn-consult">
          Book Free Consultation
        </button>
        </div>
        </div>
       </div>
       <div className="right">
       
        
       </div>
    </div>
  )
}
