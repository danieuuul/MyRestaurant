import React, { useCallback, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { RiRestaurantLine } from 'react-icons/ri';
import { FiXCircle } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Background,
  IngredientsContainer,
  Ingredient,
  InputContainer,
  Form,
} from './styles';

interface IngredientData {
  id: string;
  name: string;
  metric: 'kg' | 'ml';
}

const Register: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [newIngredient, setNewIngredient] = useState<IngredientData>({
    metric: 'kg',
  } as IngredientData);

  const [ingredients, setIngredients] = useState<IngredientData[]>(() => {
    const storageIngredients = localStorage.getItem('@restaurant:ingredients');
    if (storageIngredients) {
      return JSON.parse(storageIngredients);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@restaurant:ingredients',
      JSON.stringify(ingredients),
    );
  }, [ingredients]);

  const handleChangeInputName = useCallback(
    async e => {
      setNewIngredient({
        ...newIngredient,
        name: e.target.value,
      });
      setIsFilled(!!e.target.value);
    },
    [newIngredient],
  );

  const handleChangeSelectMetric = useCallback(
    e => {
      setNewIngredient({
        ...newIngredient,
        metric: e.target.value === 'kg' ? 'kg' : 'ml',
      });
    },
    [newIngredient],
  );

  const handleAddIngredient = useCallback(
    async e => {
      e.preventDefault();
      setIngredients([
        ...ingredients,
        {
          id: uuid(),
          name: newIngredient.name,
          metric: newIngredient.metric,
        },
      ]);
      setNewIngredient({ ...newIngredient, name: '' });
      setIsFilled(false);
    },
    [ingredients, newIngredient],
  );

  const handleDeleteIngredient = useCallback(
    async id => {
      setIngredients(ingredients.filter(i => i.id !== id));
    },
    [ingredients],
  );

  return (
    <>
      <Header size="small" />
      <Container>
        <Content>
          <h1>Ingredientes</h1>
          <Form onSubmit={handleAddIngredient}>
            <InputContainer isFilled={isFilled} isFocused={isFocused}>
              <RiRestaurantLine size={20} />
              <input
                value={newIngredient.name}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleChangeInputName}
              />
              <select onChange={handleChangeSelectMetric}>
                <option key="kg">kg</option>
                <option key="ml">ml</option>
              </select>
            </InputContainer>
            <button type="submit">Cadastrar</button>
          </Form>
          <IngredientsContainer>
            {ingredients.map(ingredient => (
              <Ingredient key={ingredient.id}>
                <strong>{`${ingredient.name} (${ingredient.metric})`}</strong>
                <button
                  type="button"
                  onClick={() => {
                    handleDeleteIngredient(ingredient.id);
                  }}
                >
                  <FiXCircle size={15} />
                </button>
              </Ingredient>
            ))}
          </IngredientsContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default Register;
