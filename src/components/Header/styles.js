import styled from 'styled-components';

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 50px;

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
 

    a{
        text-decoration: none;
        color: #ffffff;
    }
`;
