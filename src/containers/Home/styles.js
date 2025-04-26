import styled from 'styled-components';

export const Background = styled.div`
  background-image: url(${(props) => props.img});
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: rgba(0,0,0,0.5);
  }
`;
