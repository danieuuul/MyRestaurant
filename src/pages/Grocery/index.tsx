import React from 'react';
import { FiPrinter } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  InputContainer,
  IngredientsContainer,
  Ingredient,
  Background,
  Title,
  Content,
  Container,
} from './styles';

interface IngredientData {
  id: string;
  name: string;
  metric: string;
}

const Grocery: React.FC = () => {
  let ingredients: IngredientData[];
  const storageIngredients = localStorage.getItem('@restaurant:ingredients');
  if (storageIngredients) {
    ingredients = JSON.parse(storageIngredients);
  } else ingredients = [];

  return (
    <>
      <Header size="small" />
      <Container>
        <Background />
        <Content>
          <Title>
            Lista de Compras
            <button onClick={() => window.print()} type="button">
              <FiPrinter size={25} />
            </button>
          </Title>
          <IngredientsContainer>
            {ingredients.map(ingredient => (
              <Ingredient key={ingredient.id}>
                <strong>{`${ingredient.name} (${ingredient.metric})`}</strong>
                <InputContainer>
                  <input placeholder="qtd" />
                </InputContainer>
              </Ingredient>
            ))}
          </IngredientsContainer>
        </Content>
      </Container>
    </>
  );
};

export default Grocery;
