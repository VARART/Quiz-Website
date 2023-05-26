export const getQuestionsList = state => state.quizState.questionsList;
export const getIsReadyForGame = state => state.quizState.isUserReadyToStartQuiz;
export const getUserReadinessDocId = state => state.quizState.currentUserReadiness[0].userReadinessDocId;
