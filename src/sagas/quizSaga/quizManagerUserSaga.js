import { all, call, delay, put, select, putResolve, takeEvery } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import { sendGetRequest } from '../../API/sendGetRequest';
import { questionsUrl } from '../../API/constants';
import * as actions from './actions';
import * as selectors from './selectors';
import * as firebaseMethods from '../../firebase/quizMethods';
import firebaseCollectionTypes from '../../firebase/constants';

export default function* watchQuizUserSaga() {
    yield all([
        takeEvery(actionTypes.SET_QUESTIONS, startQuiz),
        takeEvery(actionTypes.SET_IS_READY_FOR_GAME, setIsReadyForGameRequest),
    ]);
};

export function* clearAllCurrentUserReadinessData() {
    const userReadinessDocId = yield select(selectors.getUserReadinessDocId);

    yield call(firebaseMethods.deleteFromCollectionByDocIdRequest, {
        type: firebaseCollectionTypes.USERS_READINESS,
        docId: userReadinessDocId
    });

    yield put(actions.setDataToLocalStorage({
        fieldType: 'quizData',
        data: {
            currentUserReadiness: [],
            isUserReadyToStartQuiz: false,
        } }));

    yield put(actions.setIsUserReadyToStartQuizStore(false));
}

export function* setIsReadyForGameRequest() {
    const isUserReadyForGame = yield select(selectors.getIsReadyForGame);

    if (!isUserReadyForGame) {
        const response = yield call(firebaseMethods.sendAddUserReadinessRequest);

        yield put(actions.setCurrentUserReadinessStore(response));
        yield put(actions.setIsUserReadyToStartQuizStore(true));
        yield put(actions.setDataToLocalStorage({
            fieldType: 'quizData',
            data: {
                isUserReadyToStartQuiz: true,
                currentUserReadiness: response,
            } }));

        const isUsersReadyToStartQuiz = yield call(firebaseMethods.checkIsUsersReadyToStartQuiz);

        isUsersReadyToStartQuiz && (yield call(initializeBeforeStartQuiz));

        return;
    }

    yield call(clearAllCurrentUserReadinessData);
}


export function* initializeBeforeStartQuiz() {
    try {
        const data = yield call(sendGetRequest, questionsUrl)
        const { results: questions } = data;
        const questionsDocId = yield call(firebaseMethods.sendAddQuestionsRequest, questions);

        yield put(actions.setQuestionsDocIdStore(questionsDocId));
    } catch (error) {
        console.error('error', error);
    }
}

export function* startQuiz({ payload: questionsList }) {
    if (!questionsList) {
        return;
    }

    yield putResolve(actions.setQuestionsListStore(questionsList));

    const questions = yield select(selectors.getQuestionsList);

    for(let question of questions) {
        yield put(actions.setCurrentQuestionStore(question));

        yield delay(10000);
    }
}
