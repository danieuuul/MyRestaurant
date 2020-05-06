import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #784b84;
  padding: 30px 0;

  @media print {
    display: none;
  }

  header {
    width: 1120px;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;

    nav {
      display: flex;
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        align-items: left;
        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
        &.active {
          padding-bottom: 5px;
          border-bottom: 2px solid #ff872c;
        }
      }
    }
  }
`;
