import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const FloatingButtonContainer = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #4CAF50;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease-in-out;
  z-index: 9999;

  &:hover {
    background-color: #45a049;
  }

  &.pulsing {
    animation: ${pulse} 1s infinite;
  }
`;
