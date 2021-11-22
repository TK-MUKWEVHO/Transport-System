export default (state={isLoading: true,trip: []},action)=>{
    switch (action.type) {
        case 'RESERVE_TRIP':
            return {...state,trip: [...state.trip,action.payload]};
        case 'FETCH_TRIP':
            return {...state, trip: action.payload.data };
        case 'CONFIRM_TRIP':
            return { ...state, post: state.trip.map((trip) => (trip._id === action.payload._id ? action.payload : trip)) };
        default:
            return state;
    }
}