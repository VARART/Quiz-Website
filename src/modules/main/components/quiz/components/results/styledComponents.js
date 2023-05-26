import styled from 'styled-components';

export const ResultsWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c2d32;
  position: relative;
`;

export const ScoresContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 20px;
  top: 0;
  left: 0;
  user-select: none;
`;

export const ScoresHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px 2px;
`;

export const User = styled.span`
  color: white;
  font-size: 14px;
`;

export const Scores = styled.span`
  color: white;
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  width: 166px;
  height: 33px;
  display: flex;
`;
