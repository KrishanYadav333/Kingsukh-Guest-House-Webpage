import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  customerName?: string;
  email?: string;
  phone?: string;
}

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
}

export const bookingService = {
  checkAvailability: async (data: BookingData) => {
    const response = await api.post('/bookings/check-availability', data);
    return response.data;
  },
  
  createBooking: async (data: BookingData) => {
    const response = await api.post('/bookings', data);
    return response.data;
  },
  
  getAllBookings: async () => {
    const response = await api.get('/bookings');
    return response.data;
  }
};

export const contactService = {
  submitMessage: async (data: ContactData) => {
    const response = await api.post('/contact', data);
    return response.data;
  },
  
  getAllMessages: async () => {
    const response = await api.get('/contact');
    return response.data;
  }
};

export const roomService = {
  getAllRooms: async (): Promise<Room[]> => {
    const response = await api.get('/rooms');
    return response.data;
  }
};

export default api;