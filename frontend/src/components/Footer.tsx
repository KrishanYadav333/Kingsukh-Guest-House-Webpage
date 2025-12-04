import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 80px 0 30px;
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #d4af37;
  }
  
  h4 {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #d4af37;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  
  p {
    line-height: 1.7;
    margin-bottom: 1rem;
    color: #ccc;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.8rem;
      
      a {
        color: #ccc;
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        
        &:hover {
          color: #d4af37;
          padding-left: 10px;
        }
      }
    }
  }
`;

const BookButton = styled(Link)`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  padding: 14px 28px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.4s ease;
  display: inline-block;
  margin-top: 1.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(212, 175, 55, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4af37;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #d4af37;
    color: #1a1a1a;
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  color: #999;
  
  p {
    margin: 0;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;
  
  div {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    color: #ccc;
    
    span {
      margin-right: 10px;
      color: #d4af37;
      font-weight: bold;
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>Kingsukh Guest House</h3>
            <p>
              Discover a world of comfort, luxury, and adventure as you explore our curated 
              selection of accommodations, making every moment of your getaway truly extraordinary.
            </p>
            <BookButton to="/contact">Reserve Your Stay</BookButton>
            
            <SocialLinks>
              <SocialLink href="https://www.facebook.com/profile.php?id=61556042125754" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="/images/facebook.png" alt="Facebook" width="20" height="20" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/images/instagram.png" alt="Instagram" width="20" height="20" />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <img src="/images/twitter.png" alt="Twitter" width="20" height="20" />
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                <img src="/images/youtube.png" alt="YouTube" width="20" height="20" />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/rooms">Our Rooms</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h4>Services</h4>
            <ul>
              <li>Room Service</li>
              <li>Concierge</li>
              <li>Tour Guidance</li>
              <li>Airport Transfer</li>
              <li>Laundry Service</li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h4>Contact Info</h4>
            <ContactInfo>
              <div>
                <span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </div>
              <div>
                <span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                kkghosh0099@gmail.com
              </div>
              <div>
                <span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </span>
                +91 9007062180
              </div>
            </ContactInfo>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <p>&copy; 2024 Kingsukh Guest House. All rights reserved. | Designed with luxury in mind.</p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;