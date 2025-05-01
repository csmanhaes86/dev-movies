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
  padding: 50px;
  max-width: 1200px;

  iframe {
    border: none;
  }
`;
