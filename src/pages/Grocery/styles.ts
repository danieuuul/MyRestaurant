import styled from 'styled-components';

import supermarketBackground from '../../assets/supermarket.jpeg';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  line-height: 56px;

  margin-top: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    outline: none;
    margin-left: 12px;
    color: #ff872c;

    @media print {
      display: none;
    }
  }
`;

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
`;

export const Background = styled.div`
  flex: 1;
  background: url(${supermarketBackground}) no-repeat center;
  background-size: cover;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  margin-top: 36px;
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

export const InputContainer = styled.div`
  background: #bbbbbb;
  border-radius: 10px;
  padding: 8px;
  width: 50px;

  border: 3px solid #ff872c;
  color: #666360;

  display: flex;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: #888888;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
      -webkit-transition-delay: 9999s;
    }
  }
`;
