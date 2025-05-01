import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  background: #000000;
  width: 70%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 50px;
  max-width: 1200px;

  button {
    align-self: flex-end;
    border: solid 1px #ffffff;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 10px;
    padding: 2px;
    background: #000000;
    color: #ffffff;

    &:hover {
      opacity: 0.8;
    }
  }

  iframe {
    border: none;
  }
`;
