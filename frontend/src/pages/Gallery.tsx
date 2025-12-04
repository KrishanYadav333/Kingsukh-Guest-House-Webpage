import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: #1a1a1a;
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
  background: ${props => props.active ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : 'transparent'};
  color: ${props => props.active ? '#1a1a1a' : '#d4af37'};
  border: 2px solid #d4af37;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    color: #1a1a1a;
    transform: translateY(-2px);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 0.4s ease;
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
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2001;
`;

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    { id: 1, src: '/images/out.jpg', title: 'Exterior View', category: 'exterior' },
    { id: 2, src: '/images/random reception image.jpg', title: 'Reception Area', category: 'interior' },
    { id: 3, src: '/images/room1.jpg', title: 'Deluxe Room', category: 'rooms' },
    { id: 4, src: '/images/outside look.png', title: 'Suite Interior', category: 'rooms' },
    { id: 5, src: '/images/Bedroom pic.png', title: 'Cozy Room', category: 'rooms' },
    { id: 6, src: '/images/recep.jpg', title: 'Reception', category: 'interior' },
    { id: 7, src: '/images/baranti.webp', title: 'Lake View', category: 'views' },
    { id: 8, src: '/images/ayodhya.webp', title: 'Scenic Beauty', category: 'views' },
    { id: 9, src: '/images/mithonDam.webp', title: 'Dam View', category: 'views' },
    { id: 10, src: '/images/palash.webp', title: 'Natural Surroundings', category: 'views' },
    { id: 11, src: '/images/large.jpg', title: 'Spacious Room', category: 'rooms' },
    { id: 12, src: '/images/1.jpg', title: 'Property View', category: 'exterior' },
    { id: 13, src: '/images/small.jpg', title: 'Cozy Haven', category: 'rooms' },
    { id: 14, src: '/images/header.jpg', title: 'Guest House', category: 'exterior' },
    { id: 15, src: '/images/view from window.png', title: 'Window View', category: 'views' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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
          <FilterButtons>
            {filters.map(filter => (
              <FilterButton
                key={filter.key}
                active={activeFilter === filter.key}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterButtons>

          <GalleryGrid>
            {filteredItems.map(item => (
              <GalleryItem key={item.id} onClick={() => setSelectedImage(item.src)}>
                <GalleryImage src={item.src} alt={item.title} />
                <GalleryOverlay>
                  <GalleryTitle>{item.title}</GalleryTitle>
                </GalleryOverlay>
              </GalleryItem>
            ))}
          </GalleryGrid>
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