import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/images/header.jpg');
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

const ServicesSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/out.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.15), 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease;
  border: 2px solid rgba(212, 175, 55, 0.2);
  border-radius: 20px;
  position: relative;
  
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
    border-radius: 18px;
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

const ServiceIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: #1a1a1a;
  transition: all 0.5s ease;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.3);
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
  
  ${ServiceCard}:hover & {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 15px 40px rgba(212, 175, 55, 0.4);
  }
  
  ${ServiceCard}:hover &::before {
    opacity: 1;
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #d4af37, #f4d03f);
    border-radius: 1px;
  }
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  text-align: left;
  
  li {
    color: #666;
    margin-bottom: 0.8rem;
    position: relative;
    padding-left: 1.5rem;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #d4af37;
      font-weight: bold;
    }
  }
`;

const PremiumSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const PremiumGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const PremiumContent = styled.div`
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
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const PremiumImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
  border: 3px solid rgba(212, 175, 55, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid rgba(212, 175, 55, 0.5);
    border-radius: 15px;
    z-index: 1;
    pointer-events: none;
    transition: all 0.4s ease;
  }
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  &:hover img {
    transform: scale(1.08);
  }
  
  &:hover::before {
    border-color: #d4af37;
    transform: scale(1.02);
  }
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

const BookButton = styled.button`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  border: none;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      icon: <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>,
      title: 'Luxury Accommodation',
      description: 'Experience unparalleled comfort in our meticulously designed rooms and suites.',
      features: [
        'Premium bedding and linens',
        'Climate control systems',
        'Modern bathroom amenities',
        'Complimentary Wi-Fi',
        'Daily housekeeping'
      ]
    },
    {
      icon: <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/></svg>,
      title: 'Fine Dining',
      description: 'Savor exquisite culinary experiences with our diverse menu of local and international cuisine.',
      features: [
        'Multi-cuisine restaurant',
        'Room service available',
        'Special dietary accommodations',
        'Local specialty dishes',
        'Fresh, locally sourced ingredients'
      ]
    },
    {
      icon: <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>,
      title: 'Transportation',
      description: 'Convenient and comfortable transportation services for all your travel needs.',
      features: [
        'Airport pickup and drop-off',
        'Local sightseeing tours',
        'Car rental assistance',
        'Professional drivers',
        'Flexible scheduling'
      ]
    },
    {
      icon: <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
      title: 'Concierge Services',
      description: 'Our dedicated concierge team ensures every aspect of your stay is perfectly arranged.',
      features: [
        'Tour planning and booking',
        'Restaurant reservations',
        'Event coordination',
        'Local recommendations',
        '24/7 assistance'
      ]
    },
    {
      icon: <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M9.17 16.83L15 11H9V9h8v8h-2v-6l-5.83 5.83-1-1z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>,
      title: 'Laundry & Housekeeping',
      description: 'Professional laundry and housekeeping services to keep you comfortable throughout your stay.',
      features: [
        'Same-day laundry service',
        'Dry cleaning available',
        'Daily room cleaning',
        'Turndown service',
        'Special requests accommodated'
      ]
    },
    {
      icon: <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>,
      title: 'Wellness & Recreation',
      description: 'Rejuvenate your mind and body with our wellness and recreational facilities.',
      features: [
        'Spa and massage services',
        'Yoga and meditation sessions',
        'Nature walks and hiking',
        'Outdoor activities',
        'Relaxation areas'
      ]
    }
  ];

  return (
    <ServicesContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Our Services</HeroTitle>
          <HeroSubtitle>Exceptional experiences crafted just for you</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <Container>
          <SectionTitleWrapper>
            <h2>What We Offer</h2>
            <p>Discover our comprehensive range of premium services designed to exceed your expectations</p>
          </SectionTitleWrapper>
          
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Container>
      </ServicesSection>

      <PremiumSection>
        <Container>
          <PremiumGrid>
            <PremiumContent>
              <h2>Premium Experience</h2>
              <p>
                At Kingsukh Guest House, we believe that exceptional service is not just about meeting 
                expectations—it's about creating moments that last a lifetime. Our team of dedicated 
                professionals is committed to providing personalized attention to every guest.
              </p>
              <p>
                From the moment you arrive until your departure, every detail is carefully orchestrated 
                to ensure your comfort and satisfaction. We take pride in our ability to anticipate 
                your needs and exceed your expectations at every turn.
              </p>
              <BookButton onClick={() => window.open('https://api.whatsapp.com/send?phone=919007062180', '_blank')}>
                BOOK NOW
              </BookButton>
            </PremiumContent>
            
            <PremiumImage>
              <img src="/images/recep.jpg" alt="Premium Service" />
            </PremiumImage>
          </PremiumGrid>
        </Container>
      </PremiumSection>
    </ServicesContainer>
  );
};

export default Services;