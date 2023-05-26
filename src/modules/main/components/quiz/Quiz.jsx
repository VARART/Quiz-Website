import React from 'react';
import { QuizWrapper } from './styledComponents';
import Game from './components/game';
import ReadyForGame from './components/readyForGame/ReadyForGame';

const Quiz = ({
    isQuizInProcess,
    setIsReadyForGame,
    isUserReadyToStartQuiz,
}) => {
    return (
        <QuizWrapper>
            {isQuizInProcess ?
                <Game/>
                :
                <ReadyForGame
                    callback={setIsReadyForGame}
                    isUserReadyToStartQuiz={isUserReadyToStartQuiz}
                />
            }
        </QuizWrapper>
    );
};

export default Quiz;
