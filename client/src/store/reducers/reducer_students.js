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
            return {
                ...state,
                loading: true
            };
        case FETCH_STUDENTS_SUCCESS:
            const newStudents = _.mapKeys(action.students, 'idStudent')
            return {
                ...state,
                loading: false,
                error: null,
                students: newStudents
            };
        case FETCH_STUDENT_SUCCESS:
            console.log(action.student, "asdfasd")
            return {
                ...state,
                loading: false,
                error: null,
                students: { ...state.students, [action.student[0].idStudent]: action.student[0] }
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
