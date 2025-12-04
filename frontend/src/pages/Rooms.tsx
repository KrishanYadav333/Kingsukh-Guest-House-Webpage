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
  background: #f8f9fa;
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
  background: white;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
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
  top: 15px;
  right: 15px;
  background: rgba(212, 175, 55, 0.95);
  color: #fff;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;
`;

const RoomContent = styled.div`
  padding: 2rem 1.5rem;
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
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 400;
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
  background: transparent;
  color: #d4af37;
  border: 1px solid #d4af37;
  padding: 10px 24px;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    background: #d4af37;
    color: #fff;
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