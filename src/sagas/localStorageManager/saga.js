import { all, call, putResolve, select, takeEvery } from 'redux-saga/effects';
import actionTypes from '../../constants/actionTypes';
import * as selectors from './selectors';
import * as actions from './actions';

export default function* rootLocalStorageSaga() {
    yield all([
        call(getUserDataFromLocalStorage),
        takeEvery(actionTypes.SET_DATA_TO_LOCAL_STORAGE, setDataToLocalStorage),
        takeEvery(actionTypes.REMOVE_DATA_FROM_LOCAL_STORAGE, removeDataFromLocalStorage),
        takeEvery(actionTypes.REMOVE_ITEM_FROM_LOCAL_STORAGE, removeItemFromLocalStorage),
    ]);
};

export function* getUserDataFromLocalStorage() {
    const { uid, docId } = yield select(selectors.getUserState);

    if (uid || docId) {
        return false;
    }

    const userLocalStorageData = yield call([localStorage, 'getItem'], 'authData');

    if (!userLocalStorageData) {
        return;
    }

    const parsedUserLocalStorageData = yield call([JSON, 'parse'], userLocalStorageData);

    yield putResolve(actions.setUserDataFromLocalstorageStore({
        userId: parsedUserLocalStorageData.uid,
        userDocId: parsedUserLocalStorageData.docId,
    }));
}

export function* setDataToLocalStorage(action) {
    const {
        data,
        fieldType,
    } = action.payload;

    yield call([localStorage, 'setItem'], fieldType, JSON.stringify(data));
}

export function* removeDataFromLocalStorage() {
    yield call([localStorage, 'clear']);
}

export function* removeItemFromLocalStorage({ payload }) {
    yield call([localStorage, 'removeItem'], payload);
}
