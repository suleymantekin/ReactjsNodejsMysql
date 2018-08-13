import axios from 'axios';

// Types
export const FETCH_STUDENTS_STARTED = "FETCH_STUDENTS_STARTED";
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";


const BASE_URL = 'http://localhost:4000'


export const fetchStudents = () => {
    return (dispatch) => {
        dispatch(fetchStudentsStarted);
        axios.get(`${BASE_URL}/api/students`)
            .then(res => {
                console.log(res.data.response);
                dispatch(fetchStudentsSuccess(res.data.response));
            })
            .catch(err => {
                dispatch(fetchStudentsFailure(err))
                console.log(err)
            })

    };
}

export const fetchStudentsSuccess = (students) => {
    return {
        type: FETCH_STUDENTS_SUCCESS,
        students
    }
};

const fetchStudentsStarted = () => ({
    type: FETCH_STUDENTS_STARTED
});

const fetchStudentsFailure = (error) => ({
    type: FETCH_STUDENTS_FAILURE,
    payload: {
        error
    }
});

