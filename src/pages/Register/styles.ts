import styled, { css } from 'styled-components';
import { shade } from 'polished';

import ingredientsBackground from '../../assets/ingredientsBackground.jpg';

interface FormProps {
  hasError: boolean;
}

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  width: 100%;
  max-width: 700px;

  h1 {
    font-size: 48px;
    color: #fff;
    line-height: 56px;

    margin-top: 80px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${ingredientsBackground}) no-repeat center;
  background-size: cover;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  margin: 25px 0;
  width: 340px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    background: #ff9000;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0px 16px; /** somente nas laterais */
    color: #312e38;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4efe8;

    &::placeholder {
      color: #666360;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
      -webkit-transition-delay: 9999s;
    }
  }

  select {
    margin-left: 16px;
    background: transparent;
    border: 0;
    color: #f4efe8;
    width: 50px;
    padding: 3px;
    font-size: 16px;
    border-radius: 5px;

    background-color: #666360;
  }

  svg {
    margin-right: 16px;
  }
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
`;

export const Ingredient = styled.div`
  width: 100%;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  padding: 8px;
  border-radius: 10px;

  svg {
    margin-right: 8px;
    color: #c53030;
  }

  strong {
    font-size: 20px;
    color: #312e38;
  }

  button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    outline: none;
  }

  & + div {
    margin-top: 8px;
  }
`;
