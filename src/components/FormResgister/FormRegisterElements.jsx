import styled from 'styled-components';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme } from '@mui/material/styles';
import { FaTimes } from 'react-icons/fa';

export const FormRegisterThanksContainer = styled.div`
  background: #10242e;
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FormRegisterContainer = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
  
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const FormRegisterThanksHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  color: #f46f0a;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 26rem;
  }
`;

export const FormRegisterHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
  color: #10242e;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 26rem;
  }
`;

export const FormRegisterTitle = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  padding: 5px;
  color: #f46f0a;
`;
export const FormRegisterDesc = styled.p`
  margin-bottom: 1rem;
`;

export const FormRegisterButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #f46f0a;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #10242e;
    transition: 0.2s ease-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const customTheme = outerTheme =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#f46f0a',
            '--TextField-brandBorderHoverColor': '#f46f0a',
            '--TextField-brandBorderFocusedColor': '#f46f0a',
            '& label.Mui-focused': {
              color: '#f46f0a',
              marginBottom: '1rem',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
            borderBottom: '2px solid var(--TextField-brandBorderColor)',
          },
          input: {
            color: '#f46f0a',
          },
          root: {
            marginBottom: '1rem',
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
              color: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });
