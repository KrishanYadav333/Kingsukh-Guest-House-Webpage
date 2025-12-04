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
  background: white;
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
  border-radius: 0;
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid #d4af37;
    z-index: 1;
    pointer-events: none;
  }
`;

const StatsSection = styled.section`
  padding: 80px 0;
  background: #f8f9fa;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    color: #d4af37;
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
  background: white;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: #f8f9fa;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
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
  font-size: 2rem;
`;

const FeatureTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
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
              <img src="/images/random reception image.jpg" alt="Reception Area" />
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
          <div className="section-title">
            <h2>Why Choose Kingsukh</h2>
            <p>Experience the difference that makes us special</p>
          </div>
          
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>🏞️</FeatureIcon>
              <FeatureTitle>Prime Location</FeatureTitle>
              <FeatureDescription>
                Located in the heart of Baranti, offering breathtaking views of the lake and 
                surrounding hills, perfect for nature lovers.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🛏️</FeatureIcon>
              <FeatureTitle>Luxury Comfort</FeatureTitle>
              <FeatureDescription>
                Premium rooms equipped with modern amenities, ensuring your stay is comfortable 
                and memorable with attention to every detail.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🍽️</FeatureIcon>
              <FeatureTitle>Culinary Excellence</FeatureTitle>
              <FeatureDescription>
                Savor authentic local cuisine and international dishes prepared by our expert 
                chefs using fresh, locally sourced ingredients.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureTitle>Personalized Service</FeatureTitle>
              <FeatureDescription>
                Our dedicated staff ensures personalized attention to make your stay exceptional, 
                from arrival to departure.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🌿</FeatureIcon>
              <FeatureTitle>Eco-Friendly</FeatureTitle>
              <FeatureDescription>
                Committed to sustainable tourism practices while preserving the natural beauty 
                of our surroundings for future generations.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>🚗</FeatureIcon>
              <FeatureTitle>Easy Access</FeatureTitle>
              <FeatureDescription>
                Convenient location with easy access to major attractions, transportation hubs, 
                and local points of interest.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
    </AboutContainer>
  );
};

export default About;