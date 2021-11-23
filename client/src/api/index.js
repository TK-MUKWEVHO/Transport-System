import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const reserveTrip=(newReservation)=>API.post('/trip/reserve',newReservation);
export const fetchTrip = (studentNumber) => API.get('/trip/fetchtrip',studentNumber);
export const confirmTrip = (id, confirmTrip) => API.patch(`/trip/confirm/${id}`, confirmTrip);
export const signIn = (formData) => API.post('/student/signin', formData);
export const signUp = (formData) => API.post('/student/signup', formData);
