import axios from 'axios';

const url = 'http://localhost:3000/studentTrip';
const API = axios.create({ baseURL: 'http://localhost:5000' });
//
export const fetchTrip = () => axios.get(url);
export const reserveTrip=(newReservation)=>axios.post(url,newReservation);
export const createStudent=(newStudent)=>axios.post(url,newStudent);

export const signIn = (formData) => API.post('/student/signin', formData);
export const signUp = (formData) => API.post('/student/signup', formData);
