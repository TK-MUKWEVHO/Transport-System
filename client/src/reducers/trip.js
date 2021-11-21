export default (state={isLoading: true,trip: []},action)=>{
    switch (action.type) {
        case 'RESERVE_TRIP':
            return {...state,trip: [...state.trip,action.payload]};
        case 'FETCH_TRIP':
            return {...state, trip: action.payload.data };
        default:
            return state;
    }
}