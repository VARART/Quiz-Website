import React, { useState, useEffect } from 'react';
import {
    GameWindow,
    GameWrapper,
    QuestionText,
    AnswerButtons,
    QuestionWrapper,
} from './styledComponents';
import CustomButton from '../../../../../customComponents/customButton/CustomButton';

const Game = ({
    text,
    answers,
    correctAnswer,
}) => {
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setIsDisabled(false);
    }, [text, answers, correctAnswer]);

    const handleClick = answer => {
        console.log('answer', answer)
    };

    return (
        <GameWrapper>
            <GameWindow>
                <QuestionWrapper>
                    <QuestionText
                        children={text}
                    />
                </QuestionWrapper>
                <AnswerButtons>
                    {answers?.map((answer, i) =>
                        <CustomButton
                            key={i}
                            text={answer}
                            isDisabled={isDisabled}
                            callback={() => handleClick(answer)}
                            activeBackgroundColor={answer !== correctAnswer && 'red'}
                        />
                    )}
                </AnswerButtons>
            </GameWindow>
        </GameWrapper>
    );
};

export default Game;
