import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const logoData = [
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s", id: 0 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s", id: 1 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s", id: 2 },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s", id: 3 },
];

const Container = styled.div`
  width: 100%;
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  max-height: 100px;
  max-width: 150px;
  margin: 10px;
  @media (max-width: 768px) {
    max-height: 70px;
    max-width: 100px;
  }
`;

const BrandLogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Container>
      <Slider {...settings}>
        {logoData.concat(logoData).map((logo, index) => (
          <div key={index}>
            <Logo src={logo.image} alt={`Brand logo ${index}`} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default BrandLogoSlider;
