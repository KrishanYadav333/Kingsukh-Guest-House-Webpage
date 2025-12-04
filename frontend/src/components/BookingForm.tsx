import React, { useState } from 'react';
import styled from 'styled-components';
import { bookingService } from '../services/api';

const Form = styled.form`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 0;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  align-items: end;
  border: 1px solid rgba(212, 175, 55, 0.3);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 1.5rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.8rem;
  font-weight: 600;
  color: #1a1a1a;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
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
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 0;
  font-size: 1rem;
  background: white;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
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

const FormTitle = styled.h3`
  grid-column: 1 / -1;
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: #d4af37;
    margin: 1rem auto 0;
  }
`;

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'cozy-haven'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const availability = await bookingService.checkAvailability(formData);
      if (availability.available) {
        const params = new URLSearchParams(formData as any);
        window.location.href = `/contact?${params.toString()}`;
      } else {
        alert('Sorry, the selected room is not available for these dates.');
      }
    } catch (error) {
      alert('Error checking availability. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Check Availability</FormTitle>
      
      <FormGroup>
        <Label>Check In</Label>
        <Input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Check Out</Label>
        <Input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
          min={formData.checkIn || new Date().toISOString().split('T')[0]}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Guests</Label>
        <Select name="guests" value={formData.guests} onChange={handleChange}>
          <option value={1}>1 Guest</option>
          <option value={2}>2 Guests</option>
          <option value={3}>3 Guests</option>
          <option value={4}>4+ Guests</option>
        </Select>
      </FormGroup>
      
      <FormGroup>
        <Label>Room Type</Label>
        <Select name="roomType" value={formData.roomType} onChange={handleChange}>
          <option value="cozy-haven">Cozy Haven Room</option>
          <option value="spacious-serenity">Spacious Serenity Suite</option>
        </Select>
      </FormGroup>
      
      <SubmitButton type="submit" disabled={loading}>
        {loading ? 'Checking...' : 'Check Availability'}
      </SubmitButton>
    </Form>
  );
};

export default BookingForm;