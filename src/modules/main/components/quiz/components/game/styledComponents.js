import styled from 'styled-components';

export const GameWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c2d32;
  position: relative;
`;

export const GameWindow = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #56bab7;
  border-radius: 8px;
  box-shadow: rgb(17, 29, 56) 0 3px 6px, rgba(0, 0, 0, 0.69) 0 3px 6px;
  background: #232327;
  width: 35%;
  min-width: 350px;
  height: 65vh;
`;

export const QuestionWrapper = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 54px;
  line-height: 30px;
  font-size: 1vw;
`;

export const QuestionText = styled.span`
  color: white;
  user-select: none;
`;

export const AnswerButtons = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 25px;
  font-size: 1vw;
`;
