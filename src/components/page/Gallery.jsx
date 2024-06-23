/* eslint-disable react/prop-types */
import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const GalleryContainer = styled.div`
   padding: 20px;
  border: 2px; /* Add a solid border to the outer container */
  max-width: 600px;
  margin: 0 auto; /* Center the container */
  border-radius: 10px; /* Add rounded corners to the border */

  
`;
const GalleryHeading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color:white;
  font-weight:bold;
  font-size:32px
`;

const Grid = styled.div`
   display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns grid */
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* Keep 3 columns for smaller screens */
    gap: 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr); /* Keep 3 columns for smaller screens */
    gap: 5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s;
  border-radius: 5px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ModalImage = styled.img`
  width: 60vw;
  height: 30vh;
  max-width: 100vw; /* Increased to take up full width of the viewport */
  max-height: 100vh; /* Increased to take up full height of the viewport */
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Scale up the image on hover */
  }
`;

Modal.setAppElement('#root');

const Gallery = ({imageData, heading, background}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <GalleryContainer style={{backgroundColor:`${background}`}}>
       <GalleryHeading>{heading}</GalleryHeading>
      <Grid>
        {imageData.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(image)}
          />
        ))}
      </Grid>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)', // Blackish background with fade
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100vw',
            maxHeight: '100vh',
            overflow: 'auto',
            padding: '0px',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 'none', // Remove border
          },
        }}
      >
         {currentImage && (
          <ModalImage src={currentImage.src} alt={currentImage.alt} />
        )}
      </Modal>
    </GalleryContainer>
  );
};

export default Gallery;
