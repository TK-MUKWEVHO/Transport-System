export default (trip=[],action)=>{
    switch (action.type) {
        case 'RESERVE_TRIP':
            return [...trip,action.payload];
        default:
            return trip;
    }
}