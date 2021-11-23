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

  export const getTrip = () => async (dispatch) => {
    try {
      const { data }  = await api.fetchTrip();
      dispatch({ type: "FETCH_TRIP", payload: { data } });
    } catch (error) {
      console.log(error);
    }
  };

  export const confirmTrip = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.confirmTrip(formData);
  
      dispatch({ type: "CONFIRM_TRIP", data });
      router('/home');
    } catch (error) {
      console.log(error);
    }
  };