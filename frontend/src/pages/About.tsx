import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/images/out.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.9;
  letter-spacing: 1px;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  margin-bottom: 5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 2rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: #d4af37;
    }
  }
  
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const AboutImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(212, 175, 55, 0.2);
  border: 3px solid rgba(212, 175, 55, 0.3);
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: brightness(0.95) contrast(1.05);
  }
  
  &:hover img {
    transform: scale(1.08);
    filter: brightness(1.1) contrast(1.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid rgba(212, 175, 55, 0.6);
    border-radius: 15px;
    z-index: 1;
    pointer-events: none;
    transition: all 0.5s ease;
  }
  
  &:hover::before {
    border-color: #d4af37;
    transform: scale(1.02);
  }
`;

const StatsSection = styled.section`
  padding: 80px 0;
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.15);
  border: 2px solid rgba(212, 175, 55, 0.2);
  transition: all 0.5s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), transparent);
    border-radius: 18px;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 60px rgba(212, 175, 55, 0.25);
    border-color: #d4af37;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  p {
    color: #666;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%);
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

const FeaturesWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const FeaturesGrid = styled.div`
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: featureScroll 60s linear infinite;
  
  @keyframes featureScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  transition: all 0.5s ease;
  flex-shrink: 0;
  width: 350px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.15), 0 5px 15px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(212, 175, 55, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), transparent);
    border-radius: 18px;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 60px rgba(212, 175, 55, 0.25), 0 10px 25px rgba(0, 0, 0, 0.15);
    border-color: #d4af37;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: #1a1a1a;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.3);
  transition: all 0.5s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f4d03f, #d4af37);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.4);
  }
  
  ${FeatureCard}:hover &::before {
    opacity: 1;
  }
`;

const FeatureTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #d4af37, #f4d03f);
    border-radius: 1px;
  }
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const SectionTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: #d4af37;
    }
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>About Kingsukh</HeroTitle>
          <HeroSubtitle>
            Where luxury meets nature, and every stay becomes an unforgettable experience
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <AboutGrid>
            <AboutContent>
              <h2>Our Story</h2>
              <p>
                Nestled in the serene landscape of Baranti, Kingsukh Guest House stands as a beacon 
                of hospitality and comfort. Our journey began with a simple vision: to create a 
                sanctuary where travelers can experience the perfect blend of luxury and nature.
              </p>
              <p>
                Every corner of our guest house tells a story of careful craftsmanship and attention 
                to detail. From our thoughtfully designed rooms to our personalized service, we 
                strive to make every moment of your stay memorable.
              </p>
              <p>
                Whether you're seeking a peaceful retreat or an adventure-filled getaway, Kingsukh 
                Guest House offers the perfect base to explore the natural beauty of West Bengal 
                while enjoying world-class amenities.
              </p>
            </AboutContent>
            
            <AboutImage>
              <img src="/images/recep.jpg" alt="Reception Area" />
            </AboutImage>
          </AboutGrid>
        </Container>
      </ContentSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            <StatCard>
              <h3>500+</h3>
              <p>Happy Guests</p>
            </StatCard>
            <StatCard>
              <h3>50+</h3>
              <p>Luxury Rooms</p>
            </StatCard>
            <StatCard>
              <h3>24/7</h3>
              <p>Room Service</p>
            </StatCard>
            <StatCard>
              <h3>5★</h3>
              <p>Guest Rating</p>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>

      <FeaturesSection>
        <Container>
          <SectionTitleWrapper>
            <h2>Why Choose Kingsukh</h2>
            <p>Experience the difference that makes us special</p>
          </SectionTitleWrapper>
          
          <FeaturesWrapper>
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Prime Location</FeatureTitle>
                <FeatureDescription>
                  Located in the heart of Baranti, offering breathtaking views of the lake and surrounding hills, perfect for nature lovers.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Luxury Comfort</FeatureTitle>
                <FeatureDescription>
                  Premium rooms equipped with modern amenities, ensuring your stay is comfortable and memorable with attention to every detail.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Culinary Excellence</FeatureTitle>
                <FeatureDescription>
                  Savor authentic local cuisine and international dishes prepared by our expert chefs using fresh, locally sourced ingredients.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Personalized Service</FeatureTitle>
                <FeatureDescription>
                  Our dedicated staff ensures personalized attention to make your stay exceptional, from arrival to departure.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Eco-Friendly</FeatureTitle>
                <FeatureDescription>
                  Committed to sustainable tourism practices while preserving the natural beauty of our surroundings for future generations.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Easy Access</FeatureTitle>
                <FeatureDescription>
                  Convenient location with easy access to major attractions, transportation hubs, and local points of interest.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Prime Location</FeatureTitle>
                <FeatureDescription>
                  Located in the heart of Baranti, offering breathtaking views of the lake and surrounding hills, perfect for nature lovers.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Luxury Comfort</FeatureTitle>
                <FeatureDescription>
                  Premium rooms equipped with modern amenities, ensuring your stay is comfortable and memorable with attention to every detail.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Culinary Excellence</FeatureTitle>
                <FeatureDescription>
                  Savor authentic local cuisine and international dishes prepared by our expert chefs using fresh, locally sourced ingredients.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Personalized Service</FeatureTitle>
                <FeatureDescription>
                  Our dedicated staff ensures personalized attention to make your stay exceptional, from arrival to departure.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Eco-Friendly</FeatureTitle>
                <FeatureDescription>
                  Committed to sustainable tourism practices while preserving the natural beauty of our surroundings for future generations.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard>
                <FeatureIcon>
                  <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </FeatureIcon>
                <FeatureTitle>Easy Access</FeatureTitle>
                <FeatureDescription>
                  Convenient location with easy access to major attractions, transportation hubs, and local points of interest.
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </FeaturesWrapper>
        </Container>
      </FeaturesSection>
    </AboutContainer>
  );
};

export default About;