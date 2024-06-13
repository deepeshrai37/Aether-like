import { useEffect } from "react";
//import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const Page3 = () => {
  useEffect(() => {
    gsap.to('.page3', {
      scrollTrigger: {
        trigger: '.page3',
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
    <div className="page3">
       <div className="left">
        <div className="textcontainer">
        <h2>Lorem, ipsum dolor.</h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <div className="buttons">
        <button className="btn-consult">
          Book Free Consultation
        </button>
        <button className="btn-contact">Contact Us</button>
        </div>
        </div>
       </div>
       <div className="right">
       
        
       </div>
    </div>
  )
}