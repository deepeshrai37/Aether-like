import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Dummy testimonial data
const testimonialData = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    description: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    id: 4,
    name: 'Emily Brown',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    description: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  },
];

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <div className="testimonial-content">
              <p className="testimonial-description">{testimonial.description}</p>
              <div className="testimonial-info">
                <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  {/* Additional info like job title, company, etc. can be added here */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

