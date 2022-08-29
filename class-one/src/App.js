import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  overflow: hidden;
`;

const rotateAni = keyframes`
  0% {
    border-radius: 0;
    transform: rotate(0deg);
  } 
  50% {
    border-radius: 100px;
    transform: rotate(360deg);
  }
  100% {
    border-radius: 0;
    transform: rotate(0deg);
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotateAni} 2s linear infinite;
  ${Emoji} {
    &:hover {
      transform: scale(1.5);
      transition: 0.3s ease;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Box>
        <Emoji as="p">😀</Emoji>
      </Box>
      <motion.div></motion.div>
    </Wrapper>
  );
};

export default App;
