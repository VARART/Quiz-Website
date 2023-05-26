import actionTypes from '../../constants/actionTypes';

export const setDataToLocalStorage = payload => ({ type: actionTypes.SET_DATA_TO_LOCAL_STORAGE, payload });
export const setQuestionsListStore = payload => ({ type: actionTypes.SET_QUESTIONS_LIST_STORE, payload });
export const setQuestionsDocIdStore = payload => ({ type: actionTypes.SET_QUESTIONS_DOC_ID_STORE, payload });
export const setCurrentQuestionStore = payload => ({ type: actionTypes.SET_CURRENT_QUESTION_STORE, payload });
export const setCurrentUserReadinessStore = payload => ({ type: actionTypes.SET_CURRENT_USER_READINESS_STORE, payload });
export const clearCurrentUserReadinessStore = payload => ({ type: actionTypes.CLEAR_CURRENT_USER_READINESS_STORE, payload });
export const setIsUserReadyToStartQuizStore = payload => ({ type: actionTypes.SET_IS_USER_READY_TO_START_QUIZ_STORE, payload });
