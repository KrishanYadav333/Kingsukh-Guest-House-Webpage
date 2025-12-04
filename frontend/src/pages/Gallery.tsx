import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: #fff;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/images/out.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  letter-spacing: 1px;
`;

const GallerySection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #d4af37, transparent);
  }
`;

const GalleryWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : '#fff'};
  color: ${props => props.active ? '#1a1a1a' : '#333'};
  border: 2px solid #d4af37;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  
  &:hover {
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    color: #1a1a1a;
    transform: translateY(-2px);
  }
`;

const GalleryGrid = styled.div`
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: trainScroll 120s linear infinite;
  
  @keyframes trainScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const GalleryItem = styled.div`
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  cursor: pointer;
  position: relative;
  border: 4px solid #d4af37;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(212, 175, 55, 0.25), 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.6s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid rgba(212, 175, 55, 0.5);
    border-radius: 29px;
    z-index: -1;
    transition: all 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-20px) scale(1.05) rotate(2deg);
    box-shadow: 0 35px 70px rgba(212, 175, 55, 0.4), 0 15px 35px rgba(0, 0, 0, 0.2);
    border-color: #f4d03f;
  }
  
  &:hover::after {
    border-color: #f4d03f;
    transform: scale(1.02) rotate(-1deg);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%, rgba(244, 208, 63, 0.1) 100%);
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s ease;
  filter: brightness(0.95) contrast(1.05);
  
  ${GalleryItem}:hover & {
    transform: scale(1.15);
    filter: brightness(1.1) contrast(1.1) saturate(1.2);
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(212, 175, 55, 0.8), rgba(244, 208, 63, 0.8));
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const GalleryTitle = styled.h3`
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
`;

const Modal = styled.div<{ show: boolean }>`
  display: ${props => props.show ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(26, 26, 26, 0.9));
  backdrop-filter: blur(10px);
  z-index: 2000;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 25px 60px rgba(212, 175, 55, 0.3);
  border: 3px solid rgba(212, 175, 55, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  border: none;
  color: #1a1a1a;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2001;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }
`;

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    { id: 1, src: '/images/1.jpg', title: 'Property View' },
    { id: 2, src: '/images/ayodhya.webp', title: 'Ayodhya Hills' },
    { id: 3, src: '/images/baranti.webp', title: 'Baranti Lake' },
    { id: 4, src: '/images/large.jpg', title: 'Bedroom' },
    { id: 5, src: '/images/header.jpg', title: 'Guest House' },
    { id: 6, src: '/images/large.jpg', title: 'Spacious Room' },
    { id: 7, src: '/images/mithonDam.webp', title: 'Mithon Dam' },
    { id: 8, src: '/images/out.jpg', title: 'Exterior View' },
    { id: 9, src: '/images/out.jpg', title: 'Outside View' },
    { id: 10, src: '/images/palash.webp', title: 'Palash Bungalow' },
    { id: 11, src: '/images/recep.jpg', title: 'Reception Area' },
    { id: 12, src: '/images/recep.jpg', title: 'Reception' },
    { id: 13, src: '/images/room1.jpg', title: 'Deluxe Room' },
    { id: 14, src: '/images/small.jpg', title: 'Cozy Room' },
    { id: 15, src: '/images/room1.jpg', title: 'Window View' }
  ];



  const filters = [
    { key: 'all', label: 'All' },
    { key: 'exterior', label: 'Exterior' },
    { key: 'interior', label: 'Interior' },
    { key: 'rooms', label: 'Rooms' },

    { key: 'views', label: 'Views' }
  ];

  return (
    <GalleryContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Gallery</HeroTitle>
          <HeroSubtitle>Discover the beauty of Kingsukh Guest House</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <GallerySection>
        <Container>
          <GalleryWrapper>
            <GalleryGrid>
            {[...galleryItems, ...galleryItems].map((item, index) => (
              <GalleryItem key={`${item.id}-${index}`} onClick={() => setSelectedImage(item.src)}>
                <GalleryImage src={item.src} alt={item.title} onError={(e) => console.log('Image failed to load:', item.src)} />
              </GalleryItem>
            ))}
            </GalleryGrid>
          </GalleryWrapper>
        </Container>
      </GallerySection>

      <Modal show={!!selectedImage} onClick={() => setSelectedImage(null)}>
        <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
        {selectedImage && (
          <ModalImage src={selectedImage} alt="Gallery Image" />
        )}
      </Modal>
    </GalleryContainer>
  );
};

export default Gallery;