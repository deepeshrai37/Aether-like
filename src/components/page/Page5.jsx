

import BrandLogoSlider from "./BrandLogo";
import { Faq } from "./Faq";
import Gallery from "./Gallery";
import { Stats } from "./Stats";
import { Testimonials } from "./Testimonials";
const gogreenimageData=[
  { src: "https://via.placeholder.com/150", alt: "Image 1" },
  { src: "https://via.placeholder.com/150", alt: "Image 2" },
  { src: "https://via.placeholder.com/150", alt: "Image 3" },
  { src: "https://via.placeholder.com/150", alt: "Image 4" },
  { src: "https://via.placeholder.com/150", alt: "Image 5" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
];
const campData=[
  { src: "https://via.placeholder.com/150", alt: "Image 1" },
  { src: "https://via.placeholder.com/150", alt: "Image 2" },
  { src: "https://via.placeholder.com/150", alt: "Image 3" },
  { src: "https://via.placeholder.com/150", alt: "Image 4" },
  { src: "https://via.placeholder.com/150", alt: "Image 5" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
  { src: "https://via.placeholder.com/150", alt: "Image 6" },
];


export const Page5 = () => {

  
  return (
    <div className="page5">
      <div className="container">
      <h1>Our Brand Partners</h1>
      <BrandLogoSlider/>      
       </div>
      <div className="card-container">
        <Gallery imageData={gogreenimageData} heading="Go Green Initiative" background="yellowgreen"/>
        <Gallery imageData={campData} heading="Our Health Camps" background=" #2d2d32"/>

      </div>

      <div className="map-container">
        <div className="left">
          <h1>Map Section</h1>
        </div>
        <div className="right"></div>
      </div>

        <Stats/>
      
      <div className="video-container">
        <h1>Testimonials</h1>
        <Testimonials/>
      </div>
      <Faq/>
     
      
    </div>
  )
}
