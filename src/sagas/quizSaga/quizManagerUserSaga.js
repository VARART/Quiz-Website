import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import * as actions from './actions';
import * as selectors from './selectors';
import * as firebaseMethods from '../../firebase/quizMethods';
import firebaseCollectionTypes from '../../firebase/constants';

export default function* watchQuizUserSaga() {
    yield all([
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

        return;
    }

    yield call(clearAllCurrentUserReadinessData);
}
