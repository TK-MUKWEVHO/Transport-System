export default (student=[],action)=>{

    switch (action.type) {
        case 'CREATE_STUDENT':
            return [...student,action.payload];
        default:
            return student;
    }
}