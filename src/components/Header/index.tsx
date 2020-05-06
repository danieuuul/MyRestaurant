import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <nav>
        <NavLink exact activeClassName="active" to="/">
          Cadastro
        </NavLink>
        <NavLink activeClassName="active" to="/shopping">
          Mercado
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
