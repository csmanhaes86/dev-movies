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
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-width: 1500px;
`;

export const Info = styled.div`
  z-index: 2;
  width: 50%;
  padding: 20px;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    margin: 20px 0 30px;
  }
`;

export const Poster = styled.div`
  z-index: 3;
  img {
    width: 400px;
    border-radius: 30px;
  }
`;

export const ConatinerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
