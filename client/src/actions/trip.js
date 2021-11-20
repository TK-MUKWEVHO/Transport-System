import * as api from '../api/index.js';

export const reserveTrip = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.reserveTrip(formData);
  
      dispatch({ type: "RESERVE_TRIP", data });
    } catch (error) {
      console.log(error);
    }
  };