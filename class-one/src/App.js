import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #9b59b6;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.1, rotate: 90 },
  click: { scale: 1, borderRadius: '50%' },
  drag: { backgroundColor: 'rgb(46, 204, 113)' },
};

const App = () => {
  const dragArea = useRef(null);
  return (
    <Wrapper>
      <Container ref={dragArea}>
        <Box
          drag
          dragConstraints={dragArea}
          dragSnapToOrigin
          dragElastic={0}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        ></Box>
      </Container>
    </Wrapper>
  );
};

export default App;
