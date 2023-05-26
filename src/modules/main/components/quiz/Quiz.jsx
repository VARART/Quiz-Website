import React from 'react';
import { QuizWrapper } from './styledComponents';
import ReadyForGame from './components/readyForGame/ReadyForGame';

const Quiz = ({
    setIsReadyForGame,
    isUserReadyToStartQuiz,
}) => {
    return (
        <QuizWrapper>
            <ReadyForGame
                callback={setIsReadyForGame}
                isUserReadyToStartQuiz={isUserReadyToStartQuiz}
            />
        </QuizWrapper>
    );
};

export default Quiz;
