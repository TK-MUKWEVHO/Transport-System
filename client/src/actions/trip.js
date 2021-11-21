import * as api from '../api/index.js';

export const reserveTrip = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.reserveTrip(formData);
  
      dispatch({ type: "RESERVE_TRIP", data });
      router('/confirm');
    } catch (error) {
      console.log(error);
    }
  };

  export const getTrip = (studentNumber) => async (dispatch) => {
    try {
      const { data: { data } } = await api.fetchTrip(studentNumber);
      dispatch({ type: "FETCH_TRIP", payload: { data } });
    } catch (error) {
      console.log(error);
    }
  };