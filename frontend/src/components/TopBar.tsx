import React from 'react';
import styled from 'styled-components';

const TopBarContainer = styled.div`
  background: #1a1a1a;
  color: white;
  padding: 8px 0;
  font-size: 14px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  
  span {
    color: #d4af37;
    margin-right: 8px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: #d4af37;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #f4d03f;
    }
  }
`;

const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
      <Container>
        <ContactInfo>
          <div>
            <span>📍</span>
            Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
          </div>
          <div>
            <span>📧</span>
            kkghosh0099@gmail.com
          </div>
          <div>
            <span>📞</span>
            +91 9007062180
          </div>
        </ContactInfo>
        
        <SocialLinks>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </SocialLinks>
      </Container>
    </TopBarContainer>
  );
};

export default TopBar;