import axios from 'axios';

const url = 'http://localhost:3000/studentTrip';

//
export const fetchTrip = () => axios.get(url);
