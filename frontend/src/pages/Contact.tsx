import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { contactService, bookingService } from '../services/api';

const ContactContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/images/header.jpg');
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

const ContactSection = styled.section`
  padding: 100px 0;
  background: white;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
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
    line-height: 1.7;
    margin-bottom: 3rem;
    font-size: 1.1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-left: 4px solid #d4af37;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1.5rem;
  color: #d4af37;
  min-width: 40px;
`;

const ContactDetails = styled.div`
  h4 {
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
  }
  
  p {
    color: #666;
    margin: 0;
    line-height: 1.5;
  }
`;

const FormSection = styled.div`
  background: #f8f9fa;
  padding: 3rem;
  border: 1px solid #e0e0e0;
`;

const FormTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
  text-align: center;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: #d4af37;
    margin: 1rem auto 0;
  }
`;

const BookingSection = styled.div`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 0;
  
  h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 0.5rem;
    font-weight: 500;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 0;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 0;
  font-size: 1rem;
  background: white;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  border: none;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
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
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  &:disabled::before {
    display: none;
  }
`;

const MapSection = styled.section`
  padding: 0;
  height: 400px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.2rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('checkIn')) {
      setBookingData({
        checkIn: params.get('checkIn'),
        checkOut: params.get('checkOut'),
        guests: params.get('guests'),
        roomType: params.get('roomType')
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (bookingData) {
        await bookingService.createBooking({
          ...bookingData,
          customerName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone
        });
        alert('Booking request submitted successfully! We will contact you soon.');
      } else {
        await contactService.submitMessage(formData);
        alert('Message sent successfully! We will get back to you soon.');
      }
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getRoomTypeName = (roomType: string) => {
    return roomType === 'cozy-haven' ? 'Cozy Haven Room' : 'Spacious Serenity Suite';
  };

  return (
    <ContactContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Get In Touch</HeroTitle>
          <HeroSubtitle>We're here to make your stay unforgettable</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContactSection>
        <Container>
          <ContactGrid>
            <ContactInfo>
              <h2>Contact Information</h2>
              <p>
                Ready to experience luxury at Kingsukh Guest House? Get in touch with us for 
                reservations, inquiries, or any assistance you may need.
              </p>
              
              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                <ContactDetails>
                  <h4>Address</h4>
                  <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>📧</ContactIcon>
                <ContactDetails>
                  <h4>Email</h4>
                  <p>kkghosh0099@gmail.com</p>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <ContactDetails>
                  <h4>Phone</h4>
                  <p>+91 9007062180</p>
                </ContactDetails>
              </ContactItem>
            </ContactInfo>
            
            <FormSection>
              {bookingData && (
                <BookingSection>
                  <h4>Booking Details</h4>
                  <p><strong>Check-in:</strong> {bookingData.checkIn}</p>
                  <p><strong>Check-out:</strong> {bookingData.checkOut}</p>
                  <p><strong>Guests:</strong> {bookingData.guests}</p>
                  <p><strong>Room:</strong> {getRoomTypeName(bookingData.roomType)}</p>
                </BookingSection>
              )}
              
              <FormTitle>{bookingData ? 'Complete Your Booking' : 'Send Us A Message'}</FormTitle>
              <Form onSubmit={handleSubmit}>
                <FormRow>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </FormRow>
                
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                
                <TextArea
                  name="message"
                  placeholder={bookingData ? "Special requests or questions..." : "Your message here..."}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                
                <SubmitButton type="submit" disabled={loading}>
                  {loading ? 'Submitting...' : (bookingData ? 'Complete Booking' : 'Send Message')}
                </SubmitButton>
              </Form>
            </FormSection>
          </ContactGrid>
        </Container>
      </ContactSection>

      <MapSection>
        <p>Interactive Map Coming Soon</p>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact;