import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

//export const fetchTrip = (id) => API.get(`/studentTrip/${id}`);
//export const reserveTrip=(newReservation)=>API.post('/studentTrip',newReservation);


export const signIn = (formData) => API.post('/student/signin', formData);
export const signUp = (formData) => API.post('/student/signup', formData);
