import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { roomService, Room } from '../services/api';

const RoomsContainer = styled.div`
  padding-top: 100px;
  min-height: 100vh;
  background: #fff;
`;

const HeroSection = styled.section`
  padding: 80px 0 60px;
  background: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const RoomsSection = styled.section`
  padding: 40px 0 100px;
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

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
`;

const RoomsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const RoomCard = styled.div`
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.15), 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease;
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

const RoomImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const RoomImage = styled.div<{ bgImage: string }>`
  height: 280px;
  background: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.4s ease;
  
  ${RoomCard}:hover & {
    transform: scale(1.05);
  }
`;

const PriceTag = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  padding: 12px 20px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 25px;
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const RoomContent = styled.div`
  padding: 2.5rem 2rem;
  background: linear-gradient(145deg, #ffffff, #fafafa);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #f4d03f);
    border-radius: 2px;
  }
`;

const RoomCategory = styled.p`
  color: #999;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const RoomTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  font-weight: 600;
  text-align: center;
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

const RoomMeta = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 1.5rem;
  color: #666;
  font-size: 0.9rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const RoomDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BookButton = styled.button`
  background: linear-gradient(135deg, #d4af37, #f4d03f);
  color: #1a1a1a;
  border: none;
  padding: 14px 32px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s ease;
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
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
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(212, 175, 55, 0.4);
  }
`;

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const roomData = await roomService.getAllRooms();
        setRooms(roomData);
      } catch (err) {
        setError('Failed to load rooms. Please try again later.');
        console.error('Error fetching rooms:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleBookRoom = (roomId: string, roomName: string) => {
    const params = new URLSearchParams({
      roomType: roomId,
      roomName: roomName,
      checkIn: '',
      checkOut: '',
      guests: '2'
    });
    window.location.href = `/contact?${params.toString()}`;
  };

  if (loading) {
    return (
      <RoomsContainer>
        <HeroSection>
          <SectionTitle>Loading Rooms...</SectionTitle>
        </HeroSection>
      </RoomsContainer>
    );
  }

  if (error) {
    return (
      <RoomsContainer>
        <HeroSection>
          <SectionTitle>Kingsukh Guest House Rooms</SectionTitle>
          <p style={{ color: '#d4af37', marginTop: '1rem' }}>{error}</p>
        </HeroSection>
      </RoomsContainer>
    );
  }

  return (
    <RoomsContainer>
      <HeroSection>
        <SectionTitle>Kingsukh Guest House Rooms</SectionTitle>
      </HeroSection>

      <RoomsSection>
        <Container>
          <RoomsGrid>
            {rooms.map(room => (
              <RoomCard key={room.id}>
                <RoomImageWrapper>
                  <RoomImage bgImage={room.image} />
                  <PriceTag>₹{room.price} / NIGHT</PriceTag>
                </RoomImageWrapper>
                <RoomContent>
                  <RoomCategory>Luxury Room</RoomCategory>
                  <RoomTitle>{room.name}</RoomTitle>
                  
                  <RoomDescription>{room.description}</RoomDescription>
                  
                  <RoomMeta>
                    {room.features.map((feature, index) => (
                      <MetaItem key={index}>
                        <span>✓</span>
                        <span>{feature}</span>
                      </MetaItem>
                    ))}
                  </RoomMeta>
                  
                  <BookButton onClick={() => handleBookRoom(room.id, room.name)}>
                    BOOK NOW
                  </BookButton>
                </RoomContent>
              </RoomCard>
            ))}
          </RoomsGrid>
        </Container>
      </RoomsSection>
    </RoomsContainer>
  );
};

export default Rooms;