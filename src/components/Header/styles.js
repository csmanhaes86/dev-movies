import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100px;
  z-index: 99;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  background-color: ${(props) =>
    props.changeBackground ? '#000000' : 'transparent'};
  transition: background-color 0.7s ease-in-out;

  img {
    width: 30%;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const Li = styled.li`
  font-weight: 600;
  font-size: 28px;
  position: relative;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
