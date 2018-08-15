import axios from 'axios';

// Types
export const FETCH_STUDENTS_STARTED = "FETCH_STUDENTS_STARTED";
export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const FETCH_STUDENT_SUCCESS = "FETCH_STUDENT_SUCCESS";
export const FETCH_STUDENTS_FAILURE = "FETCH_STUDENTS_FAILURE";


const BASE_URL = 'http://localhost:4000'


export const fetchStudents = () => {
    return function (dispatch) {
        dispatch(fetchStudentsStarted());
        axios.get(`${BASE_URL}/api/students`)
            .then(res => {
                dispatch(fetchStudentsSuccess(res.data.response));
            })
            .catch(err => {
                dispatch(fetchStudentsFailure(err))
                console.log(err)
            })
    };
}

export const fetchStudent = (id) => {
    return (dispatch) => {
        dispatch(fetchStudentsStarted);
        axios.get(`${BASE_URL}/api/students/${id}`)
            .then(res => {
                console.log(res.data.response);
                dispatch(fetchStudentSuccess(res.data.response));
            })
            .catch(err => {
                dispatch(fetchStudentsFailure(err))
                console.log(err)
            })

    };
}

export const updateStudent = (id, student) => {
    return (dispatch) => {
        axios.post(`${BASE_URL}/api/students/update/${id}`, {
            idStudent: id,
            ...student
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
}

export const deleteStudent = (id) => {
    return (dispatch) => {
        axios.post(`${BASE_URL}/api/students/delete/${id}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    };
}

export const fetchStudentsSuccess = (students) => {
    return {
        type: FETCH_STUDENTS_SUCCESS,
        students
    }
};

export const fetchStudentSuccess = (student) => {
    return {
        type: FETCH_STUDENT_SUCCESS,
        student
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

