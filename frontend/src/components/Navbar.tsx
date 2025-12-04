import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const TopBar = styled.div<{ isScrolled: boolean }>`
  background: rgba(184, 134, 89, 0.9);
  padding: 8px 0;
  display: ${props => props.isScrolled ? 'none' : 'block'};
  transition: all 0.3s ease;
`;

const TopBarContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ContactItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
  
  svg {
    flex-shrink: 0;
  }
  
  &:hover {
    color: #fff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 16px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #d4af37;
  }
`;

const Nav = styled.nav<{ isScrolled: boolean }>`
  background: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.9)'};
  backdrop-filter: blur(20px);
  padding: 10px 0;
  transition: all 0.4s ease;
  box-shadow: ${props => props.isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftNav = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
  flex: 1;
  
  @media (max-width: 968px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(26, 26, 26, 0.98);
    padding: 2rem;
    gap: 1.5rem;
    backdrop-filter: blur(20px);
  }
`;

const RightNav = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  
  @media (max-width: 968px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: calc(100% + 200px);
    left: 0;
    width: 100%;
    background: rgba(26, 26, 26, 0.98);
    padding: 2rem;
    gap: 1.5rem;
    backdrop-filter: blur(20px);
  }
`;

const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #d4af37;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    color: #f4d03f;
  }
  
  @media (max-width: 968px) {
    font-size: 1.5rem;
  }
`;

const LogoIcon = styled.span`
  font-size: 1.5rem;
`;

const NavLink = styled(Link)<{ isActive: boolean; isScrolled: boolean }>`
  color: ${props => props.isActive ? '#d4af37' : (props.isScrolled ? '#333' : '#fff')};
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  text-shadow: ${props => props.isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.5)'};
  
  &:hover {
    color: #d4af37;
  }
`;

const BookingBtn = styled(Link)`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  padding: 12px 28px;
  border: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }
  
  @media (max-width: 968px) {
    margin-top: 1rem;
  }
`;

const MenuToggle = styled.button<{ isScrolled: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${props => props.isScrolled ? '#333' : '#fff'};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  @media (max-width: 968px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (['/services', '/gallery', '/about', '/contact'].includes(location.pathname)) {
        // Pages with hero sections: dark navbar on hero, light when scrolled
        const heroHeight = window.innerHeight * 0.6; // 60vh hero sections
        setIsScrolled(scrollY > heroHeight - 100);
      } else if (location.pathname === '/') {
        // Home page: dark navbar on hero, light when scrolled
        const heroHeight = window.innerHeight;
        setIsScrolled(scrollY > heroHeight - 100);
      } else {
        // Other pages: dark navbar initially, light when scrolled
        setIsScrolled(scrollY > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const leftNavItems = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const rightNavItems = [];

  return (
    <HeaderWrapper>
      <TopBar isScrolled={isScrolled}>
        <TopBarContainer>
          <ContactInfo>
            <ContactItem href="tel:+919007062180">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +91 9007062180
            </ContactItem>
            <ContactItem href="mailto:kkghosh0099@gmail.com">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              kkghosh0099@gmail.com
            </ContactItem>
            <ContactItem>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
            </ContactItem>
          </ContactInfo>
          <SocialLinks>
            <SocialIcon href="https://www.facebook.com/profile.php?id=61556042125754" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </SocialIcon>
          </SocialLinks>
        </TopBarContainer>
      </TopBar>

      <Nav isScrolled={isScrolled}>
        <NavContainer>
          <LeftNav isOpen={isOpen}>
            {leftNavItems.map(item => (
              <li key={item.path}>
                <NavLink 
                  to={item.path}
                  isActive={location.pathname === item.path}
                  isScrolled={isScrolled}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </LeftNav>

          <Logo to="/">
            <img src="/images/logo_of_guesthouse.png" alt="Kingsukh Guest House" style={{width: '50px', height: '50px'}} />
          </Logo>

          <RightNav isOpen={isOpen}>
            <li><BookingBtn to="/contact">BOOK NOW</BookingBtn></li>
          </RightNav>
          
          <MenuToggle isScrolled={isScrolled} onClick={() => setIsOpen(!isOpen)}>
            ☰
          </MenuToggle>
        </NavContainer>
      </Nav>
    </HeaderWrapper>
  );
};

export default Navbar;