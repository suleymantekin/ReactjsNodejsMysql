export const FETCH_STUDENTS = "FETCH_STUDENTS";
export const START_FETCH_STUDENTS = "START_FETCH_STUDENTS";

const BASE_URL = 'http://localhost:4000'

export const fetchStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        students
    }
};

export const startFetchStudents = () => {
    return (dispatch) => {
        fetch(`${BASE_URL}/api/students`)
            .then(res => res.json())
            .then(students => {
                console.log(students, "asdfs");
                dispatch(fetchStudents(students.response));
            })
    };
}

