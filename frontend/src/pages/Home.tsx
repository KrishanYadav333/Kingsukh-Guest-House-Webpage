import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Hero = styled.section`
  height: 100vh;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(26, 26, 26, 0.4)), url('/images/header.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
  padding-top: 120px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding-top: 140px;
    background-attachment: scroll;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(26, 26, 26, 0.4));
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to left, rgba(212, 175, 55, 0.1), transparent);
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
  }
`;

const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  max-width: 700px;
  animation: fadeInUp 1s ease-out;
`;

const HeroSubtitle = styled.p`
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: #d4af37;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 15px;
  opacity: 0.9;
  
  &::before, &::after {
    content: '';
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #d4af37, transparent);
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  letter-spacing: -1px;
  
  span {
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 550px;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const PrimaryBtn = styled.button`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  padding: 14px 32px;
  border: none;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #f4d03f, #d4af37);
    transition: left 0.4s ease;
    z-index: -1;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.4);
  }
`;

const SecondaryBtn = styled.button`
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 12px 30px;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: left 0.4s ease;
    z-index: -1;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    border-color: #d4af37;
    color: #d4af37;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
  }
`;



const FacilitiesSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f1f3f4 100%);
  text-align: center;
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

const SectionHeader = styled.div`
  margin-bottom: 60px;
`;

const SectionSubtitle = styled.p`
  color: #b8865a;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40px;
    height: 1px;
    background: #b8865a;
  }
  
  &::before {
    left: -60px;
  }
  
  &::after {
    right: -60px;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #1a1a1a;
  font-weight: 300;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #f4d03f);
    border-radius: 2px;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FacilityCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.4s ease;
  border: 1px solid rgba(212, 175, 55, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #f4d03f);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(212, 175, 55, 0.15);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const FacilityIcon = styled.div`
  color: #d4af37;
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  
  ${FacilityCard}:hover & {
    transform: scale(1.1);
    filter: drop-shadow(0 5px 15px rgba(212, 175, 55, 0.3));
  }
`;

const FacilityTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
`;

const RoomsSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  text-align: center;
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

const RoomsSlider = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const RoomCard = styled.div`
  width: 380px;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease;
  border: 1px solid rgba(212, 175, 55, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), transparent);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 60px rgba(212, 175, 55, 0.2);
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const RoomImage = styled.div<{ bgImage: string }>`
  height: 250px;
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const PriceTag = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  padding: 12px 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const RoomContent = styled.div`
  padding: 2rem;
  text-align: left;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



const RoomName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const RoomDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  flex-grow: 1;
`;

const DiscoverBtn = styled.button`
  background: transparent;
  color: #b8865a;
  border: 1px solid #b8865a;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;
  
  &:hover {
    background: #b8865a;
    color: white;
  }
`;

const GallerySection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
  text-align: center;
  overflow: hidden;
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
  
  h2 {
    color: #ffffff !important;
  }
  
  p {
    color: #cccccc !important;
  }
`;

const GallerySlider = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
`;

const GalleryTrack = styled.div`
  display: flex;
  animation: slide 25s infinite linear;
  
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  &:hover {
    animation-play-state: paused;
  }
`;

const GalleryImage = styled.img`
  width: 320px;
  height: 220px;
  object-fit: cover;
  margin-right: 40px;
  border-radius: 15px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  transition: all 0.4s ease;
  position: relative;
  border: 2px solid rgba(212, 175, 55, 0.3);
  
  &:hover {
    transform: scale(1.08) translateY(-15px);
    box-shadow: 0 25px 60px rgba(212, 175, 55, 0.4);
    border-color: #d4af37;
  }
`;

const LocationSection = styled.section`
  padding: 60px 0 0;
  background: white;
  text-align: center;
`;

const LocationContainer = styled.div`
  width: 100%;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Home: React.FC = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookNow = () => {
    setShowBookingForm(true);
    setTimeout(() => {
      const bookingForm = document.querySelector('.booking-form');
      if (bookingForm) {
        bookingForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleExploreRooms = () => {
    window.location.href = '/rooms';
  };

  return (
    <>
      <Hero>
        <HeroOverlay />
        <HeroContainer>
          <HeroContent>
            <HeroSubtitle>WELCOME TO OUR HOTEL</HeroSubtitle>
            <HeroTitle>
              Experience A <span>Luxurious</span> Hotel<br />
              Stay <span>Comfort</span> And <span>Style</span>
            </HeroTitle>
            <HeroDescription>
              Indulge in a luxurious hotel stay where comfort meets style, offering world-class amenities, elegant design, and exceptional personalized service.
            </HeroDescription>
            <HeroButtons>
              <PrimaryBtn onClick={handleExploreRooms}>DISCOVER ROOM</PrimaryBtn>
              <SecondaryBtn onClick={handleBookNow}>BOOK NOW</SecondaryBtn>
            </HeroButtons>
          </HeroContent>
        </HeroContainer>
        

      </Hero>

      <FacilitiesSection>
        <SectionHeader>
          <SectionSubtitle>FACILITIES</SectionSubtitle>
          <SectionTitle>Luxury Facilities</SectionTitle>
          <p style={{color: '#666', fontSize: '1.1rem', marginTop: '2rem', maxWidth: '600px', margin: '2rem auto 0'}}>Indulge in world-class amenities designed to exceed your expectations</p>
        </SectionHeader>
        
        <FacilitiesGrid>
          <FacilityCard>
            <FacilityIcon>
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 3h12c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v14h12V5H6zm2 2h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
                <path d="M2 7h2v10H2V7zm18 0h2v10h-2V7z"/>
                <circle cx="7" cy="18" r="1.5"/>
                <circle cx="17" cy="18" r="1.5"/>
                <rect x="6" y="8" width="12" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </FacilityIcon>
            <FacilityTitle>Free Parking</FacilityTitle>
          </FacilityCard>
          
          <FacilityCard>
            <FacilityIcon>
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
              </svg>
            </FacilityIcon>
            <FacilityTitle>Free WiFi</FacilityTitle>
          </FacilityCard>
          
          <FacilityCard>
            <FacilityIcon>
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48c.3-.08.62-.12.95-.12s.65.04.95.12L8 11.47l.85 1.48c.3-.08.62-.12.95-.12s.65.04.95.12L12 11.47l.85 1.48c.3-.08.62-.12.95-.12s.65.04.95.12L16 11.47l.85 1.48c.3-.08.62-.12.95-.12s.65.04.95.12L20 11.47l.85 1.48c.3-.08.62-.12.95-.12V15H2v-2.05z"/>
              </svg>
            </FacilityIcon>
            <FacilityTitle>Room Service</FacilityTitle>
          </FacilityCard>
          
          <FacilityCard>
            <FacilityIcon>
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l7.02 7.01zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
              </svg>
            </FacilityIcon>
            <FacilityTitle>Food & Dining</FacilityTitle>
          </FacilityCard>
        </FacilitiesGrid>
      </FacilitiesSection>

      <RoomsSection>
        <SectionHeader>
          <SectionSubtitle>ROOMS</SectionSubtitle>
          <SectionTitle>Exquisite Rooms & Suites</SectionTitle>
          <p style={{color: '#666', fontSize: '1.1rem', marginTop: '2rem', maxWidth: '700px', margin: '2rem auto 0'}}>Discover our meticulously designed accommodations where luxury meets comfort</p>
        </SectionHeader>
        
        <RoomsSlider>
          <RoomCard>
            <RoomImage bgImage="/images/small.jpg">
              <PriceTag>Starting from Rs. 1000/night</PriceTag>
            </RoomImage>
            <RoomContent>
              <RoomName>Cozy Haven Room</RoomName>
              <RoomDescription>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.</RoomDescription>
              <DiscoverBtn style={{marginTop: '14px'}} onClick={() => window.open('https://api.whatsapp.com/send?phone=919007062180', '_blank')}>BOOK NOW</DiscoverBtn>
            </RoomContent>
          </RoomCard>
          
          <RoomCard>
            <RoomImage bgImage="/images/large.jpg">
              <PriceTag>Starting from Rs. 1500/night</PriceTag>
            </RoomImage>
            <RoomContent>
              <RoomName>Spacious Serenity Suite</RoomName>
              <RoomDescription>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.</RoomDescription>
              <DiscoverBtn onClick={() => window.open('https://api.whatsapp.com/send?phone=919007062180', '_blank')}>BOOK NOW</DiscoverBtn>
            </RoomContent>
          </RoomCard>
        </RoomsSlider>
      </RoomsSection>

      <GallerySection>
        <SectionHeader>
          <SectionSubtitle>GALLERY</SectionSubtitle>
          <SectionTitle>Luxury Gallery</SectionTitle>
          <p style={{color: '#cccccc', fontSize: '1.1rem', marginTop: '2rem', maxWidth: '600px', margin: '2rem auto 0'}}>Immerse yourself in the elegance and beauty of our premium accommodations</p>
        </SectionHeader>
        
        <GallerySlider>
          <GalleryTrack>
            <GalleryImage src="/images/out.jpg" alt="Exterior View" />
            <GalleryImage src="/images/recep.jpg" alt="Reception" />
            <GalleryImage src="/images/room1.jpg" alt="Room" />
            <GalleryImage src="/images/large.jpg" alt="Spacious Room" />
            <GalleryImage src="/images/small.jpg" alt="Cozy Room" />
            <GalleryImage src="/images/baranti.webp" alt="Lake View" />
            <GalleryImage src="/images/ayodhya.webp" alt="Scenic Beauty" />
            <GalleryImage src="/images/mithonDam.webp" alt="Dam View" />
            <GalleryImage src="/images/palash.webp" alt="Natural Beauty" />
            <GalleryImage src="/images/header.jpg" alt="Guest House" />
            <GalleryImage src="/images/1.jpg" alt="Property View" />
            <GalleryImage src="/images/out.jpg" alt="Exterior View" />
            <GalleryImage src="/images/recep.jpg" alt="Reception" />
            <GalleryImage src="/images/room1.jpg" alt="Room" />
            <GalleryImage src="/images/large.jpg" alt="Spacious Room" />
            <GalleryImage src="/images/small.jpg" alt="Cozy Room" />
          </GalleryTrack>
        </GallerySlider>
      </GallerySection>

      <LocationSection>
        <SectionHeader>
          <SectionTitle>Find Us Here</SectionTitle>
        </SectionHeader>
        
        <LocationContainer>
          <MapContainer>
            <iframe
              src="https://maps.google.com/maps?q=Kingsukh%20Guest%20House,%20beside%20Barshal%20Water%20Tank,%20Manpur,%20Barhanti,%20West%20Bengal%20723156&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kingsukh Guest House Location"
            />
          </MapContainer>
        </LocationContainer>
      </LocationSection>
    </>
  );
};

export default Home;