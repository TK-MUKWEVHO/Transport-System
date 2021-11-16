import *  as api from '../api';

export const createStudent = (student) =>async (dispatch)=>{
    try {
        const {data} = await api.createStudent(student);
        dispatch({type: 'CREATE_STUDENT', payload: data});
    } catch (error) {
        console.log(error);
    }
}