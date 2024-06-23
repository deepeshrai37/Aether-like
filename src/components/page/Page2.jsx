import { useEffect } from "react";
//import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const Page2= () => {
  
  useEffect(() => {
    gsap.to('.page2', {
      scrollTrigger: {
        trigger: '.page2',
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
    <div className="page2">
     <video src="src\assets\IMG_5589.MP4" muted autoPlay loop onBlur="20" ></video>
     <div className="textcontainer">
      <div className="left">
      <h2>
        Hair Treatment At Home
      </h2>
      <button>
        Book Free Consultation
      </button>
      </div>
      <div className="right"></div>
      
     </div>
    </div>
  )
}