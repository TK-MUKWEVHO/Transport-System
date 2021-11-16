export default (studentTrip=[],action)=>{

    switch (action.type) {
        case 'FETCH_TRIP':
            return action.payload;
        case 'RESERVE_TRIP':
            return [...studentTrip,action.payload];
        default:
            return studentTrip;
    }
}