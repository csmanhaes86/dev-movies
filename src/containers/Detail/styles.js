import styled, { keyframes } from 'styled-components';

const scale = keyframes`
    from{
        transform: scale(0);
    } to{
        transform: scale(1);
    }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
`;

export const Cover = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 420px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
  z-index: 99;

  h2 {
    color: #ffffff;
    font-size: 50px;
    font-weight: 700;
  }

  p {
    color: #ffffff;
    font-weight: 700;
    margin: 20px 0 30px;
  }
`;

export const ContainerMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    margin: 20px 0;
  }

  h4{
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  iframe{
    border: none;
  }
`;
