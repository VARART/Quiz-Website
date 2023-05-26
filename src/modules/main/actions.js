import actionTypes from '../../constants/actionTypes';

export const sendMessage = payload => ({ type: actionTypes.SEND_MESSAGE, payload });
export const setIsReadyForGame = payload => ({ type: actionTypes.SET_IS_READY_FOR_GAME, payload });
