import {
    FETCH_STUDENTS_FAILURE,
    FETCH_STUDENTS_STARTED,
    FETCH_STUDENTS_SUCCESS
} from '../actions/actions_students'

const initialState = {
    loading: false,
    students: [],
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
