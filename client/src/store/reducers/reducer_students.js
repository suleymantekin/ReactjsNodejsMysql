import {
    FETCH_STUDENTS_FAILURE,
    FETCH_STUDENTS_STARTED,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENT_SUCCESS,
} from '../actions/actions_students'
import _ from 'lodash';

const initialState = {
    loading: false,
    students: {},
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENTS_STARTED:
            console.log("In cctions")
            return {
                ...state,
                loading: true
            };
        case FETCH_STUDENTS_SUCCESS:
            const newStudents = _.mapKeys(action.students, 'idStudent')
            console.log(newStudents);
            return {
                ...state,
                loading: false,
                error: null,
                students: newStudents
            };
        case FETCH_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                students: action.students
            };
        case FETCH_STUDENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}
