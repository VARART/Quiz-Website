import actionTypes from '../../constants/actionTypes';

const initialState = {
    currentUserReadiness: [],
    isUserReadyToStartQuiz: false,
};

export default function quizReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.SET_CURRENT_USER_READINESS_STORE:
            return {
                ...state,
                currentUserReadiness: [ payload ],
            };
        case actionTypes.CLEAR_CURRENT_USER_READINESS_STORE:
            return {
                ...state,
                currentUserReadiness: [],
            };
        case actionTypes.SET_IS_USER_READY_TO_START_QUIZ_STORE:
            return {
                ...state,
                isUserReadyToStartQuiz: payload,
            };
        default:
            return state;
    }
};
